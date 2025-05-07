import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY, RESEND_CONTACT_EMAIL } from '$env/static/private';
import type { Actions } from './$types';
import contact from '$data/contact';
import { servicesList } from '$data/services';

const resend = new Resend(RESEND_API_KEY);

export const actions: Actions = {
  email: async ({ request, url }) => {
    const hostname = url.hostname;
    const isEnglishSubdomain = hostname.startsWith('en.');
    const locale = isEnglishSubdomain ? 'en' : 'es';

    const formData = await request.formData();

    const name = formData.get('name')?.toString().trim() || '';
    const email = formData.get('email')?.toString().trim() || '';
    const phone = formData.get('phone')?.toString().trim() || '';
    const service = formData.get('service')?.toString().trim() || '';
    const message = formData.get('message')?.toString().trim() || '';

    const invalidFields: string[] = [];

    if (!name) invalidFields.push('name');
    if (!email) invalidFields.push('email');
    if (!phone) invalidFields.push('phone');
    if (!service) invalidFields.push('service');

    if (invalidFields.length > 0) {
      return fail(400, {
        success: false,
        message: 'Please fill in all required fields.',
        invalidFields
      });
    }

    try {
      await resend.emails.send({
        from: 'Notifications <notifications@updates.juliopalencia.com>',
        to: [RESEND_CONTACT_EMAIL],
        subject: `${contact[locale].subject.prefix} | ${name} ${contact[locale].subject.text} ${servicesList[locale].find((s) => s.value === service)?.label}`,
        replyTo: email,
        html: `
          <h3>${contact[locale].body}</h3>
          <p><strong>${contact[locale].form.name}</strong> ${name}</p>
          <p><strong>${contact[locale].form.email}</strong> ${email}</p>
          <p><strong>${contact[locale].form.phone}</strong> ${phone}</p>
          <p><strong>${contact[locale].form.message}</strong></p>
          <p>${message}</p>
        `,
        text: `${contact[locale].body}
          ${contact[locale].form.name} ${name}
          ${contact[locale].form.email} ${email}
          ${contact[locale].form.phone} ${phone}
          ${contact[locale].form.message}
          ${message}`
      });

      return {
        success: true,
        message: 'Your message has been sent successfully!'
      };
    } catch (err) {
      console.error(err);
      return fail(500, {
        success: false,
        message: 'Failed to send.',
        error: err
      });
    }
  }
};

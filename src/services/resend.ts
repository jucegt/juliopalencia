import { env } from '$env/dynamic/private';
import { servicesList } from '$data/services';
import contact from '$data/contact';

const { RESEND_API_KEY, RESEND_CONTACT_EMAIL } = env;

export default async function sendEmail(
  name: string,
  email: string,
  phone: string,
  service: string,
  message: string,
  locale: 'es' | 'en'
) {
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
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
      })
    });

    if (!response.ok) {
      const error = await response.json();

      return {
        success: false,
        message: 'Failed to send.',
        error
      };
    }

    return {
      success: true,
      message: 'Your message has been sent successfully!'
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to send.',
      error
    };
  }
}

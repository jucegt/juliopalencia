import { fail } from '@sveltejs/kit';
import buildWhatsappMessage from '$util/whatsapp-message';
import createWhatsappUrl from '$util/whatsapp-link';
import sendEmail from '$service/resend';
import type { Actions } from './$types';

export const actions: Actions = {
  send: async ({ request, url }) => {
    const hostname = url.hostname;
    const isEnglishSubdomain = hostname.startsWith('en.');
    const locale = isEnglishSubdomain ? 'en' : 'es';

    const formData = await request.formData();

    const name = formData.get('name')?.toString().trim() || '';
    const email = formData.get('email')?.toString().trim() || '';
    const phone = formData.get('phone')?.toString().trim() || '';
    const service = (formData.get('service')?.toString().trim() || '') as
      | 'business-website'
      | 'promotional-page'
      | 'website-maintenance-plan'
      | 'digital-guidance'
      | 'whatsapp-automation';
    const message = formData.get('message')?.toString().trim() || '';
    const intent = formData.get('intent')?.toString().trim() || '';

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

    if (intent === 'whatsapp') {
      const whatsappMessage = buildWhatsappMessage({
        name,
        phone,
        email,
        service,
        message,
        lang: locale
      });
      const whatsappUrl = createWhatsappUrl('50230138559', whatsappMessage);
      return {
        success: true,
        message: 'WhatsApp link generated successfully.',
        url: whatsappUrl
      };
    }

    try {
      return await sendEmail(name, email, phone, service, message, locale);
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

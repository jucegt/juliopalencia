import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
  email: async ({ request }) => {
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

    console.log('Form Data:', {
      name,
      email,
      phone,
      service,
      message
    });

    return {
      success: true,
      message: 'Your message has been sent successfully!'
    };
  }
};

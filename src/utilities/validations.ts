import { z } from 'zod';

export const emailSchema = z.string().trim().email({ message: 'Invalid email address' });

export const phoneSchema = z
  .string()
  .trim()
  .refine(
    (val) => {
      const digits = val.replace(/\D/g, '');
      return (
        digits.length === 10 ||
        digits.length === 11 ||
        (digits.startsWith('1') && digits.length === 11)
      );
    },
    {
      message: 'Invalid phone number format'
    }
  );

export const inputValidations = {
  email: emailSchema,
  tel: phoneSchema
};

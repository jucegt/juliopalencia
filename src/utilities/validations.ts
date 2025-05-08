import { z } from 'zod';

export const emailSchema = z.string().trim().email({ message: 'Invalid email address' });

export const phoneSchema = z
  .string()
  .trim()
  .regex(/^\+?[0-9\s\-()]{7,15}$/, {
    message: 'Invalid phone number format'
  });

export const inputValidations = {
  email: emailSchema,
  tel: phoneSchema
};

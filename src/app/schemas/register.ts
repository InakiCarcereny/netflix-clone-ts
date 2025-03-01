import { z } from 'zod';

const registerSchema = z.object({
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export type FormValues = z.infer<typeof registerSchema>;

export default registerSchema;

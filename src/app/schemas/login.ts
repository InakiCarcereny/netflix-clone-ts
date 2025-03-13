import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('Invalid email').min(1, 'Email is required'),
});

export type FormValuesLogin = z.infer<typeof loginSchema>;

export default loginSchema;

import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().nonempty().email(),
  password: z.string().nonempty(),
});

export const signUpSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().nonempty().email(),
  password: z.string().nonempty(),
});

export type SignInSchema = z.infer<typeof signInSchema>;
export type SignUpSchema = z.infer<typeof signUpSchema>;

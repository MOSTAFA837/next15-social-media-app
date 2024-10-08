import { z } from "zod";

const requiredString = z.string().trim().min(1, "Required field");

export const signUpSchema = z.object({
  email: requiredString.email("Invalid email address"),
  username: requiredString.regex(
    /^[a-zA-Z0-9_-]/,
    "Only letters, numbers, - and _ allawed"
  ),
  password: requiredString.min(8, "Password must be at least 8 characters"),
});

export const loginSchema = z.object({
  username: requiredString,
  password: requiredString,
});

export const createPostSchema = z.object({
  content: requiredString,
});

export type SignUpValues = z.infer<typeof signUpSchema>;
export type LoginValues = z.infer<typeof loginSchema>;

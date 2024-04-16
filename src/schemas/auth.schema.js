import { z } from "zod";

//validar login y register
// "zod": es una biblioteca de validación de esquemas

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "invalid email",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password mus be at least 6 characters",
    }),
});

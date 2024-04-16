import { z } from "zod";

export const createProjectSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  description: z.string({
    required_error: "Description must be string",
  }),
  url: z.string({
    required_error: "URL must be string",
  }),
  images: z.array(z.string()).optional(), // Array de strings para las imágenes
  stack: z.array(z.string()).optional(), // Array de strings para el stack
});
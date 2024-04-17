import { z } from "zod";

export const createProjectSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  description: z.string({
    required_error: "Description must be string",
  }),
  date: z.string().datetime().optional,
});

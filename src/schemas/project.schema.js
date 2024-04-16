import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  description: z.string({
    required_error: "Description mus be string",
  }),
  url: z.string({
    required_error: "url must be string",
  })
});

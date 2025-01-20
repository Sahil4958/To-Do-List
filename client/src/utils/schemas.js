import {z} from "zod";

export const TodoSchema = z.object({
    text: z.string({required_error: "Text is Required."})
})
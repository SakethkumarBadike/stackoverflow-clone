import {z} from "zod"
export const answersSchema=z.object({
       description:z.string().min(10).max(300)
})
export type answerType= z.infer<typeof answersSchema>
import {z} from "zod"
export const questionsSchema=z.object(
    {
        title:z.string().min(10).max(30),
        description:z.string().min(10).max(300)    
    }
)
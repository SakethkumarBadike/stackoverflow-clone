import {z} from "zod"
export const usernameValidation=z.string()
            .min(6)
            .max(20)
            .regex(/^[a-zA-Z][a-zA-Z0-9]*$/)
export const signUpSchema=z.object({
    username:usernameValidation,
    email:z.string().email(),
    password:z.string().min(6,"password must be of minimum 6 characters").max(12,"password cannot excede 12 characters"),

})
export type signupType=z.infer<typeof signUpSchema>;
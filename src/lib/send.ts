import {Resend} from "resend"
import VerificationEmail from "../../Emails/VerificationEmail"
import ApiResponse from "@/Types/ApiResponse"
export const resend=new Resend(process.env.RESEND_API_KEY)
export async function sendVerificationEmail(email:string):Promise<ApiResponse>{
    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: 'Hello world',
            react: VerificationEmail(),
          });
        
        return {
            message:"failed",
            success:false,
            successCode:400
        }
        
    } catch (error) {
        console.log("error sending verification email")
        return {
            message:"failed",
            success:false,
            successCode:400
        }
    }
}


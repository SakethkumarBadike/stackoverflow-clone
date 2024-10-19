
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import {prisma}from "@/lib/prisma"
import bcrypt from "bcrypt"
import { redirect } from 'next/navigation';
import { useToast } from "@/components/ui/use-toast"

 const authOptions={
    providers:[
        CredentialsProvider({
            name:"Email",
            credentials:{
            email:{label:"Email",type:"text",placeholder:"Email"},
            password:{label:"Password",type:"password",placeholder:"Password"}
           },
            async authorize(credentials):Promise<any>{
               const {email,password}:any=credentials
            //    console.log(email,password)
               const User= await prisma.user.findFirst({where:{email}})
               if(!User){
                // toast({ 
                //     variant: "destructive",           //who uses this in backend it should be done in frontend part !
                //     title:"usernot found",
                //     description:"having no account? sigin "
                // })
            //    return Response.json(
            //         {
            //             messgae:"user doenot exits",
            //             success:false,
            //             successCode:400
            //         }
            //     ) 
            return null;
               }
               const hashedpassword=User.password
               const isPasswordCorrect=await bcrypt.compare(password,hashedpassword)
               if(isPasswordCorrect){
                    console.log("sucess")
                    return  Response.json(
                        {
                            messgae:"logined success",
                            status:true,
                            statuscode:200
                        }
                    )
                }
                   
              return null;//update this to return user object to show what error is there.
               
            }
        }  
        ),
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID||"",
            clientSecret:process.env.GOOGLE_CLIENT_SECRET||""
        })
        
    ],
   
    secret:process.env.AUTH_SECRET
}

export default authOptions;
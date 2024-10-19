
import { NextRequest, NextResponse } from "next/server";
import { signupType } from "@/schemas/signUp.schema";
import {prisma} from "@/lib/prisma"
import ApiResponse from "@/Types/ApiResponse";
import bcrypt from "bcrypt"
export async function POST(request:NextRequest){
      const {username,email,password}:signupType=await request.json();
      console.log(username,password,email);
      //CONTINUE:
      try{
      const userwithEmail = await prisma.user.findFirst({where:{email}}) ;
      if(userwithEmail){
           return NextResponse.json({
            message:"user already exists",
            success:false,
            successCode:400
           })
      }
      else{
            const hashedPasword=bcrypt.hashSync(password,8);
           const newUser=await prisma.user.create({
            data:{
                  username,email,password:hashedPasword
            }
           })  
           console.log(newUser);
           return NextResponse.json({
            message:"user created",
            success:true,
            successCode:200
           })

      }}
      catch(error){
            console.log("ERROR: " ,error)
            return NextResponse.json( {
                  message:"error siginngup user",
                  success:false,
                  successCode:400
            })
      }
}
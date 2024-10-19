import { NextResponse } from "next/server";

export default interface ApiResponse {
    message:string,
    success:boolean,
    successCode:number
}
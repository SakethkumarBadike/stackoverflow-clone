"use client"
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
export default function Navbar(){
    return(
        <div className="h-20 w-full  flex justify-between items-center px-7 ">
            <div className="h-16 flex items-center text-white w-1/3 ">
                <img  className="h-full px-2 invert " src="https://www.svgrepo.com/show/533324/code.svg" alt="" />
                <h1 className="text-xl font-bold">DEV ORBIT</h1>
            </div>
            <div className="flex text-white text-lg justify-between w-1/3 p-4">
                <Link href="/">Home</Link>
                <Link href="/Questions">Questions</Link>
                <Link href="">About Us</Link>
                {useSession().data ? <Link href="/">profile</Link> : <Link href="/singup">login</Link>}
                 {/* <button onClick={()=>signOut()} >logout</button> */}
                <div className=" h-8 "><img className="h-full invert"  src="https://static.vecteezy.com/system/resources/previews/006/086/198/original/notification-icon-for-web-vector.jpg" alt="" /></div>
            </div>
        </div>
    )
}
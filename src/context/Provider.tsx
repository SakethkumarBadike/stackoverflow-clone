"use client"

import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { ReactHTMLElement } from "react";
import React from "react";
export default function Provider({children}:{children:React.ReactNode}){
    return(
        <SessionProvider >
           {children}
            </SessionProvider>
    )

}
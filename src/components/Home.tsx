"use client";
import React from "react";
import { useSession } from "next-auth/react";
export default function Home(){
  return (
    <div className="text-white">
      {JSON.stringify(useSession().data)}
    </div>
  )
}
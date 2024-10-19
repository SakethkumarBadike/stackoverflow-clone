
// import Home from "@/components/Home"
import Image from "next/image";
import TypingAnimation from "@/components/ui/typing-animation";
export default function Home() {
  return (
    <>
    {/* <Home/> */}
    <div className=" h-96 flex items-center justify-center">
    <TypingAnimation
      className="text-7xl text- text-slate-200 font-normal"
      text="Welcome to Dev Orbit !"
    /></div>
    
    {/* <div className=" h-96 flex items-center justify-center">
    <div className=" text-7xl">Welcome to Dev Orbit</div></div> */}
    </>
  )
  } 
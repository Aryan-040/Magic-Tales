import Image from "next/image";
import { Button } from "@nextui-org/react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
export default function Home() {
  return (
   <div className="bg-[#cad3ff]">
    {/* Header */} 
    <Header/>
    {/* Hero */}
    <Hero/>
   </div>
  );
}

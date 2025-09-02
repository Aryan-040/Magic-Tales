import { Button, Image, Link } from "@nextui-org/react";
import React from "react";

function Hero() {
  return (
    <div className="px-6 md:px-20 lg:px-32 mt-16 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl text-primary font-extrabold leading-tight">
            Stories That <br /> Spark Imagination
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
            Every story holds a little magic, waiting to be discovered. With{" "}
            <span className="font-semibold text-primary">MagicTales</span>, you
            step into worlds filled with wonder, courage, and endless
            possibilities. From soothing bedtime stories to thrilling
            adventures, our tales are crafted to ignite imagination and bring
            joy to every heart.
          </p>
          
          <div className="mt-8">
          <Link href={"/create-story"}>
            <Button
              size="lg"
              color="primary"
              className="rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              Start Imagining ✨
            </Button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative w-[700px] h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/hero.jpg"
              alt="hero"
              width={700}
              height={400}
              className="rounded-2xl shadow-2xl object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;

import Image from "next/image";
import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";
import heroImage from "./images/hero.png";
import backgroundGrids from "./images/background-grids.png";
import blob from "./images/blur-blob-1.png"

export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="flex flex-col justify-center items-center relative px-4 gap-8 md:mt-20 py-10">
        <div className="text-center">
          <Image
            src={backgroundGrids}
            alt="background"
            quality={100}
            className="absolute top-0 left-0 -z-[1] w-full h-full"
            placeholder="blur"
          />

          <h1 className="text-5xl tracking-tighter py-6 font-bold">
            Join the Revolution in AI-Powered Business Solutions!
          </h1>
          <p className="text-lg max-w-2xl text-text-subheading leading-5 mx-auto">
            Discover how we transform your business through our proven AI
            integration process. From initial assessment to measurable results,
            we guide you through each step of implementing intelligent solutions
            that drive real business value.
          </p>
        </div>

        <Link
          href="/waitlist"
          className="inline-block rounded-full py-2 px-6 bg-[#3F2B54] text-text-subheading font-bold"
        >
          Join Waitlist
        </Link>
      </div>

      <div className="">
        <Image
          src={heroImage}
          alt="hero"
          quality={100}
          className="max-w-full mt-10"
          placeholder="blur"
        />
        <Image
          src={blob}
          alt="blob"
          quality={100}
          className="absolute top-[80%] left-0 -z-[1] w-full h-full"
          placeholder="blur"
        />
      </div>
    </section>
  );
}

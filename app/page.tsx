import type { Metadata } from "next";

import Navbar from "@/components/navbar";
import Hero from "./_components/hero";
import Empowering from "./_components/empowerng";
import FooterSection from "./_components/footer";
import { TimelineDemo } from "./_components/timeline";

export const metadata: Metadata = {
  title: "Merclytics - AI Powered Business Solutions",
  description: "Empowering businesses with intelligent AI solutions",
};

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Empowering />
      <TimelineDemo />
      <FooterSection />
    </div>
  );
}

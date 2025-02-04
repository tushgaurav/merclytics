import type { Metadata } from "next";

import Hero from "./_components/hero";
import Empowering from "./_components/empowerng";
import { TimelineDemo } from "./_components/timeline";
import Stats from "./_components/stats";

export const metadata: Metadata = {
  title: "Merclytics - AI Powered Business Solutions",
  description: "Empowering businesses with intelligent AI solutions",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Empowering />
      <TimelineDemo />
    </div>
  );
}

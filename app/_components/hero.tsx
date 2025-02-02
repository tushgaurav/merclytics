import Waves from "@/components/waves";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto p-4 flex flex-col justify-center items-center relative min-h-screen ">
      <Waves
        lineColor="#fff"
        backgroundColor="bg-brand-violet"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
        style={{
          width: "800px",
          height: "800px",
          position: "absolute",
          borderRadius: "10%",
          opacity: 0.18,
          zIndex: -1,
          background: "transparent",
          boxShadow: "0 0 100px 60px rgba(255,255,255,0.4)",
          backdropFilter: "blur(10px)",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          //   WebkitMaskImage: "radial-gradient(circle at center, black 50%, transparent 75%)",
          maskImage: "radial-gradient(circle at center, black 50%, transparent 75%)"
        }}
      />
      <p className="text-4xl tracking-tighter leading-9 max-w-[30ch] font-bold text-center">
        Join the Revolution in AI-Powered Business Solutions!
      </p>

      <p className="text-center my-10 text-lg leading-6 max-w-2xl">
        Discover how we transform your business through our proven AI integration process. From initial assessment to measurable results, we guide you through each step of implementing intelligent solutions that drive real business value.
      </p>

      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white from-white to-slate-200/10 lg:text-lg">
          Join Waitlist
        </span>
      </ShimmerButton>
    </section>
  );
}

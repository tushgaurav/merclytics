import { ChevronRight } from "lucide-react";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import Link from "next/link";

export async function TryNow() {
    return (
        <Link href="/chat" className="z-10 flex items-center justify-center ">
            <AnimatedGradientText className="text-white bg-[#CE9EF0]/30 font-semibold rounded-full">
                Chat Now <ChevronRight className="ml-1" />
            </AnimatedGradientText>
        </Link>
    );
}

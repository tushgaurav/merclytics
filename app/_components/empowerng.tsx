import SpotlightCard from "@/components/ui/spotlight-card";
import { BadgeDollarSign, HeartHandshake, Bot } from "lucide-react";

export default function Empowering() {
  return (
    <div className="lg:mt-10 max-w-4xl mx-auto p-4 lg:mb-20">
      <div className="mb-16 md:mb-24">
        <h1 className="text-center text-3xl md:text-4xl font-bold max-w-2xl mx-auto mt-16 leading-relaxed bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          We&apos;re empowering businesses with cutting-edge AI solutions to
          drive smarter decisions.
        </h1>
        <h3 className="text-center mt-6 text-sm md:text-base text-gray-400">
          Be the first to access our exclusive services.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <SpotlightCard className="p-4 rounded-xl">
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-lg bg-brand-violet/20 flex items-center justify-center">
              <BadgeDollarSign size={24} className="text-brand-violet" />
            </div>
            <h4 className="text-lg font-semibold">Sales Optimization</h4>
            <p className="text-gray-400 leading-relaxed">
              AI Solutions tailored for inbound & outbound sales optimization and revenue growth.
            </p>
          </div>
        </SpotlightCard>

        <SpotlightCard className="p-4 rounded-xl">
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-lg bg-brand-violet/20 flex items-center justify-center">
              <HeartHandshake size={24} className="text-brand-violet" />
            </div>
            <h4 className="text-lg font-semibold">Customer Support</h4>
            <p className="text-gray-400 leading-relaxed">
              24/7 real-time customer service support powered by advanced AI technology.
            </p>
          </div>
        </SpotlightCard>

        <SpotlightCard className="p-4 rounded-xl">
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-lg bg-brand-violet/20 flex items-center justify-center">
              <Bot size={24} className="text-brand-violet" />
            </div>
            <h4 className="text-lg font-semibold">Smart Assistance</h4>
            <p className="text-gray-400 leading-relaxed">
              Personalized business assistance powered by intelligent automation.
            </p>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}

import SpotlightCard from "@/components/ui/spotlight-card";
import { BadgeDollarSign, HeartHandshake, Bot } from "lucide-react";

export default function Empowering() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-10">
        <h1 className="text-center text-xl max-w-lg mx-auto mt-10 leading-5">
          We&apos;re empowering businesses with cutting-edge AI solutions to
          drive smarter decisions.
        </h1>
        <h3 className="text-center my-4 text-xs text-gray-200">
          Be the first to access out exclusive services.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <SpotlightCard>
          <div className="space-y-4">
            <BadgeDollarSign size={26} />
            <p>AI Solutions tailored for inbound & outbound sales.</p>
          </div>
        </SpotlightCard>

        <SpotlightCard>
          <div className="space-y-4">
            <HeartHandshake size={26} />
            <p>24/7 real-time customer service support.</p>
          </div>
        </SpotlightCard>

        <SpotlightCard>
          <div className="space-y-4">
            <Bot size={26} />
            <p>
              Smarter, more efficient business assistance with personalization.
            </p>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}

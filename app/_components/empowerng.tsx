import { BadgeDollarSign, HeartHandshake, Bot } from "lucide-react";

export default function Empowering() {
  return (
    <div className="lg:mt-10 max-w-4xl mx-auto p-4 lg:mb-20">
      <div className="mb-10 md:mb-24">
        <h1 className="text-center text-xl md:text-4xl font-bold max-w-2xl mx-auto mt-16 leading-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          We&apos;re empowering businesses with cutting-edge AI solutions to
          drive smarter decisions.
        </h1>
        <h3 className="text-center mt-6 text-text-subheading text-md">
          Be the first to access our exclusive services.
        </h3>
      </div>

      <div className="flex justify-center md:justify-between items-stretch flex-wrap gap-6">
        <div className="bg-[#3F2B54] rounded-xl p-6 text-center text-text-subheading max-w-60">
          <div className="space-y-4">
            <div className="flex justify-center">
              <BadgeDollarSign size={48} className="text-brand-violet" />
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Sales Optimization</h4>
              <p className="text-gray-400 leading-relaxed">
                AI Solutions tailored for inbound & outbound sales optimization
                and revenue growth.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#3F2B54] rounded-xl p-6 text-center text-text-subheading max-w-60">
          <div className="space-y-4">
            <div className="flex justify-center">
              <HeartHandshake size={48} className="text-brand-violet" />
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Customer Support</h4>
              <p className="text-gray-400 leading-relaxed">
                24/7 real-time customer service support powered by advanced AI
                technology.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#3F2B54] rounded-xl p-6 text-center text-text-subheading max-w-60">
          <div className="space-y-4">
            <div className="flex justify-center">
              <Bot size={48} className="text-brand-violet" />
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Smart Assistance</h4>
              <p className="text-gray-400 leading-relaxed">
                Personalized business assistance powered by intelligent
                automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

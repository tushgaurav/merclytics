import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "Initial Assessment",
            content: (
                <div>
                    <p className=" text-xs md:text-sm font-normal mb-8">
                        We begin by analyzing your business processes and identifying key areas where AI can drive significant improvements. Our team works closely with yours to understand your unique challenges and goals.
                    </p>
                    <ul className="list-disc pl-4 mb-8 space-y-2">
                        <li className=" text-xs md:text-sm">
                            Comprehensive business process analysis
                        </li>
                        <li className=" text-xs md:text-sm">
                            Identification of automation opportunities
                        </li>
                        <li className=" text-xs md:text-sm">
                            Custom solution planning and roadmap
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            title: "AI Integration",
            content: (
                <div>
                    <p className=" text-xs md:text-sm font-normal mb-8">
                        Our AI solutions are seamlessly integrated into your existing systems, focusing on three key areas:
                    </p>
                    <ul className="list-disc pl-4 mb-8 space-y-2">
                        <li className=" text-xs md:text-sm">
                            Sales optimization through predictive analytics
                        </li>
                        <li className=" text-xs md:text-sm">
                            24/7 AI-powered customer support implementation
                        </li>
                        <li className=" text-xs md:text-sm">
                            Smart business process automation
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            title: "Results",
            content: (
                <div>
                    <p className=" text-xs md:text-sm font-normal mb-8">
                        Experience measurable improvements across your business operations with our AI solutions:
                    </p>
                    <ul className="list-disc pl-4 mb-8 space-y-2">
                        <li className=" text-xs md:text-sm">
                            40% increase in sales conversion rates
                        </li>
                        <li className=" text-xs md:text-sm">
                            60% reduction in customer response time
                        </li>
                        <li className=" text-xs md:text-sm">
                            35% improvement in operational efficiency
                        </li>
                        <li className=" text-xs md:text-sm">
                            50% decrease in routine task workload
                        </li>
                    </ul>
                </div>
            ),
        },
    ];
    return (
        <div className="max-w-4xl mx-auto pt-10">
            <Timeline data={data} />
        </div>
    );
}

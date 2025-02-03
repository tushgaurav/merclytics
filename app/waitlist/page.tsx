import { Page, Subtitle, Title } from "@/components/page";
import type { Metadata } from "next";
import WaitlistForm from "./form";

export const metadata: Metadata = {
    title: "Join Waitlist - Merclytics",
    description: "Empowering businesses with intelligent AI solutions",
};

export default function WaitlistPage() {
    return (
        <Page>
            <Title>Join Waitlist</Title>
            <Subtitle>Spots are limited! Join our waiting list today and be among the first to experience the future of AI innovation for businesses.</Subtitle>
            
            <WaitlistForm />

            <p>
                
            </p>
        </Page>
    )
}
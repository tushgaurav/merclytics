import type { Metadata } from "next";
import { Page, Title } from "@/components/page";

export const metadata: Metadata = {
    title: "About Us - Merclytics",
    description: "Merclytics is at the forefront of AI innovation, dedicated to creating transformative solutions that drive growth and efficiency. Learn more about our mission, vision, and team.",
};

export default function AboutUsPage() {
    return (
        <Page>
            <Title>About Us</Title>

            Merclytics is at the forefront of AI innovation, dedicated to creating transformative solutions that drive growth and efficiency. Learn more about our mission, vision, and team.

        </Page>
    )
}
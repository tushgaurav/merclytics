import type { Metadata } from "next";
import { Page, Title } from "@/components/page";
import ContactForm from "./form";

export const metadata: Metadata = {
    title: "Contact Us - Merclytics",
    description: "Get in touch with us to learn more about our AI solutions and how we can help your business grow.",
};

export default function ContactPage() {
    return (
        <Page>
            <Title>Contact Us</Title>

            <ContactForm />

        </Page>
    )
}
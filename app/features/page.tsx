import type { Metadata } from "next";
import { Page, Title, Subtitle, Section, Paragraph } from "@/components/page";

export const metadata: Metadata = {
    title: "Features",
    description: "Empowering businesses with intelligent AI solutions",
}

export default function FeaturesPage() {
    return (
        <Page>
            <Title>Features & Solutions</Title>
            <Subtitle>Discover how Merclytics AI can transform your business with cutting-edge artificial intelligence solutions</Subtitle>

            <Section>
                <Subtitle>AI-Powered Platform</Subtitle>
                <Paragraph>
                    Our enterprise-grade platform leverages state-of-the-art artificial intelligence to deliver 
                    intelligent automation, deep analytics, and seamless integrations. Built with scalability 
                    and security at its core, we enable businesses to harness the full potential of AI technology.
                </Paragraph>
            </Section>

            <Section>
                <Subtitle>Intelligent Process Automation</Subtitle>
                <Paragraph>
                    Transform your operations with intelligent automation that learns and adapts. Our AI solutions 
                    streamline workflows, reduce manual tasks, and optimize resource allocation across your organization.
                </Paragraph>
            </Section>

            <Section>
                <Subtitle>Advanced Analytics & Insights</Subtitle>
                <Paragraph>
                    Turn complex data into actionable intelligence. Our advanced analytics capabilities provide 
                    real-time insights, predictive modeling, and data-driven recommendations to enhance 
                    decision-making at every level.
                </Paragraph>
            </Section>

            <Section>
                <Subtitle>Enterprise Security</Subtitle>
                <Paragraph>
                    Security is built into every layer of our platform. With enterprise-grade encryption, 
                    role-based access controls, and compliance with international standards, your data remains 
                    protected and secure.
                </Paragraph>
            </Section>

            <Section>
                <Subtitle>Seamless Integration</Subtitle>
                <Paragraph>
                    Connect and enhance your existing systems with our flexible integration capabilities. 
                    Our platform works harmoniously with your current technology stack, providing a unified 
                    solution for your business needs.
                </Paragraph>
            </Section>

            <Section>
                <Subtitle>24/7 Support</Subtitle>
                <Paragraph>
                    Our dedicated support team and AI-powered assistance ensure you have the help you need, 
                    when you need it. Experience peace of mind with round-the-clock expert support and 
                    rapid issue resolution.
                </Paragraph>
            </Section>
        </Page>
    )
}
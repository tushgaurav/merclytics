import type { Metadata } from "next";
import Link from "next/link";
import { Page, Subtitle, Title } from "@/components/page";

export const metadata: Metadata = {
    title: "Careers - Merclytics",
    description: "Join our dynamic team and be part of shaping the future of AI. Explore exciting career opportunities and make a meaningful impact with Merclytics.",
};

export default function CareersPage() {
    return (
        <Page>
            <Title>Careers</Title>

            Join our dynamic team and be part of shaping the future of AI. Explore exciting career opportunities and make a meaningful impact with Merclytics.

            <Subtitle>No Open Positions</Subtitle>

            <p className="mt-4">
                While we don&apos;t have any open positions at the moment, we&apos;re always interested in connecting with talented individuals who are passionate about AI and technology.
            </p>

            <p className="mt-4">
                If you&apos;d like to be considered for future opportunities, please send your resume and a brief introduction to{' '}
                <Link href="mailto:careers@merclytics.com" >
                    careers@merclytics.com
                </Link>
            </p>

            <p className="mt-4">
                We look for team members who:
            </p>

            <ul className="list-disc ml-8 mt-2 space-y-2">
                <li>Are passionate about artificial intelligence and its applications</li>
                <li>Have strong problem-solving abilities</li>
                <li>Thrive in a fast-paced, innovative environment</li>
                <li>Value collaboration and open communication</li>
                <li>Are committed to continuous learning and growth</li>
            </ul>

            <p className="mt-6">
                Follow us on{' '}
                <Link href="https://www.linkedin.com/company/merclytics" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </Link>
                {' '}to stay updated on future opportunities.
            </p>

        </Page>
    )
}
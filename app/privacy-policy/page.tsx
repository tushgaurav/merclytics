import type { Metadata } from "next";
import { Page, Title } from "@/components/page";

export const metadata : Metadata = {
    title: "Privacy Policy | Merclytics",
    description: "Learn about how Merclytics collects, uses, and protects your personal information when using our AI-powered business solutions."
}

export default function PrivacyPolicyPage() {
    return (
        <Page>
            <Title>Privacy Policy</Title>

            <div className="space-y-8 mt-10 text-text-subheading">
                <section>
                    <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                    <p>Welcome to Merclytics (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our AI-powered services and visit our website.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                    <h3 className="text-xl font-semibold mb-2">2.1 Personal Information</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Name and contact information</li>
                        <li>Account credentials</li>
                        <li>Payment information</li>
                        <li>Company information (if applicable)</li>
                        <li>Usage data and interaction with our AI services</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">2.2 Automatically Collected Information</h3>
                    <ul className="list-disc pl-6">
                        <li>IP address and device information</li>
                        <li>Browser type and settings</li>
                        <li>Operating system</li>
                        <li>Log data and usage patterns</li>
                        <li>Cookies and similar tracking technologies</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                    <p>We use your information for the following purposes:</p>
                    <ul className="list-disc pl-6">
                        <li>Providing and improving our AI services</li>
                        <li>Processing your transactions</li>
                        <li>Communicating with you about our services</li>
                        <li>Analyzing and optimizing our AI models</li>
                        <li>Detecting and preventing fraud</li>
                        <li>Complying with legal obligations</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">4. Data Sharing and Disclosure</h2>
                    <p>We may share your information with:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Service providers and business partners</li>
                        <li>Legal authorities when required by law</li>
                        <li>Third-party analytics providers</li>
                        <li>Potential buyers in case of a business transaction</li>
                    </ul>
                    <p>We do not sell your personal information to third parties.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                    <p>We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
                    <p>We retain your personal information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-6">
                        <li>Access your personal information</li>
                        <li>Correct inaccurate data</li>
                        <li>Request deletion of your data</li>
                        <li>Object to processing of your information</li>
                        <li>Data portability</li>
                        <li>Withdraw consent at any time</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">8. International Data Transfers</h2>
                    <p>We may transfer your information to servers located outside your country. We ensure appropriate safeguards are in place for such transfers.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">9. Children&apos;s Privacy</h2>
                    <p>Our services are not intended for children under 13 years of age. We do not knowingly collect information from children under 13.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">10. Changes to This Policy</h2>
                    <p>We may update this Privacy Policy periodically. We will notify you of any material changes by posting the updated policy on our website.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
                    <p>If you have questions about this Privacy Policy or our privacy practices, please contact us at:</p>
                    <div className="mt-2">
                        <p>Merclytics</p>
                        <p>Email: privacy@merclytics.com</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">12. Cookie Policy</h2>
                    <p>We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie preferences through your browser settings.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">13. California Privacy Rights</h2>
                    <p>California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect and how we use it.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">14. AI Data Processing</h2>
                    <p>We use artificial intelligence and machine learning technologies to process data and provide our services. This includes:</p>
                    <ul className="list-disc pl-6">
                        <li>Training our AI models on aggregated and anonymized data</li>
                        <li>Automated decision-making processes</li>
                        <li>Continuous improvement of our AI algorithms</li>
                    </ul>
                    <p className="mt-4">We ensure transparency in our AI operations and provide mechanisms for human review when necessary.</p>
                </section>
            </div>
        </Page>
    )
}
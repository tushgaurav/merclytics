import type { Metadata } from "next";
import { Page, Title } from "@/components/page";

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description: "Terms and conditions for using our service. Please read carefully before proceeding."
}

export default function TermsAndConditionsPage() {
    return (
        <Page>
            <Title>Terms & Conditions</Title>

            <div className="space-y-8 mt-10 text-text-subheading">
                <section>
                    <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                    <p>By accessing and using Merclytics&apos; website and AI services (&ldquo;Services&rdquo;), you agree to be bound by these Terms and Conditions (&ldquo;Terms&rdquo;). If you disagree with any part of these Terms, you may not access our Services.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">2. Definitions</h2>
                    <ul className="list-disc pl-6">
                        <li>&ldquo;Services&rdquo; refers to all AI-powered tools, features, and functionalities provided by Merclytics</li>
                        <li>&ldquo;User,&rdquo; &ldquo;you,&rdquo; and &ldquo;your&rdquo; refer to any individual or entity using our Services</li>
                        <li>&ldquo;Content&rdquo; includes text, data, information, and materials processed through our Services</li>
                        <li>&ldquo;AI Models&rdquo; refers to our artificial intelligence and machine learning systems</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">3. Service Access and Account Registration</h2>
                    <h3 className="text-xl font-semibold mb-2">3.1 Account Creation</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>You must provide accurate and complete information when creating an account</li>
                        <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                        <li>You must be at least 18 years old to use our Services</li>
                        <li>You may not create multiple accounts without our explicit permission</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">3.2 Account Security</h3>
                    <ul className="list-disc pl-6">
                        <li>You are responsible for all activities under your account</li>
                        <li>You must notify us immediately of any unauthorized access</li>
                        <li>We reserve the right to suspend or terminate accounts for violations of these Terms</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">4. Service Usage and Limitations</h2>
                    <h3 className="text-xl font-semibold mb-2">4.1 Acceptable Use</h3>
                    <p>You agree not to:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Use our Services for illegal purposes</li>
                        <li>Attempt to reverse engineer our AI models</li>
                        <li>Access our Services through automated means without permission</li>
                        <li>Interfere with or disrupt our Services</li>
                        <li>Upload malicious code or content</li>
                        <li>Violate any applicable laws or regulations</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">4.2 API Usage and Rate Limits</h3>
                    <ul className="list-disc pl-6">
                        <li>API access is subject to rate limiting and fair usage policies</li>
                        <li>Excessive use may result in temporary or permanent suspension</li>
                        <li>API keys must not be shared or distributed</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">5. Payment Terms</h2>
                    <h3 className="text-xl font-semibold mb-2">5.1 Fees and Billing</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Fees are charged according to our current pricing plans</li>
                        <li>We may modify pricing with 30 days notice</li>
                        <li>All fees are non-refundable unless required by law</li>
                        <li>Late payments may result in service suspension</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">5.2 Subscription Terms</h3>
                    <ul className="list-disc pl-6">
                        <li>Subscriptions automatically renew unless cancelled</li>
                        <li>Cancellation must be requested at least 7 days before renewal</li>
                        <li>Pro-rated refunds are not provided for partial use periods</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">6. Intellectual Property Rights</h2>
                    <h3 className="text-xl font-semibold mb-2">6.1 Our Rights</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>We retain all rights to our Services, AI models, and technology</li>
                        <li>Our trademarks and branding may not be used without permission</li>
                        <li>Service improvements derived from user data belong to us</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">6.2 Your Rights</h3>
                    <ul className="list-disc pl-6">
                        <li>You retain rights to your original content</li>
                        <li>You grant us license to process your content through our AI models</li>
                        <li>Output generated by our AI models is subject to our usage terms</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">7. Data Processing and AI Models</h2>
                    <h3 className="text-xl font-semibold mb-2">7.1 AI Processing</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Our AI models may process your data to provide Services</li>
                        <li>We may use anonymized data to improve our models</li>
                        <li>Processing results may vary and are provided "as is"</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">7.2 Accuracy and Reliability</h3>
                    <ul className="list-disc pl-6">
                        <li>AI outputs are probabilistic and may not be 100% accurate</li>
                        <li>You are responsible for reviewing and validating AI outputs</li>
                        <li>We do not guarantee specific results or outcomes</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">8. Liability and Indemnification</h2>
                    <h3 className="text-xl font-semibold mb-2">8.1 Limitation of Liability</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Services are provided "as is" without warranties</li>
                        <li>We are not liable for indirect or consequential damages</li>
                        <li>Our total liability is limited to fees paid in the last 12 months</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">8.2 Indemnification</h3>
                    <p>You agree to indemnify us against claims arising from:</p>
                    <ul className="list-disc pl-6">
                        <li>Your violation of these Terms</li>
                        <li>Your use of our Services</li>
                        <li>Your content processed through our Services</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">9. Service Modifications and Termination</h2>
                    <ul className="list-disc pl-6">
                        <li>We may modify or discontinue Services at any time</li>
                        <li>We may terminate access for Terms violations</li>
                        <li>You may terminate your account at any time</li>
                        <li>Certain Terms survive service termination</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">10. Governing Law and Dispute Resolution</h2>
                    <ul className="list-disc pl-6">
                        <li>These Terms are governed by Australian law</li>
                        <li>Disputes will be resolved through arbitration</li>
                        <li>Class action waiver applies</li>
                        <li>Small claims court rights are preserved</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
                    <p>We may update these Terms at any time. Continued use of our Services constitutes acceptance of updated Terms.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
                    <p>For questions about these Terms, contact us at:</p>
                    <div className="mt-2">
                        <p>Merclytics</p>
                        <p>Email: legal@merclytics.com</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">13. Severability</h2>
                    <p>If any provision of these Terms is found unenforceable, other provisions remain in effect.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">14. Entire Agreement</h2>
                    <p>These Terms constitute the entire agreement between you and Merclytics regarding the Services.</p>
                </section>
            </div>

        </Page>
    )
}
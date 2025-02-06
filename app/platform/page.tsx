import { Page, Paragraph, Section, Subtitle, Title } from "@/components/page";

export default function Platform() {
  return (
    <Page>
      <Title>Platform</Title>

      <Section id="overview">
        <Subtitle>Overview</Subtitle>
        <Paragraph>
          Merclytics provides cutting-edge AI solutions tailored to meet the
          evolving needs of businesses. From seamless integrations to robust
          data analytics, we empower companies to thrive in the digital age.
        </Paragraph>
        <Paragraph>
          Our comprehensive platform offers end-to-end solutions that streamline
          operations and drive innovation. With powerful APIs and flexible
          deployment options, integration with your existing systems is seamless
          and efficient. Real-time analytics dashboards provide deep insights
          into your data, while our intuitive interface ensures accessibility
          for team members across your organization.
        </Paragraph>
      </Section>

      <Section id="compliance">
        <Subtitle>Security & Compliance</Subtitle>
        <Paragraph>
          Our platform is designed with the highest security standards, ensuring
          your data remains safe and compliant with global regulations. Trust
          Merclytics to protect what matters most to your business.
        </Paragraph>

        <Paragraph>
          We implement military-grade encryption at rest and in transit, with
          regular security audits and penetration testing. Our platform is
          compliant with GDPR, HIPAA, SOC 2, and other major regulatory
          frameworks. Role-based access control, audit logging, and automated
          backup systems provide complete peace of mind. Our dedicated security
          team monitors systems 24/7 to detect and prevent potential threats.
        </Paragraph>
      </Section>

      <Section id="ai-ml">
        <Subtitle>AI & Machine Learning</Subtitle>
        <Paragraph>
          Unlock the potential of AI and machine learning with our innovative
          technologies. Transform data into actionable insights, automate
          processes, and enhance decision-making capabilities. Our advanced ML
          models leverage deep learning and neural networks to identify patterns
          and trends in your data.
        </Paragraph>

        <Paragraph>
          Natural Language Processing capabilities enable automated document
          processing and sentiment analysis. Computer vision solutions provide
          image and video analytics for diverse use cases. Our AutoML features
          democratize AI development, allowing teams to build and deploy models
          without extensive ML expertise. Continuous model monitoring ensures
          optimal performance and accuracy over time.
        </Paragraph>
      </Section>
    </Page>
  );
}

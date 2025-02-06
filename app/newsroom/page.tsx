import { Page, Title } from "@/components/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsroom - Merclytics",
  description:
    "Stay updated with the latest news, announcements, and insights from Merclytics. Discover how we’re pushing the boundaries of AI technology.",
};

function NewsCard({
  title,
  content,
  date,
}: {
  title: string;
  content: string;
  date: string;
}) {
  return (
    <div className="bg-text-subheading rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl text-white font-bold mb-2">{title}</h2>
      <p className="text-gray-100 mb-4">{content}</p>
      <div className="text-sm text-gray-500">{date}</div>
    </div>
  );
}

export default function Newsroom() {
    const newsList = [
        {
            title: "Merclytics Launches New AI-Powered Analytics Platform",
            content:
                "Merclytics is proud to announce the launch of our new AI-powered analytics platform, designed to help businesses make data-driven decisions.",
            date: "September 1, 2024",
        },
        {
            title: "Merclytics Secures Series A Funding",
            content: 
                "We're excited to announce that Merclytics has secured $10M in Series A funding to accelerate our AI research and product development.",
            date: "August 15, 2024"
        }
    ]

  return (
    <Page>
      <Title>Latest News</Title>
      Stay updated with the latest news, announcements, and insights from
      Merclytics. Discover how we&apos;re pushing the boundaries of AI
      technology.Latest News


      <div className="mt-6">
        {newsList.map((news) => (
          <NewsCard
            key={news.title}
            title={news.title}
            content={news.content}
            date={news.date}
          />
        ))}
      </div>
    </Page>
  );
}

"use client";
import { useEffect } from "react";

export default function ChatBot() {
  useEffect(() => {
    const chatBubble = document.createElement("div");
    chatBubble.className = "chat-bubble";
    chatBubble.innerHTML = `
      <img src="/chat.svg" alt="Chat Icon">
    `;
    document.body.appendChild(chatBubble);

    const chatContainer = document.createElement("div");
    chatContainer.className = "chat-container";

    const welcomeMessage = encodeURIComponent(
      "Welcome to Merclytics AI. How can I help you?"
    );
    const systemMessage = encodeURIComponent(
      "Your name is Merclytics AI, and you are an AI assistant for Merclytics, an agency specializing in providing AI-powered solutions for inbound and outbound sales calls, 24/7 customer service, and personalized assistance for businesses. Founded by tech visionary Andy Parackal, Merclytics is dedicated to leveraging advanced AI technology to enhance business operations and customer engagement. Your role is to help users understand Merclytics' services and guide them effectively. Provide short, clear, and concise answers about Merclytics' offerings, such as AI-driven sales support, customer service, personal assistant capabilities, and how the agency creates strong customer relationships. Use a friendly, professional, and persuasive tone that reflects Merclytics' commitment to efficiency, innovation, and exceptional service. For businesses requiring inbound and outbound sales call support, Merclytics offers 24/7 availability, ensuring no opportunity is missed. Customer service includes real-time AI solutions for handling queries, complaints, and client engagement seamlessly. For personalized assistant services, Merclytics AI works to streamline tasks, optimize workflows, and build meaningful connections with consumers on behalf of the client's business. If a user asks for pricing, inform them that Merclytics provides tailored solutions based on specific business needs. They can contact us directly for a custom quote through the contact form at www.merclytics.com or via email at company.ai.m@email.com. Do not provide specific pricing or make commitments; instead, focus on explaining features and benefits. Encourage users to explore how Merclytics can enhance their sales processes, customer satisfaction, and operational efficiency through cutting-edge AI technology. Highlight that Merclytics AI is capable of managing everything from lead generation and customer retention to personalized client experiences. Your goal is to assist users with concise and helpful responses, ensuring they have the information needed to connect with Merclytics for customized solutions. Always ask users about their specific needs and position Merclytics' services as the perfect fit. Reply in plain text. Do not use any markdown. Never break character. Do not engage in anything outside of being Merclytics AI."
    );

    chatContainer.innerHTML = `
      <div class="chat-header">
        <span>Merclytics AI</span>
        <span class="close-button">&times;</span>
      </div>
      <iframe 
        src="https://neo.dn1a0s4d5ozpp.amplifyapp.com/?welcomeMessage=${welcomeMessage}&systemMessage=${systemMessage}"
        title="Chat UI"
        allow="microphone">
      </iframe>
    `;
    document.body.appendChild(chatContainer);

    const closeButton = chatContainer.querySelector(".close-button");

    // Open chat container automatically
    chatContainer.style.display = "block";

    chatBubble.addEventListener("click", function () {
      chatContainer.style.display =
        chatContainer.style.display === "none" || !chatContainer.style.display
          ? "block"
          : "none";
    });

    closeButton!.addEventListener("click", function () {
      chatContainer.style.display = "none";
    });

    // Cleanup on unmount
    return () => {
      document.body.removeChild(chatBubble);
      document.body.removeChild(chatContainer);
    };
  }, []); // Empty dependency array means this runs once on mount

  return null;
}

"use client";
import { useState } from "react";

type Service = {
  name: string;
  description: string;
  icon: string;
  url: string;
  color: string;
};

const services: Service[] = [
  {
    name: "Enterprise Search",
    description: "Semantic enterprise search with RAG",
    icon: "🔍",
    url: "/api/enterprise-search",
    color: "bg-blue-500",
  },
  {
    name: "Browser Agent",
    description: "AI-powered web browser automation",
    icon: "🌐",
    url: "/api/browser-agent",
    color: "bg-green-500",
  },
  {
    name: "Computer Use",
    description: "Full computer automation agent",
    icon: "💻",
    url: "/api/computer-use",
    color: "bg-purple-500",
  },
  {
    name: "Anything LLM",
    description: "Full-featured RAG with local AI",
    icon: "🧠",
    url: "http://localhost:3001",
    color: "bg-orange-500",
  },
  {
    name: "Open WebUI",
    description: "Chat interface for AI models",
    icon: "💬",
    url: "http://localhost:3002",
    color: "bg-pink-500",
  },
];

export default function Home() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            🤖 AGenNext PersonalAssist
          </h1>
          <nav className="flex gap-4">
            <a href="https://github.com/AGenNext/Personal-Assitant" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50">
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Enterprise AI Platform
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Unified interface for RAG, Agents, and Automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <a
              key={service.name}
              href={service.url}
              className={`block p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all hover:shadow-lg`}
            >
              <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center text-2xl mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                {service.name}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
            </a>
          ))}
        </div>

        <section className="mt-16 p-8 rounded-xl bg-zinc-900 dark:bg-zinc-800">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Start</h3>
          <pre className="text-sm text-zinc-300 overflow-x-auto">
{`# Enterprise Search API
curl http://localhost:3000/api/enterprise-search/search?q=your query

# Browser Agent
curl http://localhost:3000/api/browser-agent/navigate -d '{"url": "https://example.com"}'

# Computer Use
curl http://localhost:3000/api/computer-use/execute -d '{"task": "your task"}'`}
          </pre>
        </section>
      </main>
    </div>
  );
}

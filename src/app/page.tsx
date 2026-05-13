"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Service = {
  name: string;
  description: string;
  icon: string;
  url: string;
  color: string;
  gradient: string;
};

const services: Service[] = [
  { name: "Enterprise Search", description: "Semantic search with AI RAG", icon: "🔍", url: "/api/enterprise-search", color: "blue", gradient: "from-blue-500 to-cyan-500" },
  { name: "Browser Agent", description: "AI-powered web automation", icon: "🌐", url: "/api/browser-agent", color: "green", gradient: "from-green-500 to-emerald-500" },
  { name: "Computer Use", description: "Full desktop automation", icon: "💻", url: "/api/computer-use", color: "purple", gradient: "from-purple-500 to-pink-500" },
  { name: "Anything LLM", description: "Private AI with local models", icon: "🧠", url: "http://localhost:3001", color: "orange", gradient: "from-orange-500 to-amber-500" },
  { name: "Open WebUI", description: "Chat interface", icon: "💬", url: "http://localhost:3002", color: "pink", gradient: "from-pink-500 to-rose-500" },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/enterprise-search/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResults(data.results || []);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🤖</span>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AGenNext
              </h1>
              <p className="text-xs text-slate-400">Personal Assist</p>
            </div>
          </div>
          <nav className="flex gap-6 text-sm">
            <a href="#" className="text-slate-300 hover:text-white transition">Dashboard</a>
            <a href="#" className="text-slate-300 hover:text-white transition">API</a>
            <a href="https://github.com/AGenNext/Personal-Assitant" className="text-slate-300 hover:text-white transition">GitHub</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Enterprise <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Platform</span>
          </motion.h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Unified interface for RAG, Agents, and Automation
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Search your documents..."
              className="w-full px-6 py-4 pl-14 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-lg"
            />
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl">🔍</span>
            <button
              onClick={handleSearch}
              disabled={loading}
              className="absolute right-3 top-1/2 -translate-y-1/2 px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition disabled:opacity-50"
            >
              {loading ? "..." : "Search"}
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <motion.a
              key={service.name}
              href={service.url}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-[1.02]"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-1">{service.name}</h3>
              <p className="text-sm text-slate-400">{service.description}</p>
            </motion.a>
          ))}
        </div>

        {/* API Examples */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span>⚡</span> API Endpoints
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm font-mono">
            <div className="p-4 rounded-xl bg-black/30">
              <p className="text-blue-400 mb-2">POST /api/search</p>
              <p className="text-slate-400">Enterprise semantic search</p>
            </div>
            <div className="p-4 rounded-xl bg-black/30">
              <p className="text-green-400 mb-2">POST /api/navigate</p>
              <p className="text-slate-400">Browser automation</p>
            </div>
            <div className="p-4 rounded-xl bg-black/30">
              <p className="text-purple-400 mb-2">POST /api/execute</p>
              <p className="text-slate-400">Computer control</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-slate-500 text-sm">
          <p>Built with 🤍 by AGenNext • <a href="https://github.com/AGenNext" className="hover:text-slate-300">GitHub</a></p>
        </footer>
      </main>
    </div>
  );
}

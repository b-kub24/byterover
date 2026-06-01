'use client'
import { useState } from 'react'
import { Globe, Zap, Database, Code2, ArrowRight, Check, Shield, Clock, BarChart3, Bot, Play, Loader2, FileJson, Table } from 'lucide-react'

const plans = [
  { name: 'Starter', price: '$29', period: '/mo', features: ['5,000 pages/mo', '2 concurrent crawlers', 'JSON & CSV export', 'Basic selectors', 'Community support'] },
  { name: 'Growth', price: '$99', period: '/mo', features: ['50,000 pages/mo', '10 concurrent crawlers', 'All export formats', 'AI extraction', 'Priority support', 'Webhook delivery'] },
  { name: 'Enterprise', price: '$299', period: '/mo', features: ['Unlimited pages', 'Unlimited crawlers', 'All export formats', 'AI extraction', 'Dedicated support', 'Custom infrastructure', 'SLA guarantee'] },
]

const features = [
  { icon: Bot, title: 'AI-Powered Extraction', desc: 'Point ByteRover at any page and our LLM figures out the data schema automatically.' },
  { icon: Zap, title: 'Blazing Fast', desc: 'Distributed crawling across edge nodes. Scrape 10,000 pages in minutes, not hours.' },
  { icon: Shield, title: 'Anti-Block Tech', desc: 'Rotating proxies, browser fingerprinting, and CAPTCHA handling built in.' },
  { icon: Code2, title: 'Developer First', desc: 'REST API, Python & Node SDKs, and webhook delivery. Fits your stack.' },
  { icon: Database, title: 'Structured Output', desc: 'Get clean JSON, CSV, or stream directly to your database via connectors.' },
  { icon: Clock, title: 'Scheduled Crawls', desc: 'Set it and forget it. Cron-based schedules with diff detection and alerts.' },
]

const mockResults = [
  { title: 'iPhone 15 Pro Max', price: '$1,199', rating: '4.8', stock: 'In Stock' },
  { title: 'Samsung Galaxy S24 Ultra', price: '$1,299', rating: '4.7', stock: 'In Stock' },
  { title: 'Google Pixel 8 Pro', price: '$999', rating: '4.6', stock: 'Low Stock' },
]

const steps = [
  { num: '01', title: 'Enter a URL', desc: 'Paste any website URL. ByteRover analyzes the page structure automatically.' },
  { num: '02', title: 'AI Extracts Data', desc: 'Our model identifies products, articles, listings — whatever the page contains.' },
  { num: '03', title: 'Export Anywhere', desc: 'Download JSON, CSV, or push to your database via API or webhooks.' },
]

export default function LandingPage() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(false)

  const handleExtract = () => {
    if (!url) return
    setLoading(true)
    setTimeout(() => { setLoading(false); setResults(true) }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="border-b border-gray-800 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-xl font-bold"><Globe className="w-6 h-6 text-cyan-400" /> ByteRover</div>
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm transition">Get Started</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center py-24 px-6">
        <div className="inline-block bg-cyan-500/10 text-cyan-400 text-sm px-4 py-1.5 rounded-full mb-6 border border-cyan-500/20">AI-powered web scraping</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Extract web data<br /><span className="text-cyan-400">without writing scrapers</span></h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Point ByteRover at any website. Our AI reads the page like a human and returns clean, structured data — no selectors, no scripts, no maintenance.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-cyan-600 hover:bg-cyan-500 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition">Start Free Trial <ArrowRight className="w-4 h-4" /></button>
          <button className="border border-gray-700 hover:border-gray-500 px-8 py-3 rounded-lg font-semibold transition">See Docs</button>
        </div>
      </section>

      {/* Live Demo */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <p className="text-gray-400 mb-4 text-sm text-center">Try it — paste any URL</p>
          <div className="flex gap-3 mb-6">
            <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://example.com/products" className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cyan-500" />
            <button onClick={handleExtract} disabled={loading} className="bg-cyan-600 hover:bg-cyan-500 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition disabled:opacity-50">
              {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Extracting...</> : <><Play className="w-4 h-4" /> Extract</>}
            </button>
          </div>
          {results && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-gray-700 text-gray-400"><th className="text-left py-2 px-3">Title</th><th className="text-left py-2 px-3">Price</th><th className="text-left py-2 px-3">Rating</th><th className="text-left py-2 px-3">Stock</th></tr></thead>
                <tbody>{mockResults.map((r, i) => (<tr key={i} className="border-b border-gray-800"><td className="py-2 px-3">{r.title}</td><td className="py-2 px-3 text-cyan-400">{r.price}</td><td className="py-2 px-3">{r.rating}</td><td className="py-2 px-3">{r.stock}</td></tr>))}</tbody>
              </table>
              <div className="flex gap-2 mt-4"><button className="text-xs bg-gray-800 px-3 py-1.5 rounded flex items-center gap-1"><FileJson className="w-3 h-3" /> JSON</button><button className="text-xs bg-gray-800 px-3 py-1.5 rounded flex items-center gap-1"><Table className="w-3 h-3" /> CSV</button></div>
            </div>
          )}
        </div>
      </section>

      {/* How it Works */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl font-bold text-cyan-500/20 mb-4">{s.num}</div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">Built for serious data work</h2>
        <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">Enterprise-grade scraping without the infrastructure headaches.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-cyan-500/40 transition">
              <f.icon className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">Transparent pricing</h2>
        <p className="text-gray-400 text-center mb-12">Pay for what you scrape. Cancel anytime.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className={`bg-gray-900 border rounded-xl p-8 ${i === 1 ? 'border-cyan-500 ring-1 ring-cyan-500/30' : 'border-gray-800'}`}>
              {i === 1 && <span className="text-xs bg-cyan-500 text-black px-2 py-0.5 rounded-full font-medium">Popular</span>}
              <h3 className="text-xl font-bold mt-2">{p.name}</h3>
              <div className="mt-4 mb-6"><span className="text-4xl font-bold">{p.price}</span><span className="text-gray-400">{p.period}</span></div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f, j) => <li key={j} className="flex items-center gap-2 text-sm text-gray-300"><Check className="w-4 h-4 text-cyan-400 shrink-0" />{f}</li>)}
              </ul>
              <button className={`w-full py-2.5 rounded-lg font-semibold transition ${i === 1 ? 'bg-cyan-600 hover:bg-cyan-500' : 'border border-gray-700 hover:border-gray-500'}`}>Get Started</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
        <p>&copy; 2025 ByteRover. All rights reserved.</p>
      </footer>
    </div>
  )
}

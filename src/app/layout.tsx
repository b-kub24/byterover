import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'ByteRover - AI-Powered Web Scraping', description: 'AI-powered web scraping and data extraction tool. Extract structured data from any website using AI.' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="bg-gray-950 text-white antialiased">{children}</body></html>)
}

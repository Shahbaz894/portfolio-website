import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Shahbaz Zulfiqar - Generative AI Engineer",
  description: "Portfolio of Shahbaz Zulfiqar, Generative AI Engineer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0F172A] text-white`}>{children}</body>
    </html>
  )
}


import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

// Oppdater metadata
export const metadata: Metadata = {
  title: "Lett på Nett - Profesjonell Webutvikling for Norske Bedrifter",
  description:
    "Vi skaper moderne, brukervennlige nettsider som hjelper din bedrift å vokse i det digitale landskapet. Kontakt oss for et uforpliktende tilbud.",
  keywords: "webutvikling, nettside, webdesign, responsivt design, SEO, Norge, norsk, bedrift, små bedrifter",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no" className="scroll-smooth">
      <head>
        <meta name="geo.region" content="NO" />
        <meta name="geo.placename" content="Oslo" />
        {/* Oppdater canonical URL */}
        <link rel="canonical" href="https://www.lettpaanett.no" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

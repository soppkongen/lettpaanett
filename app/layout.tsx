import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { CookieConsent } from "@/components/cookie-consent"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

// Oppdatert metadata for bedre SEO
export const metadata: Metadata = {
  title: "Lett på Nett - Enkel og Rimelig Webutvikling for Norske Bedrifter",
  description:
    "Lett på Nett gjør det enkelt å lykkes digitalt med raske, rimelige og brukervennlige nettsider for små bedrifter og gründere. Få en profesjonell nettside fra kun 4500 kr.",
  keywords:
    "webutvikling, nettside, webdesign, responsivt design, SEO, Norge, norsk, bedrift, små bedrifter, gründer, rimelig nettside, enkel nettside",
  authors: [{ name: "Lett på Nett", url: "https://www.lettpaanett.no" }],
  creator: "Lett på Nett",
  publisher: "Lett på Nett",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.lettpaanett.no"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lett på Nett - Enkel og Rimelig Webutvikling for Norske Bedrifter",
    description: "Få en profesjonell nettside fra kun 4500 kr. Perfekt for små bedrifter og gründere.",
    url: "https://www.lettpaanett.no",
    siteName: "Lett på Nett",
    locale: "nb_NO",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Dette bildet må legges til i public-mappen
        width: 1200,
        height: 630,
        alt: "Lett på Nett - Profesjonell Webutvikling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lett på Nett - Enkel og Rimelig Webutvikling",
    description: "Få en profesjonell nettside fra kun 4500 kr. Perfekt for små bedrifter og gründere.",
    images: ["/og-image.jpg"], // Samme bilde som for OpenGraph
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        <link rel="canonical" href="https://www.lettpaanett.no" />

        {/* Strukturerte data for bedre SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Lett på Nett",
              url: "https://www.lettpaanett.no",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.lettpaanett.no/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        <Script
          id="local-business-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Lett på Nett",
              image: "https://www.lettpaanett.no/logo.png",
              "@id": "https://www.lettpaanett.no",
              url: "https://www.lettpaanett.no",
              telephone: "+4712345678",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Storgata 1",
                addressLocality: "Oslo",
                postalCode: "0155",
                addressCountry: "NO",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 59.9139,
                longitude: 10.7522,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "17:00",
              },
              sameAs: [
                "https://www.facebook.com/lettpaanett",
                "https://www.instagram.com/lettpaanett",
                "https://www.linkedin.com/company/lettpaanett",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}

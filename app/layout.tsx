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
  title: "Lett på Nett - Få laget profesjonell nettside for din bedrift",
  description:
    "Vi lager nettsider for bedrifter som vil ha en profesjonell tilstedeværelse på nett uten å gjøre jobben selv. Få en komplett nettside fra kun 4500 kr.",
  keywords:
    "nettside, nettsted, lage nettside, bedriftsnettside, webside, hjemmeside, webutvikling, webdesign, responsivt design, SEO, Norge, norsk, bedrift, små bedrifter, gründer, rimelig nettside, enkel nettside",
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
    title: "Lett på Nett - Få laget profesjonell nettside for din bedrift",
    description:
      "Vi lager nettsider for bedrifter som vil ha en profesjonell tilstedeværelse på nett uten å gjøre jobben selv. Få en komplett nettside fra kun 4500 kr.",
    url: "https://www.lettpaanett.no",
    siteName: "Lett på Nett",
    locale: "nb_NO",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Dette bildet må legges til i public-mappen
        width: 1200,
        height: 630,
        alt: "Lett på Nett - Profesjonell Nettside for din Bedrift",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lett på Nett - Få laget profesjonell nettside for din bedrift",
    description:
      "Vi lager nettsider for bedrifter som vil ha en profesjonell tilstedeværelse på nett uten å gjøre jobben selv. Få en komplett nettside fra kun 4500 kr.",
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
        <meta name="geo.placename" content="Kristiansand" />
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
              description:
                "Vi lager profesjonelle nettsider for bedrifter som vil ha en sterk tilstedeværelse på nett uten å gjøre jobben selv.",
              image: "https://www.lettpaanett.no/logo.png",
              "@id": "https://www.lettpaanett.no",
              url: "https://www.lettpaanett.no",
              email: "kontakt@lettpaanett.no",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Snorresgate 22",
                addressLocality: "Kristiansand",
                postalCode: "4632",
                addressCountry: "NO",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 58.1599,
                longitude: 8.0182,
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
              offers: {
                "@type": "Offer",
                name: "Nettside for nyetablerte bedrifter",
                description: "Komplett nettside med design, innhold og teknisk oppsett",
                price: "4500",
                priceCurrency: "NOK",
              },
              serviceType: ["Nettside", "Webdesign", "SEO", "Responsivt design"],
            }),
          }}
        />

        <Script
          id="service-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Nettside for bedrifter",
              description:
                "Vi lager profesjonelle nettsider for bedrifter som vil ha en sterk tilstedeværelse på nett uten å gjøre jobben selv.",
              provider: {
                "@type": "LocalBusiness",
                name: "Lett på Nett",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Snorresgate 22",
                  addressLocality: "Kristiansand",
                  postalCode: "4632",
                  addressCountry: "NO",
                },
              },
              serviceType: "Nettside",
              areaServed: {
                "@type": "Country",
                name: "Norge",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Nettsider",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Basis nettside",
                      description: "Responsiv nettside med 5 sider",
                    },
                    price: "9900",
                    priceCurrency: "NOK",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Business nettside",
                      description: "Responsiv nettside med 10 sider og avansert SEO",
                    },
                    price: "19900",
                    priceCurrency: "NOK",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Premium nettside",
                      description: "Responsiv nettside med ubegrenset sider og komplett SEO-pakke",
                    },
                    price: "29900",
                    priceCurrency: "NOK",
                  },
                ],
              },
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

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Sjekk om brukeren allerede har akseptert cookies
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-gray-700 text-sm md:text-base">
              Vi bruker informasjonskapsler (cookies) for å gi deg en bedre brukeropplevelse. Ved å bruke vår nettside
              godtar du vår bruk av cookies. Les mer i vår{" "}
              <Link href="/cookies" className="text-primary hover:underline">
                cookie policy
              </Link>{" "}
              og{" "}
              <Link href="/personvern" className="text-primary hover:underline">
                personvernerklæring
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={acceptCookies}
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap"
            >
              Aksepter cookies
            </button>
            <button
              onClick={() => setShowConsent(false)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Lukk"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2 } from "lucide-react"

export function Kontaktskjema() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler en API-forespørsel
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Takk for din henvendelse!</h3>
        <p className="text-gray-600 mb-6">Vi har mottatt meldingen din og kontakter deg innen 24 timer.</p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Send en ny henvendelse
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <p className="text-gray-700">
          <strong>Vi gjør alt for deg!</strong> Fyll ut skjemaet, så tar vi kontakt for å diskutere dine behov. Du
          trenger ikke løfte en finger – vi tar oss av hele prosessen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="navn" className="block text-sm font-medium text-gray-700 mb-1">
            Navn
          </label>
          <Input id="navn" name="navn" required placeholder="Ditt navn" />
        </div>
        <div>
          <label htmlFor="bedrift" className="block text-sm font-medium text-gray-700 mb-1">
            Bedrift
          </label>
          <Input id="bedrift" name="bedrift" placeholder="Firmanavn" />
        </div>
        <div>
          <label htmlFor="epost" className="block text-sm font-medium text-gray-700 mb-1">
            E-post
          </label>
          <Input id="epost" name="epost" type="email" required placeholder="din@epost.no" />
        </div>
        <div>
          <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-1">
            Telefon
          </label>
          <Input id="telefon" name="telefon" placeholder="Ditt telefonnummer" />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="tjeneste" className="block text-sm font-medium text-gray-700 mb-1">
          Hva er du interessert i?
        </label>
        <select
          id="tjeneste"
          name="tjeneste"
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="">Velg tjeneste</option>
          <option value="nettside">Ny nettside</option>
          <option value="redesign">Oppgradering av eksisterende nettside</option>
          <option value="seo">Søkemotoroptimalisering</option>
          <option value="vedlikehold">Vedlikehold & Support</option>
          <option value="annet">Annet</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="melding" className="block text-sm font-medium text-gray-700 mb-1">
          Din melding
        </label>
        <Textarea id="melding" name="melding" rows={5} placeholder="Fortell kort om hva du trenger hjelp med..." />
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sender..." : "Send melding – vi gjør resten"}
        </Button>
      </div>
    </form>
  )
}

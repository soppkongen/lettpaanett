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
        <p className="text-gray-600 mb-6">Vi har mottatt din melding og vil kontakte deg innen 24 timer.</p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Send en ny henvendelse
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="navn" className="block text-sm font-medium text-gray-700 mb-1">
            Navn
          </label>
          <Input id="navn" name="navn" required placeholder="Ditt fulle navn" />
        </div>
        <div>
          <label htmlFor="bedrift" className="block text-sm font-medium text-gray-700 mb-1">
            Bedrift
          </label>
          <Input id="bedrift" name="bedrift" placeholder="Bedriftens navn" />
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
          Hvilken tjeneste er du interessert i?
        </label>
        <select
          id="tjeneste"
          name="tjeneste"
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="">Velg tjeneste</option>
          <option value="nettside">Nettside Utvikling</option>
          <option value="ehandel">E-handel Løsning</option>
          <option value="redesign">Redesign av Eksisterende Nettside</option>
          <option value="seo">SEO Optimalisering</option>
          <option value="vedlikehold">Vedlikehold & Support</option>
          <option value="annet">Annet</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="melding" className="block text-sm font-medium text-gray-700 mb-1">
          Din Melding
        </label>
        <Textarea id="melding" name="melding" rows={5} placeholder="Fortell oss om ditt prosjekt og dine behov..." />
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sender..." : "Send Henvendelse"}
        </Button>
      </div>
    </form>
  )
}

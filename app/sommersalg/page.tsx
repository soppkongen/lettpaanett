import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Check } from "lucide-react"
import { StripeButton } from "@/components/stripe-button"

export default function Sommersalg() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero-seksjon */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-yellow-400 text-gray-900 font-bold px-4 py-1 rounded-full text-sm mb-4">
              SOMMERTILBUD 2025
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Kom i gang på nett for kun <span className="text-primary">4500 kr</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Komplett nettløsning for nyetablerte bedrifter med 6 måneders oppfølging inkludert.
            </p>
          </div>
        </div>
      </section>

      {/* Tilbudets innhold */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-100">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Nettsidepakke for nyetablerte</h2>
                  <p className="text-gray-600">Alt du trenger for å komme i gang</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">4500 kr</div>
                  <p className="text-sm text-gray-500">Inkl. 6 mnd oppfølging</p>
                </div>
              </div>

              <h3 className="font-bold text-lg mb-4">Dette er inkludert:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Profesjonell nettside (1 side)",
                  "Tilpasset design med din logo",
                  "Kontaktskjema",
                  "Visning av telefonnummer",
                  "Bilder og grafiske elementer",
                  "SEO-optimalisering",
                  "Google Maps-registrering",
                  "Mobilvennlig design",
                  "6 måneders teknisk oppfølging",
                  "Webhotell og domene i 6 måneder",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg mb-8">
                <p className="text-gray-700 font-medium">
                  Perfekt for nyetablerte bedrifter som trenger en profesjonell tilstedeværelse på nett uten å bruke mye
                  tid eller penger.
                </p>
              </div>

              <div className="text-center">
                {/* Erstatter Link-knappen med Stripe-knappen */}
                <StripeButton />
                <p className="text-sm text-gray-500 mt-3">Tilbudet er gyldig til 31. august 2025</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold mb-4">Hvordan fungerer det?</h3>
              <ol className="text-left space-y-4 mb-8">
                <li className="flex">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0">
                    1
                  </span>
                  <span>Du bestiller pakken og betaler 4500 kr</span>
                </li>
                <li className="flex">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0">
                    2
                  </span>
                  <span>Vi kontakter deg for å samle nødvendig informasjon (logo, bilder, tekst)</span>
                </li>
                <li className="flex">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0">
                    3
                  </span>
                  <span>Vi lager nettsiden din innen 2 arbeidsdager</span>
                </li>
                <li className="flex">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0">
                    4
                  </span>
                  <span>Vi registrerer deg på Google Maps og optimaliserer for søkemotorer</span>
                </li>
                <li className="flex">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0">
                    5
                  </span>
                  <span>Du får teknisk oppfølging i 6 måneder</span>
                </li>
              </ol>

              <Link href="/" className="text-primary hover:text-primary/80 font-medium">
                Tilbake til forsiden
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Kontaktskjema */}
      <section id="kontakt" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">Bestill sommertilbudet</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="navn" className="block text-sm font-medium text-gray-700 mb-1">
                      Navn
                    </label>
                    <input
                      type="text"
                      id="navn"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="bedrift" className="block text-sm font-medium text-gray-700 mb-1">
                      Bedriftsnavn
                    </label>
                    <input
                      type="text"
                      id="bedrift"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="epost" className="block text-sm font-medium text-gray-700 mb-1">
                      E-post
                    </label>
                    <input
                      type="email"
                      id="epost"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="telefon"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="melding" className="block text-sm font-medium text-gray-700 mb-1">
                    Fortell kort om din bedrift
                  </label>
                  <textarea
                    id="melding"
                    rows={3}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <div className="flex items-start">
                  <input type="checkbox" id="vilkar" className="mt-1 mr-2" required />
                  <label htmlFor="vilkar" className="text-sm text-gray-600">
                    Jeg bekrefter at jeg ønsker å bestille sommertilbudet fra Lett på Nett til 4500 kr inkl. 6 måneders
                    oppfølging
                  </label>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-6 rounded-lg transition-all"
                  >
                    Send bestilling
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

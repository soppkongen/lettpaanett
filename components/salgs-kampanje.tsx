import Link from "next/link"
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react"

export function SalgsKampanje() {
  return (
    <section id="kampanje" className="py-10 md:py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-primary">
          <div className="p-1 bg-primary"></div>
          <div className="p-8 md:p-12">
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <div className="bg-primary/10 text-primary font-bold px-3 md:px-4 py-1 md:py-2 rounded-full text-xs sm:text-sm md:text-base flex items-center">
                <Sparkles className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
                SPESIALTILBUD FOR NYE BEDRIFTER
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 md:mb-6">
              Få en komplett nettside for kun <span className="text-primary">4500 kr</span>
            </h2>

            <div className="text-center mb-8">
              <p className="text-lg md:text-xl font-medium text-gray-700 max-w-3xl mx-auto">
                <span className="bg-yellow-100 px-2 py-1 rounded">Vi gjør alt – du trenger ikke løfte en finger</span>
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6 md:mb-8">
              <div className="md:w-2/3">
                <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                  <strong>Mens andre tilbyr "gjør-det-selv"-verktøy, tar vi oss av absolutt alt:</strong>
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {[
                    "Profesjonell nettside (1 side)",
                    "Design med din logo og farger",
                    "Kontaktskjema for kunder",
                    "Telefonnummer og kontaktinfo",
                    "Bilder og tekst om din bedrift",
                    "Søkemotoroptimalisering",
                    "Google Maps-registrering",
                    "Fungerer på mobil og PC",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                      <span className="text-sm md:text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/3 bg-gray-50 p-4 md:p-6 rounded-lg flex flex-col justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">Alt inkludert</div>
                  <div className="text-4xl font-bold text-primary mb-2">4500 kr</div>
                  <p className="text-gray-600 mb-4">Inkludert 6 måneders oppfølging</p>
                  <div className="border-t border-gray-200 my-4 pt-4">
                    <div className="flex items-center mb-2">
                      <div className="h-4 w-4 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-gray-700">Webhotell og domene i 6 måneder</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-4 w-4 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-gray-700">Teknisk hjelp når du trenger det</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-gray-500 mb-2 text-center">Tilbudet gjelder til 31. august 2025</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6 md:mt-0">
              <Link
                href="/sommersalg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-base md:text-lg transition-all flex items-center justify-center group"
              >
                Bestill nå – vi gjør alt for deg
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

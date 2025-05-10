import Image from "next/image"
import { Kontaktskjema } from "@/components/kontaktskjema"
import { Tjenester } from "@/components/tjenester"
import { Priser } from "@/components/priser"
import { Portefolje } from "@/components/portefolje"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Kundevurderinger } from "@/components/kundevurderinger"
import { SalgsKampanje } from "@/components/salgs-kampanje"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero-seksjon */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/norwegian-fjord-landscape.png"
            alt="Norsk landskap"
            fill
            priority
            className="object-cover brightness-[0.7]"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Profesjonell Webutvikling for Norske Bedrifter
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Vi skaper moderne, brukervennlige nettsider som hjelper din bedrift å vokse i det digitale landskapet.
          </p>
          <a
            href="#kampanje"
            className="bg-primary hover:bg-primary/90 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all inline-block"
          >
            Se vårt tilbud for nyetablerte bedrifter
          </a>
        </div>
      </section>

      {/* Salgskampanje for nyetablerte bedrifter */}
      <SalgsKampanje />

      {/* Om oss */}
      <section id="om-oss" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Din Partner for Digital Suksess</h2>
              <p className="text-lg text-gray-600 mb-4">
                Vi er et team av lidenskapelige webutviklere basert i Norge, dedikert til å hjelpe små og mellomstore
                bedrifter med å etablere en sterk digital tilstedeværelse.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Med over 10 års erfaring i bransjen, forstår vi det unike norske markedet og de spesifikke behovene til
                lokale bedrifter.
              </p>
              <p className="text-lg text-gray-600">
                Vår tilnærming kombinerer kreativ design med teknisk ekspertise for å levere nettsider som ikke bare ser
                fantastiske ut, men også gir resultater for din bedrift.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image src="/moderne-kontor-norsk-design.png" alt="Vårt kontor" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Tjenester */}
      <Tjenester />

      {/* Portefølje */}
      <Portefolje />

      {/* Kundevurderinger */}
      <Kundevurderinger />

      {/* Priser */}
      <Priser />

      {/* Kontakt */}
      <section id="kontakt" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-800">Ta Kontakt</h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Klar for å ta din bedrift til neste nivå? Fyll ut skjemaet under, så tar vi kontakt innen 24 timer.
          </p>
          <div className="max-w-3xl mx-auto">
            <Kontaktskjema />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import Image from "next/image"
import { Kontaktskjema } from "@/components/kontaktskjema"
import { Tjenester } from "@/components/tjenester"
import { Priser } from "@/components/priser"
import { Portefolje } from "@/components/portefolje"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Kundevurderinger } from "@/components/kundevurderinger"
import { SalgsKampanje } from "@/components/salgs-kampanje"
import { FAQSection } from "@/components/faq-section"

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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Nettsider som fungerer for din bedrift</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Vi lager nettsider som er enkle å bruke, ser bra ut og hjelper deg å få flere kunder.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Vi gjør det enkelt å komme på nett</h2>
              <p className="text-lg text-gray-600 mb-4">
                Lett på Nett gjør akkurat det navnet sier – vi hjelper deg å komme på nett uten stress. Du trenger ikke
                være teknisk anlagt eller ha masse tid. Vi fikser alt det tekniske, du leverer bare innholdet.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Vi snakker ikke teknisk sjargong eller lurer inn ekstra kostnader. Du får en nettside som fungerer, til
                en pris du vet på forhånd, og som er klar når vi har lovet. Så enkelt er det.
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

      {/* FAQ-seksjon */}
      <FAQSection />

      {/* Kontakt */}
      <section id="kontakt" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-800">Ta Kontakt</h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Vil du ha en nettside som fungerer for din bedrift? Fyll ut skjemaet, så ringer vi deg innen 24 timer.
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

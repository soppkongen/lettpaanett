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
            alt="Profesjonell nettside for din bedrift"
            fill
            priority
            className="object-cover brightness-[0.7]"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="bg-primary/20 backdrop-blur-sm inline-block px-4 py-2 rounded-full mb-4">
            <span className="text-white font-medium">Vi gjør jobben – du slipper å løfte en finger</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Nettsider der vi gjør alt for deg</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Mens konkurrentene tilbyr «gjør-det-selv»-verktøy, tar vi oss av absolutt alt – fra design til lansering.
          </p>
          <a
            href="#kampanje"
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all inline-block"
          >
            Få en nettside uten å løfte en finger
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Om oss – Nettsider uten stress</h2>
              <p className="text-lg text-gray-600 mb-4">
                Vi vet at ikke alle ønsker å bruke tid og krefter på å lage en nettside selv.{" "}
                <span className="font-semibold bg-yellow-100 px-1">
                  Derfor har vi spesialisert oss på å levere komplette, skreddersydde nettsider der du som kunde slipper
                  å løfte en finger. Mens konkurrentene tilbyr «gjør-det-selv»-verktøy og kompliserte løsninger, tar vi
                  oss av absolutt alt.
                </span>
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Vårt dedikerte team består av erfarne designere, utviklere og digitale rådgivere med ett mål: å gjøre
                din bedrift synlig på nett, helt uten stress for deg. Vi leverer moderne, responsive og
                SEO-optimaliserte nettsider som gir deg en profesjonell digital tilstedeværelse og økt synlighet i
                Google-søk.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Enten du trenger en enkel bedriftsnettside eller en mer kompleks løsning, garanterer vi en fast pris,
                rask levering og personlig oppfølging fra start til slutt.
              </p>
              <p className="text-lg text-gray-600 mb-6">Spar tid og energi – la oss gjøre jobben for deg.</p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-xl mb-3">Populære tjenester:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                    <span>Lage nettside</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                    <span>Nettside for bedrift</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                    <span>Prisgunstige pakkeløsninger</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg font-medium text-gray-800">
                Ta kontakt i dag, så tar vi nettsiden din til neste nivå – enkelt, raskt og helt uten at du trenger å
                gjøre noe som helst!
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
            Vil du ha en nettside som fungerer for din bedrift? Fyll ut skjemaet, så tar vi kontakt med deg innen 24
            timer.
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

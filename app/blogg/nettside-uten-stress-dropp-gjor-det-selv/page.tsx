import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft, Share2 } from "lucide-react"

export const metadata = {
  title: "Nettside uten stress: Derfor bør du droppe «gjør-det-selv»-løsningene | Lett på Nett",
  description:
    "Lær hvorfor du bør unngå «gjør-det-selv»-verktøy og heller velge en profesjonell nettside-leverandør som tar seg av alt for deg.",
  keywords: "nettside, gjør-det-selv, webdesign, profesjonell nettside, seo, nettside-utvikling, bedrift",
  openGraph: {
    title: "Nettside uten stress: Derfor bør du droppe «gjør-det-selv»-løsningene",
    description:
      "Lær hvorfor du bør unngå «gjør-det-selv»-verktøy og heller velge en profesjonell nettside-leverandør som tar seg av alt for deg.",
    url: "https://www.lettpaanett.no/blogg/nettside-uten-stress-dropp-gjor-det-selv",
    type: "article",
    publishedTime: "2025-05-11T10:00:00Z",
    authors: ["Lett på Nett"],
    images: [
      {
        url: "/moderne-kontor-norsk-design.png",
        width: 1200,
        height: 630,
        alt: "Nettside uten stress",
      },
    ],
  },
}

export default function BloggPost() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Blogginnlegg */}
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Tilbake-knapp */}
            <div className="mb-8">
              <Link href="/blogg" className="inline-flex items-center text-gray-600 hover:text-primary">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Tilbake til blogg
              </Link>
            </div>

            {/* Dato og del */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-gray-500">11. mai 2025</div>
              <button className="inline-flex items-center text-gray-500 hover:text-primary">
                <Share2 className="h-4 w-4 mr-1" />
                Del
              </button>
            </div>

            {/* Tittel */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Nettside uten stress: Derfor bør du droppe «gjør-det-selv»-løsningene
            </h1>

            {/* Hovedbilde */}
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
              <Image src="/moderne-kontor-norsk-design.png" alt="Nettside uten stress" fill className="object-cover" />
            </div>

            {/* Innhold */}
            <div className="prose prose-lg max-w-none">
              <p>
                Stadig flere bedrifter forstår hvor viktig det er å ha en profesjonell og attraktiv nettside. Men betyr
                det at du må bruke tid og energi på kompliserte «gjør-det-selv»-verktøy? Absolutt ikke.
              </p>

              <p>
                Hos oss spesialiserer vi oss på å lage komplette, skreddersydde nettsider der du som kunde slipper å
                gjøre noe som helst. Mens konkurrenter tilbyr avanserte, men ofte frustrerende drag-and-drop-løsninger,
                tar vi ansvaret for hele prosessen. Dette inkluderer alt fra planlegging og design, til publisering og
                vedlikehold.
              </p>

              <h2>Hvorfor droppe «gjør-det-selv»-nettsider?</h2>

              <h3>1. Tid er penger:</h3>
              <p>
                Tiden du bruker på å lære deg verktøy og fikse tekniske problemer kunne heller blitt brukt på å utvikle
                din egen virksomhet. Vi håndterer nettsiden slik at du kan fokusere på det du er best på.
              </p>

              <h3>2. Profesjonell kvalitet:</h3>
              <p>
                «Gjør-det-selv»-løsninger gir deg sjelden den profesjonelle kvaliteten som kreves for å skille seg ut på
                nett. Vårt team av erfarne designere og utviklere garanterer en moderne, brukervennlig og
                SEO-optimalisert nettside.
              </p>

              <h3>3. Ingen overraskelser:</h3>
              <p>
                Med våre tjenester får du en fast pris og rask levering. Du slipper skjulte kostnader og usikkerhet
                rundt hvor lang tid nettsideprosjektet egentlig tar.
              </p>

              <h2>Konkurrentanalyse og topp SEO-plasseringer</h2>
              <p>
                Vi går grundig til verks og analyserer konkurrentenes nettsider for å identifisere deres styrker og
                svakheter. Basert på denne innsikten utvikler vi en optimalisert SEO-strategi, slik at du kan konkurrere
                effektivt mot hvem som helst på Google-søk.
              </p>

              <h2>SEO-optimalisert nettside – et must i dag</h2>
              <p>
                En av de største fordelene ved å velge vår løsning er at vi bygger nettsider optimalisert for Google-søk
                fra første stund. Dermed får du bedre synlighet, flere besøkende og potensielt økt salg, helt uten at du
                trenger å løfte en finger.
              </p>

              <h2>Velg en nettside som gjør jobben for deg</h2>
              <p>
                La oss hjelpe deg med å gjøre bedriften synlig på nett – enkelt, effektivt og stressfritt. Ta kontakt
                med oss i dag og opplev forskjellen med en komplett nettsideløsning skreddersydd akkurat dine behov.
              </p>
            </div>

            {/* Forfatter */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center">
                <div className="bg-gray-200 h-12 w-12 rounded-full flex items-center justify-center text-gray-500 mr-4">
                  LN
                </div>
                <div>
                  <div className="font-medium text-gray-800">Lett på Nett</div>
                  <div className="text-sm text-gray-500">Nettside-eksperter</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Klar for en nettside uten stress?</h3>
              <p className="text-gray-600 mb-6">
                Vi tar oss av alt – du trenger ikke løfte en finger. Få en profesjonell nettside som hjelper bedriften
                din å vokse.
              </p>
              <Link
                href="/#kontakt"
                className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-all inline-block"
              >
                Kontakt oss i dag
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}

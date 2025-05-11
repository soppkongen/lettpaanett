import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft, Share2 } from "lucide-react"

export const metadata = {
  title: "5 grunner til at bedriften din trenger en profesjonell nettside | Lett på Nett",
  description:
    "Oppdaget hvorfor en profesjonell nettside er avgjørende for din bedrift. Økt synlighet, bedre førsteinntrykk og langsiktig kostnadseffektivitet.",
  keywords: "profesjonell nettside, bedriftsnettside, nettside for bedrift, SEO, webdesign, digital tilstedeværelse",
  openGraph: {
    title: "5 grunner til at bedriften din trenger en profesjonell nettside",
    description:
      "Oppdaget hvorfor en profesjonell nettside er avgjørende for din bedrift. Økt synlighet, bedre førsteinntrykk og langsiktig kostnadseffektivitet.",
    url: "https://www.lettpaanett.no/blogg/5-grunner-til-profesjonell-nettside",
    type: "article",
    publishedTime: "2025-05-05T10:00:00Z",
    authors: ["Lett på Nett"],
    images: [
      {
        url: "/norwegian-fjord-landscape.png",
        width: 1200,
        height: 630,
        alt: "Profesjonell nettside for bedrifter",
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
              <div className="text-sm text-gray-500">5. mai 2025</div>
              <button className="inline-flex items-center text-gray-500 hover:text-primary">
                <Share2 className="h-4 w-4 mr-1" />
                Del
              </button>
            </div>

            {/* Tittel */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              5 grunner til at bedriften din trenger en profesjonell nettside
            </h1>

            {/* Hovedbilde */}
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
              <Image
                src="/norwegian-fjord-landscape.png"
                alt="Profesjonell nettside for bedrifter"
                fill
                className="object-cover"
              />
            </div>

            {/* Innhold */}
            <div className="prose prose-lg max-w-none">
              <p>
                En profesjonell nettside er ikke bare et digitalt visittkort – det er bedriftens ansikt utad, salgskanal
                og markedsføringsverktøy samlet i én løsning. Her er fem grunner til hvorfor akkurat din bedrift bør
                investere i en profesjonell nettside:
              </p>

              <h3>1. Førsteinntrykket teller</h3>
              <p>
                Når potensielle kunder søker etter produkter eller tjenester, besøker de gjerne nettsiden din først. En
                profesjonell og moderne nettside bygger tillit, styrker troverdigheten og skaper et godt førsteinntrykk.
              </p>

              <h3>2. Synlighet på Google</h3>
              <p>
                En profesjonell nettside er optimalisert for søkemotorer (SEO). Dette betyr at bedriften din vil dukke
                opp høyere i Google-søk, noe som øker trafikken til siden og potensielt gir deg flere kunder.
              </p>

              <h3>3. Økt konkurransekraft</h3>
              <p>
                Mange konkurrenter har allerede profesjonelle nettsider. Uten en solid og profesjonell digital
                tilstedeværelse risikerer du å miste kunder til konkurrentene. En skreddersydd nettside hjelper deg å
                konkurrere effektivt.
              </p>

              <h3>4. Enkel kommunikasjon med kundene</h3>
              <p>
                En god nettside gjør det enkelt for kundene å finne informasjon, kontakte deg og gjøre kjøp eller
                forespørsler. Profesjonelle nettsider har effektive løsninger som kontaktskjemaer, integrerte
                bookingløsninger og intuitive menyer.
              </p>

              <h3>5. Langsiktig kostnadseffektivitet</h3>
              <p>
                Investeringen i en profesjonell nettside betaler seg over tid. Du sparer penger ved å unngå hyppige
                tekniske problemer og dårlig funksjonalitet som kjennetegner billigere «gjør-det-selv»-alternativer.
                Dessuten vil en velfungerende nettside generere flere salg og inntekter på lang sikt.
              </p>

              <p>
                Ta steget og gi bedriften din den digitale oppgraderingen den fortjener. Kontakt oss for en profesjonell
                nettside som setter din bedrift i sentrum på nettet.
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
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Klar for en profesjonell nettside?</h3>
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

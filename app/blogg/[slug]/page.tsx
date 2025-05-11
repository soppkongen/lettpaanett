import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

export const dynamicParams = true

export function generateStaticParams() {
  return [{ slug: "slik-far-du-flere-kunder-gjennom-nettsiden" }]
}

export default function BloggPost({ params }: { params: { slug: string } }) {
  // For nå, la oss bare vise en placeholder for andre blogginnlegg
  // I en ekte implementasjon ville vi hente innholdet fra en database eller CMS

  // Sjekk om sluggen er en av de vi støtter
  const validSlugs = ["slik-far-du-flere-kunder-gjennom-nettsiden"]
  if (!validSlugs.includes(params.slug)) {
    notFound()
  }

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

            {/* Tittel */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Slik får du flere kunder gjennom nettsiden din
            </h1>

            {/* Innhold */}
            <div className="prose prose-lg max-w-none">
              <p>Dette blogginnlegget er under utvikling.</p>
              <p>
                Sjekk ut våre andre innlegg:{" "}
                <Link href="/blogg/nettside-uten-stress-dropp-gjor-det-selv" className="text-primary hover:underline">
                  Nettside uten stress: Derfor bør du droppe «gjør-det-selv»-løsningene
                </Link>
              </p>
              <p>
                <Link href="/blogg/5-grunner-til-profesjonell-nettside" className="text-primary hover:underline">
                  5 grunner til at bedriften din trenger en profesjonell nettside
                </Link>
              </p>
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

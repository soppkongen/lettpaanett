import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft, Search, Settings, User, MessageSquare } from "lucide-react"

export default function ModerneStil() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Tilbake-knapp */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-primary">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Tilbake til forsiden
          </Link>
        </div>
      </div>

      {/* Hero-seksjon */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Moderne Design</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Perfekt for bedrifter, kontorer og profesjonelle tjenester.
            </p>
          </div>
        </div>
      </section>

      {/* Forhåndsvisning */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl mb-12">
              {/* Moderne bedriftsside */}
              <div className="w-full">
                {/* Header */}
                <div className="bg-white px-8 py-4 flex justify-between items-center border-b">
                  <div className="flex items-center gap-12">
                    <div className="text-2xl font-bold text-gray-800">HJEM</div>
                    <nav className="hidden md:flex space-x-8">
                      <a href="#" className="text-gray-800 font-medium">
                        TJENESTER
                      </a>
                      <a href="#" className="text-gray-800 font-medium">
                        OM OSS
                      </a>
                      <a href="#" className="text-gray-800 font-medium">
                        KONTAKT
                      </a>
                    </nav>
                  </div>
                  <div>
                    <Search className="h-6 w-6 text-gray-800" />
                  </div>
                </div>

                {/* Hero */}
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 p-12 bg-white flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                      MELLOMSTOR
                      <br />
                      LOKAL BEDRIFT
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                      Vi tilbyr tjenester og produkter til både bedrifter og privatpersoner.
                    </p>
                    <div>
                      <a
                        href="#"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded inline-block transition-colors"
                      >
                        LES MER
                      </a>
                    </div>
                  </div>
                  <div className="md:w-1/2 relative h-[400px]">
                    <Image
                      src="/moderne-bedriftsside.png"
                      alt="Moderne bedriftsbygg"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Tjenester */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t">
                  <div className="p-8 flex items-start gap-4 border-r">
                    <Settings className="h-8 w-8 text-gray-700 mt-1 shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">VÅRE TJENESTER</h3>
                      <p className="text-gray-600">Kort beskrivelse av tjenestene som bedriften leverer.</p>
                    </div>
                  </div>
                  <div className="p-8 flex items-start gap-4 border-r">
                    <User className="h-8 w-8 text-gray-700 mt-1 shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">OM OSS</h3>
                      <p className="text-gray-600">Litt informasjon om bedriften og hvorfor kunder velger oss.</p>
                    </div>
                  </div>
                  <div className="p-8 flex items-start gap-4">
                    <MessageSquare className="h-8 w-8 text-gray-700 mt-1 shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">KONTAKT OSS</h3>
                      <p className="text-gray-600">Ta gjerne kontakt med oss for tilbud eller mer informasjon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yrker som passer */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Passer for</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">
              <h3 className="font-bold text-gray-800">Bedrifter</h3>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">
              <h3 className="font-bold text-gray-800">Kontorer</h3>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">
              <h3 className="font-bold text-gray-800">Konsulenter</h3>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">
              <h3 className="font-bold text-gray-800">Teknologiselskaper</h3>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">
              <h3 className="font-bold text-gray-800">Regnskapsførere</h3>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">
              <h3 className="font-bold text-gray-800">Markedsførere</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/"
                className="bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 font-bold py-3 px-8 rounded-lg transition-all"
              >
                Se andre stiler
              </Link>
              <Link
                href="/#kontakt"
                className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-all"
              >
                Kontakt oss
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

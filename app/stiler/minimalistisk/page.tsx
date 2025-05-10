import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export default function MinimalistiskStil() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Minimalistisk Design</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Perfekt for elektrikere, arkitekter og moderne tømrere.
            </p>
          </div>
        </div>
      </section>

      {/* Forhåndsvisning */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl mb-12">
              {/* Minimalistisk nettside */}
              <div className="w-full">
                {/* Header */}
                <div className="bg-white px-8 py-4 flex justify-between items-center border-b">
                  <div className="text-2xl font-bold text-gray-800">EKSEMPEL</div>
                  <nav className="hidden md:flex space-x-8">
                    <a href="#" className="text-gray-800 font-medium">
                      Om
                    </a>
                    <a href="#" className="text-gray-800 font-medium">
                      Tjenester
                    </a>
                    <a href="#" className="text-gray-800 font-medium">
                      Kontakt
                    </a>
                  </nav>
                </div>

                {/* Hero */}
                <div className="relative h-[500px] w-full">
                  <Image
                    src="/lokal-handverker.png"
                    alt="Lokal håndverker som jobber med tre"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center p-12">
                    <div className="max-w-xl">{/* Ingen tekst her siden bildet allerede har tekst */}</div>
                  </div>
                </div>

                {/* Tjenester */}
                <div className="p-12 bg-white">
                  <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Våre tjenester</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 p-6 rounded">
                      <h3 className="text-xl font-bold mb-3 text-gray-800">Snekkerarbeid</h3>
                      <p className="text-gray-600">Profesjonelt snekkerarbeid for ditt hjem eller bedrift.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded">
                      <h3 className="text-xl font-bold mb-3 text-gray-800">Oppussing</h3>
                      <p className="text-gray-600">Komplett oppussing av rom eller hele boliger.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded">
                      <h3 className="text-xl font-bold mb-3 text-gray-800">Vedlikehold</h3>
                      <p className="text-gray-600">Regelmessig vedlikehold for å holde eiendommen i topp stand.</p>
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
            <div className="bg-white p-4 rounded-lg text-center">
              <h3 className="font-bold">Elektrikere</h3>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <h3 className="font-bold">Arkitekter</h3>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <h3 className="font-bold">Moderne tømrere</h3>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <h3 className="font-bold">Interiørdesignere</h3>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <h3 className="font-bold">Fotografer</h3>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <h3 className="font-bold">Rørleggere</h3>
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
                className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold py-3 px-8 rounded-lg transition-all"
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

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export default function TradisjonellStil() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Tilbake-knapp */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-primary">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Tilbake til forsiden
          </Link>
        </div>
      </div>

      {/* Hero-seksjon */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Tradisjonell Design</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Perfekt for eiendomsmeglere, advokater og konsulenter.
            </p>
          </div>
        </div>
      </section>

      {/* Forhåndsvisning */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl mb-12">
              {/* Eiendomsmegler nettside */}
              <div className="w-full">
                {/* Header */}
                <div className="bg-[#1e4e4e] px-8 py-6 flex justify-between items-center">
                  <div className="text-2xl font-bold text-white">Eiendomsmegler</div>
                  <nav className="hidden md:flex space-x-8">
                    <a href="#" className="text-white font-medium">
                      Hjem
                    </a>
                    <a href="#" className="text-white font-medium">
                      Om oss
                    </a>
                    <a href="#" className="text-white font-medium">
                      Tjenester
                    </a>
                    <a href="#" className="text-white font-medium">
                      Kontakt
                    </a>
                  </nav>
                </div>

                {/* Hero */}
                <div className="relative h-[500px] w-full">
                  <Image src="/eiendomsmegler.png" alt="Moderne hus" fill className="object-cover" />
                  <div className="absolute inset-0 flex flex-col justify-center p-12">
                    <div className="max-w-xl">
                      <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
                        Finn ditt
                        <br />
                        drømmehjem
                      </h1>
                      <p className="text-lg text-gray-800 mb-8 max-w-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut
                        labore et dolore
                      </p>
                      <div>
                        <a
                          href="#"
                          className="bg-[#1e4e4e] hover:bg-[#183e3e] text-white font-medium py-3 px-8 rounded-md inline-block transition-colors"
                        >
                          Søk bolig
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tjenester */}
                <div className="p-12 bg-white">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    <div className="md:w-1/3">
                      <h2 className="text-4xl font-bold mb-6 text-gray-800">Våre tjenester</h2>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-lg text-gray-600">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed do eiusmod
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ekstra eksempel */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Alternativ tradisjonell stil</h2>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl mb-12">
              {/* Nettside-eksempel */}
              <div className="w-full">
                <div className="bg-[#f5f0e6] px-8 py-4 flex justify-between items-center">
                  <div className="text-2xl font-bold text-gray-800"></div>
                  <nav className="hidden md:flex space-x-8">
                    <a href="#" className="text-gray-800 font-medium">
                      HJEM
                    </a>
                    <a href="#" className="text-gray-800 font-medium">
                      TJENESTER
                    </a>
                    <a href="#" className="text-gray-800 font-medium">
                      OM
                    </a>
                    <a href="#" className="text-gray-800 font-medium">
                      KONTAKT
                    </a>
                  </nav>
                </div>

                <div className="relative h-[500px] w-full">
                  <Image
                    src="/handverker-ekstra.png"
                    alt="Alternativ tradisjonell nettside for håndverkere"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center p-12">
                    <div className="max-w-xl">
                      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                        Din lokale
                        <br />
                        håndverker
                      </h1>
                      <p className="text-xl text-white mb-8 max-w-md">
                        Jeg tilbyr renovering, snekkerarbeid og reparasjoner. Kontakt meg for en uforpliktende befaring.
                      </p>
                      <div>
                        <a
                          href="#"
                          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded inline-block transition-colors"
                        >
                          KONTAKT OSS
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yrker som passer */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Passer for</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
              <h3 className="font-bold text-gray-800">Eiendomsmeglere</h3>
            </div>
            <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
              <h3 className="font-bold text-gray-800">Advokater</h3>
            </div>
            <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
              <h3 className="font-bold text-gray-800">Konsulenter</h3>
            </div>
            <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
              <h3 className="font-bold text-gray-800">Finansrådgivere</h3>
            </div>
            <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
              <h3 className="font-bold text-gray-800">Revisorer</h3>
            </div>
            <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
              <h3 className="font-bold text-gray-800">Forsikringsagenter</h3>
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
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 border border-gray-300 transition-all"
              >
                Se andre stiler
              </Link>
              <Link
                href="/#kontakt"
                className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 transition-all"
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

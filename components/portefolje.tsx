import Image from "next/image"
import Link from "next/link"

export function Portefolje() {
  const designStiler = [
    {
      title: "Minimalistisk",
      description: "Ren og elegant design. Perfekt for elektrikere, arkitekter og moderne tømrere.",
      image: "/lokal-handverker.png",
      color: "bg-gray-50",
      url: "/stiler/minimalistisk",
    },
    {
      title: "Moderne",
      description: "Frisk og dynamisk design. Ideell for bedrifter, kontorer og profesjonelle tjenester.",
      image: "/moderne-bedriftsside.png",
      color: "bg-white",
      url: "/stiler/moderne",
    },
    {
      title: "Tradisjonell",
      description: "Klassisk og tillitsvekkende design. Passer for eiendomsmeglere, advokater og konsulenter.",
      image: "/eiendomsmegler.png",
      color: "bg-gray-100",
      url: "/stiler/tradisjonell",
    },
  ]

  return (
    <section id="portefolje" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-800">Velg Din Stil</h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Tre designstiler som kan tilpasses din bedrifts identitet.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {designStiler.map((stil, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-80 w-full">
                <Image
                  src={stil.image || "/placeholder.svg"}
                  alt={`${stil.title} designstil`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className={`p-6 ${stil.color}`}>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{stil.title}</h3>
                <p className="text-gray-600 mb-6">{stil.description}</p>
                <Link
                  href={stil.url}
                  className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-6 rounded-lg transition-all inline-block w-full text-center"
                >
                  Se forhåndsvisning
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

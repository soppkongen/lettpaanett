import Image from "next/image"
import Link from "next/link"

export function Portefolje() {
  const designStiler = [
    {
      title: "Minimalistisk",
      description: "Enkel og stilren design. Perfekt for elektrikere, snekkere og håndverkere.",
      image: "/lokal-handverker.png",
      color: "bg-gray-50",
      url: "/stiler/minimalistisk",
    },
    {
      title: "Moderne",
      description: "Frisk og profesjonell design. Passer for bedrifter, kontorer og konsulenter.",
      image: "/moderne-bedriftsside.png",
      color: "bg-white",
      url: "/stiler/moderne",
    },
    {
      title: "Tradisjonell",
      description: "Klassisk og tillitsvekkende design. Bra for eiendomsmeglere og advokater.",
      image: "/eiendomsmegler.png",
      color: "bg-gray-100",
      url: "/stiler/tradisjonell",
    },
  ]

  return (
    <section id="portefolje" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-800">Velg din stil</h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Tre forskjellige stiler som vi tilpasser til din bedrift.
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
                  Se eksempel
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

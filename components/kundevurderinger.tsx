import Image from "next/image"
import { Star } from "lucide-react"

interface Vurdering {
  navn: string
  bedrift: string
  stilling: string
  bilde: string
  tekst: string
  stjerner: number
}

export function Kundevurderinger() {
  const vurderinger: Vurdering[] = [
    {
      navn: "Marte Johansen",
      bedrift: "Bergens Bakeri",
      stilling: "Daglig Leder",
      bilde: "/kundevurdering-marte.png",
      tekst:
        "Lett på Nett leverte en nettside som overgikk alle våre forventninger. Siden er ikke bare vakker, men også brukervennlig og har hjulpet oss å øke vårt online salg med over 40% i løpet av de første tre månedene. Deres forståelse av våre behov og raske responstid gjorde hele prosessen smertefri.",
      stjerner: 5,
    },
    {
      navn: "Anders Larsen",
      bedrift: "Oslo Advokater",
      stilling: "Partner",
      bilde: "/kundevurdering-anders.png",
      tekst:
        "Vi trengte en profesjonell nettside som reflekterte vår ekspertise og seriøsitet. Lett på Nett forstod umiddelbart vår visjon og skapte en elegant løsning som har gitt oss flere henvendelser fra potensielle klienter. Deres oppfølging og support har vært upåklagelig.",
      stjerner: 5,
    },
    {
      navn: "Kristin Berg",
      bedrift: "Trondheim Turisme",
      stilling: "Markedssjef",
      bilde: "/kundevurdering-kristin.png",
      tekst:
        "Samarbeidet med Lett på Nett har vært en fornøyelse fra start til slutt. De tok seg tid til å forstå våre unike behov innen turistnæringen og skapte en nettside som virkelig fremhever det beste av hva Trondheim har å tilby. Resultatet har vært en betydelig økning i bookinger.",
      stjerner: 4,
    },
  ]

  return (
    <section id="kundevurderinger" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-800">Hva Våre Kunder Sier</h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Vi er stolte av å ha hjulpet mange norske bedrifter med å lykkes på nett. Her er noen tilbakemeldinger fra
          våre fornøyde kunder.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {vurderinger.map((vurdering, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow relative">
              <div className="flex items-center mb-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={vurdering.bilde || "/placeholder.svg"}
                    alt={vurdering.navn}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{vurdering.navn}</h3>
                  <p className="text-gray-600 text-sm">
                    {vurdering.stilling}, {vurdering.bedrift}
                  </p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < vurdering.stjerner ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <blockquote className="text-gray-600 italic mb-4">"{vurdering.tekst}"</blockquote>

              <div className="absolute top-6 right-6">
                <svg
                  className="h-12 w-12 text-primary/10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#kontakt" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
            Bli vår neste fornøyde kunde
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

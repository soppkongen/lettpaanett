import Image from "next/image"

export function Hero() {
  return (
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
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Vi lager profesjonelle nettsider for din bedrift
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
          Få en komplett nettside som er enkel å bruke, ser bra ut og hjelper deg å få flere kunder.
        </p>
        <a
          href="#kampanje"
          className="bg-primary hover:bg-primary/90 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all inline-block"
        >
          Få laget nettside fra 4500 kr
        </a>
      </div>
    </section>
  )
}

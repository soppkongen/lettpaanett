import { Code, Smartphone, Search, Zap, Shield, ThumbsUp } from "lucide-react"

export function Tjenester() {
  const tjenester = [
    {
      icon: <ThumbsUp className="h-10 w-10 text-primary" />,
      title: "Vi gjør alt for deg",
      description: "Mens andre tilbyr «gjør-det-selv»-verktøy, tar vi oss av absolutt alt fra A til Å.",
      highlighted: true,
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Nettside Utvikling",
      description: "Vi lager nettsider som passer for din bedrift – enkle å bruke og som gir deg flere kunder.",
      highlighted: false,
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Mobilvisning",
      description: "Nettsiden fungerer like bra på mobil som på PC – viktig siden de fleste søker på telefonen.",
      highlighted: false,
    },
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Søkemotoroptimalisering",
      description: "Vi sørger for at folk finner deg på Google når de søker etter det du tilbyr.",
      highlighted: false,
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Rask nettside",
      description: "Nettsiden laster raskt – ingen venter på trege sider, og Google liker raske sider.",
      highlighted: false,
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Support & Sikkerhet",
      description: "Vi holder nettsiden din oppdatert og sikker, så du kan fokusere på jobben din.",
      highlighted: false,
    },
  ]

  return (
    <section id="tjenester" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-800">Dette gjør vi for deg</h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Vi tar oss av alt det tekniske, så du kan konsentrere deg om bedriften din.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tjenester.map((tjeneste, index) => (
            <div
              key={index}
              className={`${tjeneste.highlighted ? "bg-primary/5 border border-primary/20" : "bg-white"} p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow`}
            >
              <div className="mb-4">{tjeneste.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{tjeneste.title}</h3>
              <p className="text-gray-600">{tjeneste.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

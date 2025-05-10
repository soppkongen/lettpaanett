import { Code, Smartphone, Search, Zap, Shield } from "lucide-react"

export function Tjenester() {
  const tjenester = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Nettside Utvikling",
      description: "Skreddersydde nettsider med moderne design og funksjonalitet som passer din bedrifts behov.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Responsivt Design",
      description: "Nettsider som fungerer perfekt på alle enheter, fra mobil til desktop.",
    },
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "SEO Optimalisering",
      description: "Forbedre din synlighet i søkemotorer og tiltrekk flere potensielle kunder.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Ytelsesoptimalisering",
      description: "Raske nettsider som gir bedre brukeropplevelse og høyere konverteringsrate.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Vedlikehold & Sikkerhet",
      description: "Kontinuerlig vedlikehold og sikkerhetsoppdateringer for å beskytte din nettside.",
    },
  ]

  return (
    <section id="tjenester" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-800">Våre Tjenester</h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Vi tilbyr et bredt spekter av digitale tjenester for å hjelpe din bedrift å lykkes på nett.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tjenester.map((tjeneste, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
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

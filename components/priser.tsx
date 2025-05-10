import { Check } from "lucide-react"

export function Priser() {
  const pakker = [
    {
      title: "Basis",
      price: "9 900",
      features: [
        "Responsiv nettside (5 sider)",
        "Grunnleggende SEO-optimalisering",
        "Kontaktskjema",
        "Sosiale medier-integrasjon",
        "3 måneder gratis support",
      ],
      popular: false,
      cta: "Velg Basis",
    },
    {
      title: "Business",
      price: "19 900",
      features: [
        "Responsiv nettside (10 sider)",
        "Avansert SEO-optimalisering",
        "Kontaktskjema med automatisering",
        "Sosiale medier-integrasjon",
        "Google Analytics oppsett",
        "Innholdsstrategi",
        "6 måneder gratis support",
      ],
      popular: true,
      cta: "Velg Business",
    },
    {
      title: "Premium",
      price: "29 900",
      features: [
        "Responsiv nettside (ubegrenset sider)",
        "Komplett SEO-pakke",
        "E-handel funksjonalitet",
        "Tilpasset design",
        "Innholdsproduksjon",
        "Månedlig vedlikehold",
        "Prioritert support (12 måneder)",
      ],
      popular: false,
      cta: "Velg Premium",
    },
  ]

  return (
    <section id="priser" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-800">Våre Priser</h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Transparente priser uten skjulte kostnader. Velg pakken som passer best for din bedrift.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pakker.map((pakke, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl ${
                pakke.popular ? "ring-2 ring-primary relative" : ""
              }`}
            >
              {pakke.popular && (
                <div className="bg-primary text-white text-center py-1 text-sm font-medium">Mest Populær</div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{pakke.title}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800">{pakke.price}</span>
                  <span className="text-gray-600"> NOK</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pakke.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#kontakt"
                  className={`block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                    pakke.popular
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  {pakke.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Trenger du en skreddersydd løsning?{" "}
            <a href="#kontakt" className="text-primary font-medium">
              Kontakt oss
            </a>{" "}
            for et personlig tilbud.
          </p>
        </div>
      </div>
    </section>
  )
}

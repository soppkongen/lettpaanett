"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqItems: FAQItem[] = [
    {
      question: "Hvor lang tid tar det å få nettsiden?",
      answer:
        "For nyetablerte bedrifter lager vi nettsiden på 2 arbeidsdager etter at vi har fått det vi trenger fra deg. For større nettsider avtaler vi en tidsplan som passer for deg.",
    },
    {
      question: "Hva trenger dere fra meg for å komme i gang?",
      answer:
        "Vi trenger bare det grunnleggende: firmanavn, logo, kontaktinfo, noen bilder og litt tekst om hva du driver med. Har du ikke alt dette klart? Ingen problem – vi kan hjelpe med det også.",
    },
    {
      question: "Kan jeg endre nettsiden selv etterpå?",
      answer:
        "Ja, du får et enkelt system der du kan bytte bilder, endre tekst og legge til nye ting selv. Vi viser deg hvordan det fungerer. Er det større ting du vil endre, hjelper vi deg gjerne med det.",
    },
    {
      question: "Hva er inkludert i prisen?",
      answer:
        "Du får en komplett nettside som fungerer på både mobil og PC, kontaktskjema så kundene kan nå deg, og grunnleggende søkemotoroptimalisering så folk finner deg på Google. Vi ordner også med webhotell og domenenavn i den perioden som er inkludert i pakken du velger.",
    },
    {
      question: "Hva skjer etter at support-perioden er over?",
      answer:
        "Da kan du velge om du vil fortsette med support eller bare ha det grunnleggende. Du kan fortsette å bruke nettsiden uansett. Vi tvinger deg ikke til å kjøpe noe du ikke trenger.",
    },
    {
      question: "Hjelper dere med å komme høyt opp på Google?",
      answer:
        "Ja, alle nettsidene våre bygges slik at Google liker dem. Vi fikser titler, beskrivelser og bilder så de er optimalisert for søk. Vil du ha ekstra hjelp til å komme høyere opp i søkeresultatene, har vi tilleggspakker for det også.",
    },
    {
      question: "Kan dere fikse e-post med mitt eget domene?",
      answer:
        "Ja, vi kan sette opp e-postadresser med ditt firmanavn (som navn@dittfirma.no). Det gir et mer profesjonelt inntrykk enn å bruke gmail eller hotmail. Vi hjelper deg med å sette det opp og viser deg hvordan du bruker det.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-800">Vanlige spørsmål</h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Her finner du svar på det folk lurer mest på. Ikke funnet svaret? Bare ta kontakt, så hjelper vi deg.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white transition-all duration-200 hover:shadow-md"
              >
                <button
                  className="flex justify-between items-center w-full p-5 text-left"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-medium text-gray-800">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                  aria-hidden={openIndex !== index}
                >
                  <div className="p-5 pt-0 border-t border-gray-100">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Lurer du på noe annet?</p>
            <a href="#kontakt" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
              Ta kontakt for en uforpliktende prat
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
      </div>
    </section>
  )
}

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Kjøpsbetingelser - Lett på Nett",
  description: "Våre kjøpsbetingelser og vilkår for kjøp av nettsider og digitale tjenester.",
}

export default function Kjopsbetingelser() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Kjøpsbetingelser</h1>

            <div className="prose prose-lg max-w-none">
              <h2>1. Generelt</h2>
              <p>
                Disse kjøpsbetingelsene gjelder for alle kjøp av tjenester fra Lett på Nett, org.nr. 835381242 (heretter
                kalt "Leverandøren"). Ved å bestille tjenester fra Leverandøren aksepterer kunden disse
                kjøpsbetingelsene.
              </p>

              <h2>2. Tjenestebeskrivelse</h2>
              <p>
                Leverandøren tilbyr utvikling av nettsider og relaterte digitale tjenester. Spesifikasjonene for den
                enkelte tjeneste fremgår av tilbudet som er gitt til kunden. Leverandøren forbeholder seg retten til å
                gjøre mindre endringer i tjenestene som ikke påvirker funksjonaliteten vesentlig.
              </p>

              <h2>3. Bestilling og avtaleinngåelse</h2>
              <p>
                Avtale om kjøp av tjenester anses inngått når kunden har akseptert tilbudet fra Leverandøren skriftlig
                (e-post aksepteres som skriftlig bekreftelse) og eventuell forskuddsbetaling er mottatt. Leverandøren
                vil bekrefte bestillingen per e-post.
              </p>

              <h2>4. Priser og betaling</h2>
              <p>
                Alle priser er oppgitt i norske kroner (NOK) og inkluderer merverdiavgift (MVA). Betaling skjer i
                henhold til betalingsbetingelsene angitt i tilbudet. Ved forsinket betaling påløper forsinkelsesrente i
                henhold til forsinkelsesrenteloven.
              </p>

              <h2>5. Leveringstid</h2>
              <p>
                Leveringstiden fremgår av tilbudet. Leverandøren vil tilstrebe å overholde angitt leveringstid, men
                mindre forsinkelser kan forekomme. Ved vesentlige forsinkelser vil kunden bli informert.
              </p>

              <h2>6. Kundens medvirkning</h2>
              <p>
                Kunden plikter å gi Leverandøren nødvendig informasjon, materiell og tilbakemeldinger for at
                Leverandøren skal kunne levere tjenestene. Forsinkelser som skyldes manglende medvirkning fra kunden kan
                medføre utsatt leveringstid.
              </p>

              <h2>7. Angrerett</h2>
              <p>
                For forbrukere gjelder 14 dagers angrerett i henhold til angrerettloven. Angrerettskjema sendes sammen
                med bekreftelse på bestillingen. Angrerett gjelder ikke for tjenester der leveringen er påbegynt med
                kundens samtykke før angrefristen er utløpt.
              </p>

              <h2>8. Reklamasjon og mangler</h2>
              <p>
                Kunden må undersøke tjenestene ved levering og reklamere på eventuelle mangler innen rimelig tid.
                Reklamasjon må skje skriftlig. Leverandøren har rett til å utbedre eventuelle mangler før andre
                misligholdsbeføyelser kan gjøres gjeldende.
              </p>

              <h2>9. Ansvarsbegrensning</h2>
              <p>
                Leverandørens ansvar er begrenset til kontraktssummen. Leverandøren er ikke ansvarlig for indirekte tap
                eller følgeskader, herunder tapt fortjeneste.
              </p>

              <h2>10. Immaterielle rettigheter</h2>
              <p>
                Leverandøren beholder opphavsretten og andre immaterielle rettigheter til materiell som er utviklet av
                Leverandøren. Kunden får en ikke-eksklusiv bruksrett til det leverte materialet.
              </p>

              <h2>11. Personvern</h2>
              <p>
                Leverandøren behandler personopplysninger i henhold til gjeldende personvernlovgivning. Se vår{" "}
                <Link href="/personvern" className="text-primary hover:underline">
                  personvernerklæring
                </Link>{" "}
                for mer informasjon.
              </p>

              <h2>12. Lovvalg og verneting</h2>
              <p>
                Avtalen er underlagt norsk rett. Tvister skal søkes løst ved forhandlinger. Hvis forhandlinger ikke
                fører frem, skal tvisten avgjøres ved de ordinære domstoler med Kristiansand tingrett som verneting.
              </p>

              <h2>13. Endringer</h2>
              <p>
                Leverandøren forbeholder seg retten til å endre disse kjøpsbetingelsene. Endringer vil ikke ha
                tilbakevirkende kraft for allerede inngåtte avtaler.
              </p>

              <p className="mt-8">
                <strong>Sist oppdatert:</strong> 11. mai 2025
              </p>
            </div>

            <div className="mt-12">
              <Link
                href="/"
                className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-6 rounded-lg transition-all"
              >
                Tilbake til forsiden
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

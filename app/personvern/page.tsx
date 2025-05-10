import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Personvernerklæring - Lett på Nett",
  description: "Informasjon om hvordan vi behandler dine personopplysninger.",
}

export default function Personvern() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Personvernerklæring</h1>

            <div className="prose prose-lg max-w-none">
              <h2>1. Innledning</h2>
              <p>
                Denne personvernerklæringen gjelder for Lett på Nett, org.nr. 835381242 (heretter kalt "vi", "oss" eller
                "vår"). Vi er behandlingsansvarlig for personopplysninger som samles inn via vår nettside og i
                forbindelse med våre tjenester.
              </p>

              <h2>2. Hvilke personopplysninger vi behandler</h2>
              <p>Vi kan samle inn og behandle følgende personopplysninger:</p>
              <ul>
                <li>Kontaktinformasjon: Navn, e-postadresse, telefonnummer, bedriftsnavn</li>
                <li>Teknisk informasjon: IP-adresse, nettlesertype, besøkstid, sidevisninger</li>
                <li>Kommunikasjon: Innhold i e-poster og skjemaer du sender oss</li>
                <li>Betalingsinformasjon: Fakturainformasjon (ikke kortdetaljer)</li>
              </ul>

              <h2>3. Formål med behandlingen</h2>
              <p>Vi behandler personopplysninger for følgende formål:</p>
              <ul>
                <li>Levere og forbedre våre tjenester</li>
                <li>Kommunisere med deg om våre tjenester</li>
                <li>Sende deg relevant informasjon og markedsføring (med ditt samtykke)</li>
                <li>Administrere kundeforhold og fakturering</li>
                <li>Overholde lovpålagte forpliktelser</li>
                <li>Analysere og forbedre brukeropplevelsen på vår nettside</li>
              </ul>

              <h2>4. Rettslig grunnlag for behandlingen</h2>
              <p>Vi behandler personopplysninger basert på følgende rettslige grunnlag:</p>
              <ul>
                <li>Oppfyllelse av avtale med deg</li>
                <li>Rettslige forpliktelser vi er underlagt</li>
                <li>Vår berettigede interesse i å drive vår virksomhet</li>
                <li>Ditt samtykke (der dette er innhentet)</li>
              </ul>

              <h2>5. Lagring og sletting</h2>
              <p>
                Vi lagrer personopplysninger så lenge det er nødvendig for formålet de ble samlet inn for, eller så
                lenge vi er pålagt å lagre dem i henhold til lov. Kontaktinformasjon for kunder lagres så lenge
                kundeforholdet består og deretter i inntil 5 år av regnskapsmessige hensyn.
              </p>

              <h2>6. Deling av personopplysninger</h2>
              <p>Vi kan dele personopplysninger med:</p>
              <ul>
                <li>Leverandører som hjelper oss med å levere våre tjenester (databehandlere)</li>
                <li>Offentlige myndigheter når vi er pålagt dette ved lov</li>
              </ul>
              <p>
                Vi inngår databehandleravtaler med alle leverandører som behandler personopplysninger på våre vegne, og
                sikrer at overføring til tredjeland skjer i samsvar med personvernlovgivningen.
              </p>

              <h2>7. Informasjonskapsler (cookies)</h2>
              <p>
                Vi bruker informasjonskapsler på vår nettside for å forbedre brukeropplevelsen og analysere trafikk. Du
                kan lese mer om hvordan vi bruker informasjonskapsler i vår{" "}
                <Link href="/cookies" className="text-primary hover:underline">
                  cookie-policy
                </Link>
                .
              </p>

              <h2>8. Dine rettigheter</h2>
              <p>Du har følgende rettigheter knyttet til dine personopplysninger:</p>
              <ul>
                <li>Rett til innsyn i hvilke personopplysninger vi har om deg</li>
                <li>Rett til å korrigere uriktige personopplysninger</li>
                <li>Rett til å be om sletting av personopplysninger</li>
                <li>Rett til å be om begrensning av behandlingen</li>
                <li>Rett til dataportabilitet</li>
                <li>Rett til å protestere mot behandling basert på berettiget interesse</li>
                <li>Rett til å trekke tilbake samtykke</li>
              </ul>
              <p>
                For å utøve dine rettigheter, kontakt oss på{" "}
                <a href="mailto:personvern@lettpaanett.no" className="text-primary hover:underline">
                  personvern@lettpaanett.no
                </a>
                .
              </p>

              <h2>9. Klagerett</h2>
              <p>
                Hvis du mener at vår behandling av personopplysninger ikke er i samsvar med personvernlovgivningen, har
                du rett til å klage til Datatilsynet. Vi oppfordrer deg imidlertid til først å kontakte oss, slik at vi
                kan forsøke å løse saken.
              </p>

              <h2>10. Endringer i personvernerklæringen</h2>
              <p>
                Vi kan oppdatere denne personvernerklæringen fra tid til annen. Ved vesentlige endringer vil vi
                informere om dette på vår nettside eller via e-post.
              </p>

              <h2>11. Kontaktinformasjon</h2>
              <p>
                Hvis du har spørsmål om vår behandling av personopplysninger, kan du kontakte oss på:
                <br />
                <br />
                Lett på Nett
                <br />
                Storgata 1, 0155 Oslo
                <br />
                E-post:{" "}
                <a href="mailto:personvern@lettpaanett.no" className="text-primary hover:underline">
                  personvern@lettpaanett.no
                </a>
                <br />
                Telefon: +47 123 45 678
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

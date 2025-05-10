import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Cookie Policy - Lett på Nett",
  description: "Informasjon om hvordan vi bruker informasjonskapsler (cookies) på vår nettside.",
}

export default function Cookies() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Cookie Policy</h1>

            <div className="prose prose-lg max-w-none">
              <h2>1. Hva er informasjonskapsler (cookies)?</h2>
              <p>
                Informasjonskapsler (cookies) er små tekstfiler som lagres på din enhet (datamaskin, mobiltelefon eller
                nettbrett) når du besøker en nettside. Disse filene gjør det mulig for nettsiden å huske dine handlinger
                og preferanser over tid.
              </p>

              <h2>2. Hvilke typer informasjonskapsler vi bruker</h2>
              <p>Vi bruker følgende typer informasjonskapsler på vår nettside:</p>

              <h3>Nødvendige informasjonskapsler</h3>
              <p>
                Disse er essensielle for at nettsiden skal fungere korrekt. De aktiveres som svar på dine handlinger på
                nettsiden, som å fylle ut skjemaer. Du kan stille inn nettleseren din til å blokkere disse
                informasjonskapslene, men da vil deler av nettsiden kanskje ikke fungere.
              </p>

              <h3>Preferanseinformasjonskapsler</h3>
              <p>
                Disse gjør det mulig for nettsiden å huske valg du har gjort og tilby forbedret, mer personlig
                funksjonalitet. De kan for eksempel huske ditt språkvalg eller region.
              </p>

              <h3>Statistikk- og analyseinformasjonskapsler</h3>
              <p>
                Disse hjelper oss å forstå hvordan besøkende bruker vår nettside ved å samle og rapportere informasjon
                anonymt. Vi bruker Google Analytics for å analysere bruken av vår nettside.
              </p>

              <h3>Markedsføringsinformasjonskapsler</h3>
              <p>
                Disse brukes til å spore besøkende på tvers av nettsider. Hensikten er å vise annonser som er relevante
                og engasjerende for den enkelte bruker.
              </p>

              <h2>3. Hvordan vi bruker informasjonskapsler</h2>
              <p>Vi bruker informasjonskapsler for å:</p>
              <ul>
                <li>Sikre at nettsiden fungerer som den skal</li>
                <li>Forbedre brukeropplevelsen</li>
                <li>Analysere hvordan nettsiden brukes for å forbedre den</li>
                <li>Huske dine preferanser</li>
                <li>Tilpasse innhold og markedsføring</li>
              </ul>

              <h2>4. Tredjepartsinformasjonskapsler</h2>
              <p>
                Noen informasjonskapsler settes av tredjepartstjenester som vises på våre sider. Vi bruker tjenester fra
                følgende tredjeparter som kan sette informasjonskapsler:
              </p>
              <ul>
                <li>Google Analytics (analyse av nettstedstrafikk)</li>
                <li>Google Ads (markedsføring)</li>
                <li>Facebook (sosiale medier og markedsføring)</li>
              </ul>

              <h2>5. Administrere informasjonskapsler</h2>
              <p>
                Du kan kontrollere og/eller slette informasjonskapsler etter eget ønske. Du kan slette alle
                informasjonskapsler som allerede er på din enhet, og du kan stille inn de fleste nettlesere til å hindre
                at de plasseres. Hvis du gjør dette, må du kanskje justere noen preferanser manuelt hver gang du besøker
                en nettside, og noen tjenester og funksjoner vil kanskje ikke fungere.
              </p>
              <p>
                Du kan finne informasjon om hvordan du administrerer informasjonskapsler i din nettleser på følgende
                lenker:
              </p>
              <ul>
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Microsoft Edge
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Safari
                  </a>
                </li>
              </ul>

              <h2>6. Endringer i cookie policy</h2>
              <p>
                Vi kan oppdatere denne cookie policy fra tid til annen. Når vi gjør det, vil vi revidere datoen for
                "sist oppdatert" nederst på denne siden.
              </p>

              <h2>7. Kontakt oss</h2>
              <p>
                Hvis du har spørsmål om vår bruk av informasjonskapsler, kan du kontakte oss på:
                <br />
                <a href="mailto:kontakt@lettpaanett.no" className="text-primary hover:underline">
                  kontakt@lettpaanett.no
                </a>
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

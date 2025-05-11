import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Blogg - Lett på Nett | Nettside-tips og digitale råd",
  description: "Les våre artikler om nettsider, SEO og digital markedsføring. Få tips og råd for å lykkes på nett.",
  keywords: "blogg, nettside, seo, digital markedsføring, nettside-tips, webdesign",
}

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  image: string
  slug: string
}

export default function BloggPage() {
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Nettside uten stress: Derfor bør du droppe «gjør-det-selv»-løsningene",
      excerpt:
        "Stadig flere bedrifter forstår hvor viktig det er å ha en profesjonell og attraktiv nettside. Men betyr det at du må bruke tid og energi på kompliserte «gjør-det-selv»-verktøy?",
      date: "11. mai 2025",
      image: "/moderne-kontor-norsk-design.png",
      slug: "nettside-uten-stress-dropp-gjor-det-selv",
    },
    {
      id: "2",
      title: "5 grunner til at bedriften din trenger en profesjonell nettside",
      excerpt:
        "I dagens digitale verden er en profesjonell nettside avgjørende for enhver bedrift. Vi ser på de viktigste grunnene til at du bør investere i en god nettside.",
      date: "5. mai 2025",
      image: "/norwegian-fjord-landscape.png",
      slug: "5-grunner-til-profesjonell-nettside",
    },
    {
      id: "3",
      title: "Slik får du flere kunder gjennom nettsiden din",
      excerpt:
        "En nettside skal ikke bare se bra ut – den skal også generere kunder. Les våre tips for hvordan du kan optimalisere nettsiden for å tiltrekke flere potensielle kunder.",
      date: "28. april 2025",
      image: "/eiendomsmegler.png",
      slug: "slik-far-du-flere-kunder-gjennom-nettsiden",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero-seksjon */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Blogg</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Tips, råd og innsikt om nettsider, digital markedsføring og hvordan du kan lykkes på nett.
            </p>
          </div>
        </div>
      </section>

      {/* Blogginnlegg */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-12">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 relative h-64 md:h-auto">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <div className="md:w-2/3 p-6 md:p-8">
                      <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                      <h2 className="text-2xl font-bold mb-3 text-gray-800">
                        <Link href={`/blogg/${post.slug}`} className="hover:text-primary transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <Link
                        href={`/blogg/${post.slug}`}
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                      >
                        Les mer
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Klar for en nettside uten stress?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Vi tar oss av alt – du trenger ikke løfte en finger. Få en profesjonell nettside som hjelper bedriften din
              å vokse.
            </p>
            <Link
              href="/#kontakt"
              className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-all"
            >
              Kontakt oss i dag
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

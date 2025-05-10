import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Lett på Nett</h3>
            <p className="text-gray-400 mb-4">
              Vi skaper moderne, brukervennlige nettsider som hjelper din bedrift å vokse i det digitale landskapet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Tjenester</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#tjenester" className="text-gray-400 hover:text-white transition-colors">
                  Nettside Utvikling
                </Link>
              </li>
              <li>
                <Link href="#tjenester" className="text-gray-400 hover:text-white transition-colors">
                  Responsivt Design
                </Link>
              </li>
              <li>
                <Link href="#tjenester" className="text-gray-400 hover:text-white transition-colors">
                  SEO Optimalisering
                </Link>
              </li>
              <li>
                <Link href="#tjenester" className="text-gray-400 hover:text-white transition-colors">
                  Vedlikehold & Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Lenker</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#om-oss" className="text-gray-400 hover:text-white transition-colors">
                  Om Oss
                </Link>
              </li>
              <li>
                <Link href="#portefolje" className="text-gray-400 hover:text-white transition-colors">
                  Designstiler
                </Link>
              </li>
              <li>
                <Link href="#priser" className="text-gray-400 hover:text-white transition-colors">
                  Priser
                </Link>
              </li>
              <li>
                <Link href="#kontakt" className="text-gray-400 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt Oss</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                <span className="text-gray-400">Storgata 1, 0155 Oslo, Norge</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2 shrink-0" />
                <span className="text-gray-400">+47 123 45 678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2 shrink-0" />
                <span className="text-gray-400">kontakt@lettpaanett.no</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm mt-8 mb-4">
          lettpaanett.no er eid og drevet av Svendsen Events, orgnr 835381242
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Lett på Nett. Alle rettigheter reservert.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Personvern
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Vilkår
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

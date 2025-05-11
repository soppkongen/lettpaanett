"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Lett på Nett
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#om-oss" className="text-gray-700 hover:text-primary font-medium">
              Om Oss
            </Link>
            <Link href="#tjenester" className="text-gray-700 hover:text-primary font-medium">
              Tjenester
            </Link>
            <Link href="#portefolje" className="text-gray-700 hover:text-primary font-medium">
              Portefølje
            </Link>
            <Link href="#priser" className="text-gray-700 hover:text-primary font-medium">
              Priser
            </Link>
            <Link href="/blogg" className="text-gray-700 hover:text-primary font-medium">
              Blogg
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-primary font-medium">
              FAQ
            </Link>
            <Link
              href="#kontakt"
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg font-medium transition-all"
            >
              Kontakt Oss
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 pb-6">
            <div className="flex flex-col space-y-4">
              <Link
                href="#om-oss"
                className="text-gray-700 hover:text-primary font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Om Oss
              </Link>
              <Link
                href="#tjenester"
                className="text-gray-700 hover:text-primary font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tjenester
              </Link>
              <Link
                href="#portefolje"
                className="text-gray-700 hover:text-primary font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Portefølje
              </Link>
              <Link
                href="#priser"
                className="text-gray-700 hover:text-primary font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Priser
              </Link>
              <Link
                href="/blogg"
                className="text-gray-700 hover:text-primary font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogg
              </Link>
              <Link
                href="#faq"
                className="text-gray-700 hover:text-primary font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="#kontakt"
                className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg font-medium mx-4 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt Oss
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

"use client"

import { useEffect } from "react"
import Script from "next/script"

export function StripeButton() {
  useEffect(() => {
    // Dette sikrer at Stripe-knappen blir riktig initialisert
    // etter at komponenten er montert
    return () => {
      // Cleanup hvis nødvendig
    }
  }, [])

  return (
    <>
      <Script src="https://js.stripe.com/v3/buy-button.js" strategy="afterInteractive" />
      <div className="stripe-button-container">
        <stripe-buy-button
          buy-button-id="buy_btn_1RNJdhGbfuLCgITAmV1cAO1W"
          publishable-key="pk_live_51RNJFMGbfuLCgITALxPXYohRSNEOOSID6otJapysNkeXwtEArUcCuFe4CNNIELkuCDoGHA1WUnfy2Vgm8eQYfJ9s00g6WoleNh"
        ></stripe-buy-button>
      </div>
    </>
  )
}

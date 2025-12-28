"use client";

import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    // Sjekk localStorage på klienten
    const storedConsent = localStorage.getItem("cookie-consent");
    console.log("Cookie consent status:", storedConsent);
    
    if (!storedConsent) {
      // Ingen samtykke lagret - vis banner
      console.log("No consent found, showing banner");
      setShowBanner(true);
    } else if (storedConsent === "accepted") {
      setHasConsented(true);
    }
  }, []);

  const handleAccept = () => {
    console.log("User accepted cookies");
    localStorage.setItem("cookie-consent", "accepted");
    setHasConsented(true);
    setShowBanner(false);
    
    // Oppdater Google consent
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
        analytics_storage: "granted",
      });
    }
  };

  const handleDecline = () => {
    console.log("User declined cookies");
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  return (
    <>
      {/* Google Tag - alltid lastet med default consent */}
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Sett default consent basert på lagret verdi
            const consent = localStorage.getItem('cookie-consent');
            if (consent === 'accepted') {
              gtag('consent', 'default', {
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'analytics_storage': 'granted'
              });
            } else {
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied'
              });
            }
          `,
        }}
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-L95E16GW2Y"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L95E16GW2Y', { anonymize_ip: true });
          `,
        }}
      />

      {/* Cookie Banner */}
      {showBanner && (
        <div
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6 animate-slide-up"
          style={{
            animation: "slideUp 0.4s ease-out forwards",
          }}
        >
          <style jsx>{`
            @keyframes slideUp {
              from {
                transform: translateY(100%);
                opacity: 0;
              }
              to {
                transform: translateY(0);
                opacity: 1;
              }
            }
          `}</style>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-[#1a1a1a] border border-[#333] rounded-2xl p-6 shadow-2xl">
              {/* Close button */}
              <button
                onClick={handleDecline}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                aria-label="Lukk"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 pr-8 md:pr-0">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Vi bruker informasjonskapsler 🍪
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Vi bruker informasjonskapsler for å analysere trafikk og forbedre 
                    brukeropplevelsen. Ved å klikke &quot;Godta&quot; samtykker du til vår bruk 
                    av analyseverktøy.{" "}
                    <Link 
                      href="/personvern" 
                      className="text-orange-400 hover:underline"
                    >
                      Les mer i vår personvernerklæring
                    </Link>
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 flex-shrink-0">
                  <button
                    onClick={handleDecline}
                    className="px-5 py-2.5 text-sm font-medium text-white rounded-full border border-gray-600 hover:border-gray-400 hover:bg-gray-800 transition-all duration-200"
                  >
                    Avslå
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-5 py-2.5 text-sm font-medium text-white rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200"
                  >
                    Godta alle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// TypeScript declarations for gtag
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

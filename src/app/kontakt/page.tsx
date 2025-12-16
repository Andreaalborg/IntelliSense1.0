"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageSquare, Calendar } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "E-post",
    value: "andreaalborg@intellisenseai.no",
    href: "mailto:andreaalborg@intellisenseai.no",
  },
  {
    icon: Phone,
    title: "Telefon",
    value: "+47 467 44 670",
    href: "tel:+4746744670",
  },
  {
    icon: MapPin,
    title: "Lokasjon",
    value: "Norge",
    href: null,
  },
  {
    icon: Clock,
    title: "Responstid",
    value: "Innen 24 timer",
    href: null,
  },
];

export default function Kontakt() {
  useEffect(() => {
    // Load GoHighLevel form script
    const script = document.createElement("script");
    script.src = "https://link.intellisenseai.no/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://link.intellisenseai.no/js/form_embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--primary)] opacity-[0.05] blur-[120px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-sm font-medium text-[var(--primary)] uppercase tracking-wider mb-4">
              Kontakt Oss
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              La oss snakke om{" "}
              <span className="gradient-text-warm">din vekst</span>
            </h1>
            <p className="text-xl text-[var(--foreground-muted)] max-w-3xl mx-auto leading-relaxed">
              Klar for å ta bedriften din til neste nivå? Send oss en melding 
              så tar vi kontakt innen 24 timer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-bold mb-8">Kontaktinformasjon</h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 border border-[var(--primary)]/20 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-[var(--primary)]" />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--foreground-muted)] mb-1">{info.title}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-[var(--foreground)] font-medium hover:text-[var(--primary)] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[var(--foreground)] font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Info Cards */}
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/20">
                  <Calendar className="w-8 h-8 text-[var(--primary)] mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Gratis konsultasjon</h3>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Vi tilbyr en uforpliktende samtale for å diskutere dine behov.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)]">
                  <MessageSquare className="w-8 h-8 text-[var(--accent)] mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Rask respons</h3>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Vi svarer på alle henvendelser innen 24 timer på hverdager.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form - GoHighLevel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-[var(--background-secondary)] rounded-2xl border border-[var(--border)] p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-2">Send oss en melding</h2>
                <p className="text-[var(--foreground-muted)] mb-8">
                  Fyll ut skjemaet under, så tar vi kontakt så snart som mulig.
                </p>

                {/* GoHighLevel Form */}
                <div className="relative w-full rounded-xl overflow-hidden">
                  <iframe
                    src="https://link.intellisenseai.no/widget/form/X1M9Oy5SUKTpPFl7Y49Z"
                    style={{
                      width: "100%",
                      height: "550px",
                      border: "none",
                      borderRadius: "8px",
                    }}
                    id="inline-X1M9Oy5SUKTpPFl7Y49Z"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Kontakt Oss Intellisense 2025"
                    data-height="493"
                    data-layout-iframe-id="inline-X1M9Oy5SUKTpPFl7Y49Z"
                    data-form-id="X1M9Oy5SUKTpPFl7Y49Z"
                    title="Kontakt Oss Intellisense 2025"
                  />
                </div>

                <p className="text-sm text-[var(--foreground-muted)] mt-6 text-center">
                  Ved å sende inn dette skjemaet godtar du våre{" "}
                  <a href="/vilkar" className="text-[var(--primary)] hover:underline">vilkår</a>
                  {" "}og{" "}
                  <a href="/personvern" className="text-[var(--primary)] hover:underline">personvernerklæring</a>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

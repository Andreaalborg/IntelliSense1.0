"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import { LogoArrows } from "@/components/Logo";

const footerLinks = {
  tjenester: [
    { href: "/tjenester#nettside", label: "Nettside" },
    { href: "/tjenester#seo", label: "SEO Optimalisering" },
    { href: "/tjenester#markedsforing", label: "Markedsføring" },
    { href: "/tjenester#strategi", label: "Digital Strategi" },
  ],
  selskap: [
    { href: "/om-oss", label: "Om Oss" },
    { href: "/priser", label: "Priser" },
    { href: "/faq", label: "FAQ" },
    { href: "/kontakt", label: "Kontakt" },
  ],
  ressurser: [
    { href: "/personvern", label: "Personvern" },
    { href: "/vilkar", label: "Vilkår" },
  ],
};

const socialLinks = [
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[var(--background-secondary)] border-t border-[var(--border)]">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <LogoArrows variant="dark" size="md" />
            </Link>
            <p className="text-[var(--foreground-muted)] max-w-sm mb-6 leading-relaxed">
              Vi hjelper bedrifter med å vokse gjennom skreddersydde digitale løsninger. 
              Fra strategi til implementering – vi er din partner for digital suksess.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:andreaalborg@intellisenseai.no" className="flex items-center gap-3 text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors">
                <Mail className="w-4 h-4" />
                <span>andreaalborg@intellisenseai.no</span>
              </a>
              <a href="tel:+4746744670" className="flex items-center gap-3 text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors">
                <Phone className="w-4 h-4" />
                <span>+47 467 44 670</span>
              </a>
              <div className="flex items-center gap-3 text-[var(--foreground-muted)]">
                <MapPin className="w-4 h-4" />
                <span>Norge</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--foreground)] mb-4">
              Tjenester
            </h3>
            <ul className="space-y-3">
              {footerLinks.tjenester.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--foreground)] mb-4">
              Selskap
            </h3>
            <ul className="space-y-3">
              {footerLinks.selskap.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--foreground)] mb-4">
              Juridisk
            </h3>
            <ul className="space-y-3">
              {footerLinks.ressurser.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--foreground-muted)]">
            © {new Date().getFullYear()} IntelliSense. Alle rettigheter reservert.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] hover:border-[var(--primary)] flex items-center justify-center text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

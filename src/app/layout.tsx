import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "IntelliSense | Digitale Løsninger for Bedriftsvekst",
  description: "Vi hjelper bedrifter med å vokse gjennom skreddersydde digitale strategier, konverteringsoptimaliserte nettsider og effektiv markedsføring.",
  keywords: ["digital markedsføring", "nettside", "SEO", "bedriftsvekst", "Norge"],
  authors: [{ name: "IntelliSense" }],
  openGraph: {
    title: "IntelliSense | Digitale Løsninger for Bedriftsvekst",
    description: "Vi hjelper bedrifter med å vokse gjennom skreddersydde digitale strategier.",
    url: "https://intellisenseai.no",
    siteName: "IntelliSense",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className="dark">
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.boincaservicios.com"),
  title: "Boinca - Reparación de Motores Eléctricos y Bombas Centrífugas",
  description:
    "Soluciones especializadas en la reparación de motores eléctricos, así como bombas centrífugas, con más de 20 años de experiencia en la industria petrolera.",
  keywords:
    "Boinca, Boinca servicios, reparación de motores eléctricos, bombas centrífugas, mantenimiento de motores, alineacion de motores, balanceo dinamico, bombas verticales, bobinado, rebabitado, pruebas de vibracion, PDVSA, industria petrolera",
  authors: [{ name: "Reinaldo Marcano" }],
  robots: "index, follow",

  openGraph: {
    title: "Boinca - Reparación de Motores Eléctricos y Bombas Centrífugas",
    description:
      "Boinca, especialistas en mantenimiento y reparación de motores eléctricos y bombas centrífugas para la industria petrolera, con más de 10 años de experiencia.",
    url: "https://www.boincaservicios.com",
    siteName: "Boinca Servicios",
    images: [
      {
        url: "/assets/boincaxpdvsa.jpeg",
        width: 1200,
        height: 630,
        alt: "Boinca - Reparación de Motores Eléctricos y Bombas Centrífugas",
      },
    ],
    locale: "es_ES",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Boinca - Reparación de Motores Eléctricos y Bombas Centrífugas",
    description:
      "Soluciones especializadas para motores eléctricos y bombas centrífugas en la industria petrolera, ofrecidas por Boinca.",
    images: ["/assets/boincaxpdvsa.jpeg"],
  },
 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link
          rel="shortcut icon"
          href="/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="canonical"
          href="https://www.boincaservicios.com"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}


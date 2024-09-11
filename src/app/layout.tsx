import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Boinca Servicios",
  description: "Reparacion de motores electricos, bombas centrifugadas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="./ico.png" type="image/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

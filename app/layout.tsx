import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-jost",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Chirag Shah",
  description:
    "Product Manager building in health, property, and insurance tech — where regulation, data, and real life collide.",
  openGraph: {
    title: "Chirag Shah",
    description:
      "Product Manager building in health, property, and insurance tech.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme')||'system';var d=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.setAttribute('data-theme',d?'dark':'light');}catch(e){}})();` }} />
      </head>
      <body className={`${cormorant.variable} ${jost.variable}`}>
        {children}
      </body>
    </html>
  );
}

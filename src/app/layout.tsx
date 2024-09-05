import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: "300",
});

export const metadata: Metadata = {
  title: "Mambo",
  description: "Experience seamless workflow",
  generator: "Next.js",
  applicationName: "Mambo",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "Typescript"],
  authors: [
    { name: "Philip", url: "https://philip-andrew-portfolio.netlify.app" },
  ],
  creator: "Philip Andrew",
  publisher: "Philip Andrew",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mambo-website.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    images: "/og-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${lato.variable}`}>{children}</body>
    </html>
  );
}

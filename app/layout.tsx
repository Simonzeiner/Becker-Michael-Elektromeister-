import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteTitle =
  "Michael Becker Elektromeisterbetrieb | Kaffeevollautomaten Reparatur Mainz";
const siteDescription =
  "Meisterbetrieb in Mainz: Reparatur, Wartung und Reinigung von Kaffeevollautomaten seit 1991. Termin telefonisch vereinbaren.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.saeco-becker.de"),
  title: {
    default: siteTitle,
    template: "%s | Michael Becker Elektromeisterbetrieb",
  },
  description: siteDescription,
  keywords: [
    "Kaffeevollautomat Reparatur Mainz",
    "Saeco Reparatur Mainz",
    "Jura Reparatur Mainz",
    "DeLonghi Reparatur Mainz",
    "Michael Becker Elektromeisterbetrieb",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://www.saeco-becker.de",
    siteName: "Michael Becker Elektromeisterbetrieb",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/coffee-beans-workbench.jpg",
        width: 1500,
        height: 1000,
        alt: "Kaffeebohnen und Kaffeezubehör als Symbol für Kaffeevollautomaten-Service",
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#25170f",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}

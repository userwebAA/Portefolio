import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Développeur",
  description: "Portfolio professionnel avec les dernières technologies",
};
export const metadata = {
  other: {
    "google-site-verification": "cu2Ms4j6kG7vyPnNmMf7vfLl3Y0r_lse8n2kBnHwQbk"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

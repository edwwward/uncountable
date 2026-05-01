import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Uncountable | R&D Data Platform",
  description: "Unify ELN, LIMS, PLM, and AI optimization into one cloud platform for R&D teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

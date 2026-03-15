import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahinsa & Buddhimanthi Homecoming",
  description:
    "A romantic and elegant homecoming invitation website for Buddhimanthi Bulathsinghala and Mahinsa Ranasinghe."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}

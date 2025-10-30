// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Roboto_Condensed, Quicksand } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Condensed({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const quicksand = Quicksand({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "bernadev",
  description: "My personal portfolio",
};

// Nota: el viewport va aparte
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${quicksand.className}`}>
        {children}
      </body>
    </html>
  );
}

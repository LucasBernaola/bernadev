import type { Metadata } from "next";
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
  viewport: "width=device-width, initial-scale=0.1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${quicksand.className}`}>
        {children}
      </body>
    </html>
  );
}

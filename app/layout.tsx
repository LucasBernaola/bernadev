import { Metadata } from "next";
import { Roboto_Condensed, Quicksand } from 'next/font/google';
import "./globals.css";

const roboto = Roboto_Condensed({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

const quicksand = Quicksand({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Tu Nombre",
  description: "Mi portafolio personal",
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

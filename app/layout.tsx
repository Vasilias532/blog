import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'

import "./globals.css";


export const metadata: Metadata = {
  title: "Reputable",
  description: "Generated by create next app",
};
const font = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="!scroll-smooth">
      <body className={font.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aziz Kerkeni",
  description: "Aziz Kerkeni portfolio – full-stack developer specialized in Next.js, NestJS, and MongoDB. Explore projects, skills, and modern web solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VEXX4J9MEZ"></script>
        {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-VEXX4J9MEZ');
          `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed top-18 z-150 ">
          <div className="bg-primary text-white text-lg font-bold px-4 py-4 shadow-lg hover:bg-primary/60 rounded-br-full rounded-tr-full ">
            Still in Development
          </div>
        </div>


        {children}
      </body>
    </html>
  );
}

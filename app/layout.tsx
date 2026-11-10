import type { Metadata } from "next";
import { Unbounded, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/context/lang";

const syne = Unbounded({
  variable: "--font-syne",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500"],
  display: "swap",
});

const interFont = Inter({
  variable: "--font-dm-sans",
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Serhii Lysak: Telegram Bot Developer",
  description: "Multi-account automation systems, AI-powered bots, Telegram Mini Apps. Python, FastAPI & Pyrogram.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jetbrainsMono.variable} ${interFont.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}

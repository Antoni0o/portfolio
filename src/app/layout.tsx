import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "../lib/utils";
import Navbar from "@/components/nav-bar";
import { ThemeProvider } from "@/components/theme-provider";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Antonio Dias",
  description: "Portfolio de Antonio Dias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="sticky top-0 z-50">
            <Navbar />
          </div>
          {children}
          <footer className="flex items-center justify-center border-t-2 mt-6 py-4 text-sm">
            Desenvolvido com ❤️ por <b className="mx-1">Antonio Dias</b> - 2024
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

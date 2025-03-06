import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { JetBrains_Mono } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const jetbraninsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-jetbrainsMono"
});

export const metadata: Metadata = {
  title: "Khine's Portfolio",
  description: "FullStack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbraninsMono.variable} antialiased`}
        suppressHydrationWarning
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}

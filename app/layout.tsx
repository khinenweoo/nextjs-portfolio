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
  title: "Portfolio | Khine Nwe Oo",
  description: "FullStack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Khine Nwe Oo - Software Developer</title>
        <meta name="keywords" content="frontend,react,vue,php,laravel,tech,creative developer,UI development,frontend engineer,backend engineer,developer portfolio,creative development,software,software developer,software engineer" />
        <meta name="category" content="technology"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbraninsMono.variable} antialiased`}
        suppressHydrationWarning
      >
          <ThemeProvider
            attribute="class"
          defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}

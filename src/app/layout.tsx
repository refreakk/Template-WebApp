import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Script from "next/script";
import Providers from "./providers/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebApp telegram template",
  description: "WebApp Telegram template for new projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover, minimum-scale=1.0, maximum-scale=1.0"
        />
        <meta name="color-scheme" content="light" />
        <meta name="format-detection" content="telephone=no"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="MobileOptimized" content="176"/>
        <meta name="HandheldFriendly" content="True"/>
        <meta name="robots" content="noindex,nofollow"/>
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

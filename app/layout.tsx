import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const saudiWeb = localFont({
  src: [
    {
      path: "../public/F/SaudiWeb-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/F/SaudiWeb-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "سليمان الحربي",
  description: "الموقع الشخصي لسليمان الحربي",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className="h-full antialiased scroll-smooth"
    >
      <body className={`${saudiWeb.className} min-h-full flex flex-col`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
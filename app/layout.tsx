// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Montserrat, Fira_Mono } from "next/font/google";
import "./globals.css";

// 引入字体
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const firaMono = Fira_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-fira-mono" });


export const metadata: Metadata = {
  title: "Cognint - 智识源点",
  description: "探索形而上之境，启迪智慧之光。",
  icons: {
    icon: '/cognint-logo.png', // 请确保您的 Logo 在 public 目录下
    shortcut: '/cognint-logo.png',
    apple: '/cognint-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${montserrat.variable} ${firaMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
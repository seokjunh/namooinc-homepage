import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "나무아이앤씨",
  description:
    "스마트 팩토리, 통합 방재 솔루션, 가스 통합 모니터링, 공장자동화 솔루션, 인터페이스 미들웨어, lloT, loT, 사물인터넷.",
  icons: {
    icon: "/images/namoo-icon.png",
  },
};

const nanoom = localFont({
  src: "./fonts/NanumSquareRoundR.ttf",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nanoom.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
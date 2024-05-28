import FlashSales from "@/components/FlashSales";
import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/NavBar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-Learnig ",
  description:
    "Online Learning Platform at your own pace with dedicated and industry expert tutors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='container w-full bg-secondary scroll-smooth'>
      <body>
        <header>
          <FlashSales />
          <NavBar/>
        </header>
        <main className='con tainer '>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

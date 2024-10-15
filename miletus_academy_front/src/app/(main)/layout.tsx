import type { Metadata } from "next";

import "../../style/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";


export const metadata: Metadata = {
  title: "Miletus",
  description: "online course",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa" suppressHydrationWarning>
      <body
        className={`relative scrollbar min-h-screen flex flex-col bg-white  mx-auto max-w-[1644px]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

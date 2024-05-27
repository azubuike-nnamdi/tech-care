import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Techcare",
    default: "Techcare",
  },
  description: "A medical portal",
  icons: [
    {
      rel: "icon",
      type: "image/svg",
      url: "./img/TestLogo.svg",
    },
    {
      rel: "apple",
      url: "./img/TestLogo.svg",
    },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-[#F6F7F8]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

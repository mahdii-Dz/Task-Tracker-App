import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Context from "@/AppContext/Context";

const robotoFont = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Task Tracker App",
  description: "Task tracker app built with Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoFont.className} antialiased`}>
        <Context>{children}</Context>
      </body>
    </html>
  );
}

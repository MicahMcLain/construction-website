import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import "./globals.css";
import "./theme-config.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex items-start justify-between bg-stone-200`}
      >
        <Sidebar />
        <main className="w-full h-full">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}

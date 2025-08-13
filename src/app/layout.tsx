import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Fredoka } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "../../context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "../../context/theme-context";

// const inter = Inter({ subsets: ["latin"] });
const fredoka = Fredoka({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sαмαятн",
  description: "About Sαмαятн",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        // cls="dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90"
        className={`${fredoka.className} bg-[#f1f1f1] text-gray-950 relative pt-30 sm:pt-25 overflow-x-hidden`}
        cz-shortcut-listen="true">
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 h-[50rem] w-[50rem] rounded-full sm:w-[50rem] right-[1rem] blur-[2rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-6rem] -z-10 h-[50rem] w-[50rem] rounded-full sm:w-[50rem] left-[1rem] blur-[2rem]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

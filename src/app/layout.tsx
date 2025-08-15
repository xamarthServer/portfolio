import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "../../context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "../../context/theme-context";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

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
    <html
      id="html"
      className="!scroll-smooth root"
      lang="en">
      <body
        // cls="dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 bg-[#f1f1f1]"
        id="body"
        className={`${fredoka.className} bg-[var(--xamarth)] text-gray-950 relative pt-30 sm:pt-25 overflow-x-hidden transition-all`}
        cz-shortcut-listen="true">
        <div className="">
          <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 h-[50rem] w-[50rem] rounded-full sm:w-[50rem] right-[1rem] blur-[2rem]"></div>
          <div className="bg-[#dbd7fb] absolute top-[-6rem] -z-10 h-[50rem] w-[50rem] rounded-full sm:w-[50rem] left-[1rem] blur-[2rem]"></div>
        </div>
        <Script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}`}
          crossOrigin="anonymous"></Script>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="bottom-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

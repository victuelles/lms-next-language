import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nunito } from "next/font/google";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import Script from "next/script";
import "./globals.css";
import ToastProvider from "@/components/providers/toaster-provider";
import { ConfettiProvider } from "@/components/providers/confetti-provider";

const font = Nunito({ subsets: ["latin"] });
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TalkFilipino App",
  description: "(c)Rom 2024",
};
const ga=process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      variables: { colorPrimary: "#000000" },
      elements: {
        formButtonPrimary:
          "bg-black border border-black border-solid hover:bg-white hover:text-black",
        socialButtonsBlockButton:
          "bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black",
        socialButtonsBlockButtonText: "font-semibold",
        formButtonReset:
          "bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black",
        membersPageInviteButton:
          "bg-black border border-black border-solid hover:bg-white hover:text-black",
        card: "bg-[#fafafa]",
      },
    }}
  >
    <html lang="en">
      <head>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}" `} strategy="afterInteractive"/>
        <Script id="google-analytics" strategy="afterInteractive">
          {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${ga}');
          `}
        </Script>
      </head>

      <body  className={`min-h-screen flex flex-col antialiased ${font.className}`}>

        <ConfettiProvider/>
        <ToastProvider/>
        {children}
      </body>
      
    </html>
    </ClerkProvider>

  );
}

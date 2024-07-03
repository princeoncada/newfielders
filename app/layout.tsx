import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
    title: "NewField STEM School of Davao",
    description: "NewField STEM School of Davao",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  // include all weights
  weight: ["400", "500", "600", "700"]
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  // include all weights
  weight: ["400", "500", "700"]
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
            <head>
              <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
            </head>
            <body>
              <Header /> 
              {children}
              <Footer />
            </body>
        </html>
    );
}

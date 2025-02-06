import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Provider from '../../provider'
import NavigationBar from "../../components/NavigationBar";
import { Toaster } from "react-hot-toast";


import Loading from "../../components/Loadings ";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationBar />
        <Provider>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          {children}
        </Provider>

      </body>
    </html>
  );
}

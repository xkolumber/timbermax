import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HydrationZustand from "./components/HydrationZustand";
import { AuthContextProvider } from "./auth/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Timbermax",
  description: "Timbermax",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body className={inter.className}>
        <AuthContextProvider>
          <HydrationZustand>
            <Navbar />
            {children}
            <Footer />
          </HydrationZustand>
        </AuthContextProvider>
      </body>
    </html>
  );
}

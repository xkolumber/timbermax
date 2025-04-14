import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import HydrationZustand from "./components/HydrationZustand";
import Navbar from "./components/Navbar";
import "./globals.css";
import Provider from "./hooks/providerQuery";
import ConfigureAmplifyClientSide from "./lib/awsAmplifyCognito";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
      <AppRouterCacheProvider>
        <body className={inter.className}>
          <ConfigureAmplifyClientSide />
          <Provider>
            <HydrationZustand>
              <Navbar />
              {children}
              <Footer />
            </HydrationZustand>
          </Provider>
        </body>
      </AppRouterCacheProvider>
    </html>
  );
}

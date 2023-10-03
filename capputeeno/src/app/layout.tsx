import { FilterContextProvider } from "@/contexts/filter-context";
import type { Metadata } from "next";
import { Saira } from "next/font/google";
import { Header } from "../components/header";
import "./globals.css";

const saira = Saira({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Capputeeno",
  description: "Capputeeno - Loja fictícia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <FilterContextProvider>
          <Header />
          {children}
        </FilterContextProvider>
      </body>
    </html>
  );
}

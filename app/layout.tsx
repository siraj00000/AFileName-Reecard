"use client";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
       

        {/* <link rel="shortcut icon" href="app/afilename_logo.svg" /> */}
      </Head>

      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </>
  );
}

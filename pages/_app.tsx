import { AppProps } from "next/app";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import RootLayout from "../app/layout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <>
        <ToastContainer position="top-center" />
        <Component />
      </>
    </RootLayout>
  );
}

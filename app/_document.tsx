import Document, { Html, Head, Main, NextScript } from "next/document";
import { Manrope, Karla, Inter } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
  display: 'swap',
});

export const metadata = {
  title: "AFILENAME",
  description: "AFILENAME",
};

class MyDocument extends Document {
  render() {
    return (
      <Html className={`${manrope.variable} ${karla.variable} ${inter.variable}`}>
        <Head>
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Karla:wght@300;400;500;600;700;800&family=Manrope:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          /> */}
          <body>
            <Main />
            <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}

export default MyDocument;

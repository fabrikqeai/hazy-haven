import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { ParallaxProvider } from "react-scroll-parallax"; // ✅ Import

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hazy Haven</title>
        <meta name="description" content="A tranquil escape surrounded by nature" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ParallaxProvider> {/* ✅ Wrap the app */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ParallaxProvider>
    </>
  );
}

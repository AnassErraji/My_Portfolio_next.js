import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import Pre from "@/components/Pre";
import ScrollToTop from "@/components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import ReduxProvider from "@/components/redux-provider";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Head>
        <title>Mehdi | Portfolio</title>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>
      <Pre load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <ReduxProvider>
          <Component {...pageProps} />
        </ReduxProvider>
        <Footer />
      </div>
    </>
  );
}

import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import styles from "../styles/scss/Layout.module.scss";
import About from "./About";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Alan Rodriguez - Designer/Developer/Maker</title>
        <meta
          name="description"
          content="My portfolio of work... well, at least the stuff worth showing."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header showAbout={showAbout} setShowAbout={setShowAbout} />
      <main className={styles.main}>{children}</main>
      <Footer />
      <About showAbout={showAbout} setShowAbout={setShowAbout} />
    </div>
  );
}

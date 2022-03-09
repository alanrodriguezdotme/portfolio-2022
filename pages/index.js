import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import ProjectCards from "../components/ProjectCards";
import styles from "../styles/css/Home.module.css";
import Script from "next/script";

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <ProjectCards />
      </Layout>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-118957712-3"
        strategy="afterInteractive"
      />
      <Script id="google-analtyics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-118957712-3');`}
      </Script>
    </div>
  );
}

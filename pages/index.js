import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import ProjectCards from "../components/ProjectCards";
import styles from "../styles/scss/Home.module.scss";
import Script from "next/script";

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <ProjectCards />
      </Layout>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-Z7YSVRTSH7`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z7YSVRTSH7', {
              page_path: window.location.pathname,
            });
          `}
      </Script>
    </div>
  );
}

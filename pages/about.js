import Head from "next/head";
import Header from "../components/Header";
import { aboutData } from "../constants/aboutData";
import Footer from "../components/Footer";
import styles from "../styles/scss/About.module.scss";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className={styles.about}>
      <Head>
        <title>Alan Rodriguez - About me</title>
        <meta name="description" content={aboutData.bio} />
      </Head>
      <Header interiorPage />
      <div className={styles.aboutWrapper}>
        <div className={styles.card}>
          <div className={styles.photo}>
            <Image
              src={require("../public/photo.jpg")}
              alt="photo of me"
              objectFit="cover"
            />
          </div>
          <div className={styles.info}>
            <div className={styles.details}>
              {aboutData.details.map((detail) => (
                <div className={styles.detail} key={detail.label}>
                  <label>{detail.label}</label>
                  <div>{detail.text}</div>
                </div>
              ))}
            </div>
            <div className={styles.bio}>
              <label>Bio</label>
              <div>{aboutData.bio}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

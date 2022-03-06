import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import ProjectCards from "../components/ProjectCards";
import styles from "../styles/css/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <ProjectCards />
      </Layout>
    </div>
  );
}

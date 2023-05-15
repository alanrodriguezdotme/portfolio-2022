import React from "react";
import styles from "../styles/scss/Footer.module.scss";
import Links from "./Links";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Links />
    </footer>
  );
}

import React from "react";
import styles from "../styles/scss/Header.module.scss";
import BackIcon from "../public/icons/arrow-left.svg";
import Tooltip from "./Tooltip";
import Link from "next/link";
import Links from "./Links";

export default function Header({ interiorPage, setShowAbout, showAbout }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.brandingWrapper}>
          {interiorPage ? (
            <Tooltip text="Go back">
              <Link passHref href="/">
                <div className={styles.interiorPageWrapper}>
                  <div className={styles.link}>
                    <a>
                      <BackIcon />
                    </a>
                  </div>
                  <div className={styles.brandingInteriorPage}>
                    <span className={styles.title}>Alan Rodriguez</span>
                    <span className={styles.subtitle}>
                      Designer / Developer / Maker
                    </span>
                  </div>
                </div>
              </Link>
            </Tooltip>
          ) : (
            <Tooltip text="Hi there! 👋🏽" yOffset={12}>
              <Link passHref href="/about">
                <div
                  className={styles.brandingHome}
                  // onClick={setShowAbout && (() => setShowAbout(!showAbout))}
                >
                  <span className={styles.title}>Alan Rodriguez</span>
                  <span className={styles.subtitle}>
                    Designer / Developer / Maker
                  </span>
                </div>
              </Link>
            </Tooltip>
          )}
        </div>
        <Links />
      </div>
    </header>
  );
}

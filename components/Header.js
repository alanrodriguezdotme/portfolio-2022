import React from "react";
import styles from "../styles/scss/Header.module.scss";
import LinkedInIcon from "../public/icons/linkedin.svg";
import CameraIcon from "../public/icons/camera-f.svg";
import DocumentIcon from "../public/icons/document-f.svg";
import GithubIcon from "../public/icons/github.svg";
import EnvelopeIcon from "../public/icons/envelope-f.svg";
import BackIcon from "../public/icons/arrow-left.svg";
import Tooltip from "./Tooltip";
import Link from "next/link";

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
              <div
                className={styles.brandingHome}
                onClick={setShowAbout && (() => setShowAbout(!showAbout))}
              >
                <span className={styles.title}>Alan Rodriguez</span>
                <span className={styles.subtitle}>
                  Designer / Developer / Maker
                </span>
              </div>
            </Tooltip>
          )}
        </div>
        <div className={styles.links}>
          <Tooltip text="info@alanrodriguez.me">
            <div className={styles.link}>
              <a
                href="mailto:info@alanrodriguez.me"
                rel="noreferrer"
                target="_blank"
              >
                <EnvelopeIcon />
              </a>
            </div>
          </Tooltip>
          <Tooltip text="My Github">
            <div className={styles.link}>
              <a
                href="https://github.com/alanrodriguezdotme"
                rel="noreferrer"
                target="_blank"
              >
                <GithubIcon />
              </a>
            </div>
          </Tooltip>
          <Tooltip text="My LinkedIn">
            <div className={styles.link}>
              <a
                href="https://www.linkedin.com/in/alanrodriguez/"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
            </div>
          </Tooltip>
          <Tooltip text="My photos">
            <div className={styles.link}>
              <a
                href="https://unsplash.com/@alan_rodriguez"
                rel="noreferrer"
                target="_blank"
              >
                <CameraIcon />
              </a>
            </div>
          </Tooltip>
          <Tooltip text="My Resume/CV">
            <div className={styles.link}>
              <a
                href="resume-alanrodriguez-2022.pdf"
                rel="noreferrer"
                target="_blank"
              >
                <DocumentIcon />
              </a>
            </div>
          </Tooltip>
        </div>
      </div>
    </header>
  );
}

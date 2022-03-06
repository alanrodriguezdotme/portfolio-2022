import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles/css/About.module.css";
import { aboutData } from "../constants/aboutData";
import Image from "next/image";

export default function About({ showAbout, setShowAbout }) {
  return (
    <AnimatePresence>
      {showAbout && (
        <div className={styles.about}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
          >
            <div
              className={styles.clickOutside}
              onClick={() => setShowAbout()}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
            }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.35 }}
          >
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
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

import React from "react";
import styles from "../styles/css/ProjectCard.module.css";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <div
        className={styles.projectCard}
        style={{ backgroundImage: `url('projects/${project.thumbnail}')` }}
      >
        <motion.div
          whileHover={{ opacity: 1, transition: { duration: 0.25 } }}
          className={styles.projectCardInfo}
        >
          <div className={styles.company}>
            <label>{project.company}</label>
          </div>
          <div className={styles.title}>
            <h2>{project.title}</h2>
          </div>
          <div className={styles.subtitle}>{project.subtitle}</div>
        </motion.div>
      </div>
    </motion.div>
  );
}

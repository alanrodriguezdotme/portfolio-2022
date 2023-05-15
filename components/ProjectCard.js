import React from "react";
import styles from "../styles/scss/ProjectCard.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <Link passHref href={`/projects/${project.id}`}>
      <a className={styles.projectCardAnchor}>
        <motion.div whileHover={{ scale: 1.05 }}>
          <div
            className={styles.projectCard}
            style={{
              backgroundImage: `url('projects/${project.id}/${project.thumbnail}')`,
            }}
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
      </a>
    </Link>
  );
}

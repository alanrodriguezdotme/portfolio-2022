import React from "react";
import styles from "../styles/scss/ProjectCards.module.scss";
import { projectsData } from "../constants/projectsData";
import ProjectCard from "./ProjectCard";

export default function ProjectCards() {
  return (
    <div className={styles.projectCards}>
      <div className={styles.projectCardsWrapper}>
        {projectsData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}

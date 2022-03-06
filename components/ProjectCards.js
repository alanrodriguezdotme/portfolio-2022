import React from "react";
import styles from "../styles/css/ProjectCards.module.css";
import { projectsData } from "../constants/projectsData";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

export default function ProjectCards() {
  return (
    <div className={styles.projectCards}>
      <div className={styles.projectCardsWrapper}>
        {projectsData.map((project) => (
          <Link passHref href={`/projects/${project.id}`} key={project.id}>
            <a>
              <ProjectCard project={project} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import _ from "lodash";
import { projectsData } from "../../constants/projectsData";
import styles from "../../styles/css/ProjectPage.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import About from "../../components/About";
import Tooltip from "../../components/Tooltip";
import Image from "next/image";
import ProjectCaseStudy from "./ProjectCaseStudy";

export const getStaticPaths = async () => {
  const paths = projectsData.map((project) => ({
    params: { id: project.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const project = _.find(projectsData, { id });
  return {
    props: { project },
  };
};

export default function ProjectPage({ project }) {
  const [showAbout, setShowAbout] = useState(false);
  // const [showGallery, setShowGallery] = useState(false);
  // const [galleryIndex, setGalleryIndex] = useState(0);

  return (
    <div>
      <Header showAbout={showAbout} setShowAbout={setShowAbout} interiorPage />
      <div className={styles.projectPage}>
        <div className={styles.projectPageHeader}>
          <div className={styles.title}>
            <h1>{project.title}</h1>
            <div>{project.subtitle}</div>
          </div>
          <div className={styles.details}>
            {project.company && (
              <div className={styles.detail}>
                <label>Company</label>
                <div>{project.company}</div>
              </div>
            )}
            <div className={styles.detail}>
              <label>Roles</label>
              <div>
                {project.roles.map((role, i) => {
                  return role + (i < project.roles.length - 1 ? ", " : "");
                })}
              </div>
            </div>
            {project.link && (
              <div className={styles.detail}>
                <label>Link</label>
                <br />
                <Tooltip text={project.link} yOffset={8}>
                  <a href={project.link}>
                    <div>View project</div>
                  </a>
                </Tooltip>
              </div>
            )}
          </div>
        </div>
        <div className={styles.projectPageContent}>
          <div className={styles.row}>
            <div className={styles.description}>{project.description}</div>
            <div className={styles.mainImage}>
              <Image
                src={require(`../../public/projects/${project.mainImage}`)}
                alt={project.mainImage}
              />
            </div>
          </div>

          {project.images && (
            <div className={styles.images}>
              {project.images.map((image, i) => (
                <div className={styles.thumbnail} key={`thumbnail-${i}`}>
                  <Image
                    src={require(`../../public/projects/${image}`)}
                    alt={image}
                    layout="responsive"
                    objectFit="scale-down"
                  />
                </div>
              ))}
            </div>
          )}
          {project.sections && <ProjectCaseStudy sections={project.sections} />}
        </div>
      </div>
      <Footer />
      <About showAbout={showAbout} setShowAbout={setShowAbout} />
    </div>
  );
}

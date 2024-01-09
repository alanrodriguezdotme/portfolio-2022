import React, { useState } from "react";
import _ from "lodash";
import Head from "next/head";
import { projectsData } from "../../constants/projectsData";
import styles from "../../styles/scss/ProjectPage.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import About from "../../components/About";
import Tooltip from "../../components/Tooltip";
import Image from "next/image";
import ProjectCaseStudy from "./ProjectCaseStudy";
import Script from "next/script";
import ImageView from "../../components/ImageView";

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
  const [showGallery, setShowGallery] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  function renderVideo({ url, width, height }) {
    return (
      <div>
        <iframe
          src={url}
          width={width}
          height={height}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Script src="https://player.vimeo.com/api/player.js" />
      </div>
    );
  }

  function renderMainImage(mainImage) {
    if (mainImage.endsWith("mp4")) {
      return <video src={mainImage} controls />;
    } else {
      return (
        <Image
          src={require(`../../public/projects/${project.id}/${mainImage}`)}
          alt={mainImage}
        />
      );
    }
  }

  function renderImage(projectId, image) {
    return (
      <Image
        src={require(`../../public/projects/${projectId}/${image}`)}
        alt={image}
        layout="responsive"
        objectFit="scale-down"
      />
    );
  }

  function handleImageClick(index) {
    setGalleryIndex(index);
    setShowGallery(true);
    document.getElementsByTagName("body")[0].classList.add("no-scroll");
  }

  function handleImageViewClose() {
    setShowGallery(false);
    document.getElementsByTagName("body")[0].classList.remove("no-scroll");
  }

  return (
    <div>
      <Head>
        <title>
          Alan Rodriguez - Designer/Developer/Maker - {project.title}
        </title>
        <meta name="description" content={project.description} />
      </Head>
      {showGallery && (
        <ImageView
          projectId={project.id}
          images={project.images}
          show={showGallery}
          setShow={setShowGallery}
          setClose={handleImageViewClose}
          index={galleryIndex}
        />
      )}
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
              {project.mainVideo && renderVideo(project.mainVideo)}
              {project.mainImage && renderMainImage(project.mainImage)}
            </div>
          </div>

          {project.images && project.images.length > 0 && (
            <div className={styles.images}>
              {project.images.map((image, i) => (
                <div
                  className={styles.thumbnail}
                  key={`thumbnail-${i}`}
                  onClick={() => handleImageClick(i)}
                >
                  {image.startsWith("https://")
                    ? renderVideo({ url: image, width: 400, height: 300 })
                    : renderImage(project.id, image)}
                </div>
              ))}
            </div>
          )}
          {project.sections && (
            <ProjectCaseStudy sections={project.sections} id={project.id} />
          )}
        </div>
      </div>
      <Footer />
      <About showAbout={showAbout} setShowAbout={setShowAbout} />
    </div>
  );
}

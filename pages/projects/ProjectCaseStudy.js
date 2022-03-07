import Image from "next/image";
import React from "react";
import styles from "../../styles/css/ProjectCaseStudy.module.css";

export default function ProjectCaseStudy({ sections }) {
  return (
    <div className={styles.section}>
      {sections?.map((section, s) => (
        <div className={styles.sectionWrapper} key={`section-${s}`}>
          <div className={styles.info}>
            <div className={styles.title}>
              <h2>{section.title}</h2>
            </div>
            {section.text && (
              <div className={styles.text}>
                {section?.text.map((txt, t) => (
                  <span
                    dangerouslySetInnerHTML={{ __html: txt }}
                    key={`txt-${s}-${t}`}
                  />
                ))}
              </div>
            )}
          </div>
          {section.images && (
            <div className={styles.images}>
              {section?.images.map((img, i) => (
                <div className={styles.image} key={`img-${s}-${i}`}>
                  <Image
                    src={require(`../../public/projects/${img}`)}
                    alt={img}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

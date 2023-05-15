import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles/scss/Gallery.module.scss";
import Image from "next/image";
import ArrowLeftIcon from "../public/icons/arrow-left.svg";
import ArrowRightIcon from "../public/icons/arrow-right.svg";

export default function Gallery({
  images,
  setShowGallery,
  showGallery,
  galleryIndex,
}) {
  const [imageIndex, setImageIndex] = useState(galleryIndex);

  useEffect(() => {
    setImageIndex(galleryIndex);
  }, [galleryIndex]);

  return (
    <AnimatePresence>
      {showGallery && (
        <div className={styles.gallery}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ originX: 0.5, originY: 0.5 }}
          >
            <div
              className={styles.clickOutside}
              onClick={() => setShowGallery()}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className={styles.imagesWrapper}
              style={{
                left: `${100 * imageIndex}vw`,
                width: `calc(100vw * ${images.length})`,
              }}
            >
              {images.map((img, i) => (
                <div className={styles.imageWrapper} key={`imageWrapper-${i}`}>
                  <div className={styles.buttonWrapper}>
                    {i > 0 && (
                      <div
                        className={styles.button}
                        onClick={() => setImageIndex(imageIndex - 1)}
                      >
                        <ArrowLeftIcon />
                      </div>
                    )}
                  </div>
                  <div className={styles.image}>
                    <Image
                      src={require(`../public/projects/${img}`)}
                      alt={img}
                      layout="fill"
                      objectFit="scale-down"
                    />
                  </div>
                  <div className={styles.buttonWrapper}>
                    {i + 1 < images.length && (
                      <div
                        className={styles.button}
                        onClick={() => setImageIndex(imageIndex + 1)}
                      >
                        <ArrowRightIcon />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

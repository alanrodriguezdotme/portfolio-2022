import styles from "../styles/scss/ImageGallery.module.scss";
import LeftArrow from "../public/icons/arrow-left-bold.svg";
import RightArrow from "../public/icons/arrow-right-bold.svg";
import Close from "../public/icons/x-bold.svg";
import { useState } from "react";
import Image from "next/image";

export default function ImageGallery({
  projectId,
  images,
  show,
  setClose,
  index = 0,
}) {
  const [imageIndex, setImageIndex] = useState(index);

  return (
    show && (
      <div className={styles.imageGallery}>
        <div className={styles.overlay} />
        <div className={styles.main}>
          <div className={styles.controls}>
            <div
              className={styles.button}
              onClick={() =>
                setImageIndex(
                  imageIndex === 0 ? images.length - 1 : imageIndex - 1
                )
              }
            >
              <LeftArrow />
            </div>
            <div className={styles.close} onClick={() => setClose()}>
              <Close />
            </div>
            <div
              className={styles.button}
              onClick={() =>
                setImageIndex(
                  imageIndex === images.length - 1 ? 0 : imageIndex + 1
                )
              }
            >
              <RightArrow />
            </div>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <Image
                src={`/projects/${projectId}/${images[imageIndex]}`}
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

import styles from "../styles/scss/ImageGallery.module.scss";
import LeftArrow from "../public/icons/arrow-left-bold.svg";
import RightArrow from "../public/icons/arrow-right-bold.svg";
import Close from "../public/icons/x-bold.svg";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ImageGallery({
  projectId,
  images,
  show,
  setClose,
  index = 0,
}) {
  const [imageIndex, setImageIndex] = useState(index);
  const [shouldClose, setShouldClose] = useState(false);

  useEffect(() => {
    console.log(imageIndex);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [imageIndex]);

  function handleKeyDown(e) {
    switch (e.key) {
      case "ArrowLeft":
        handleDirectionClick("left");
        break;
      case "ArrowRight":
        handleDirectionClick("right");
        break;
      case "Escape":
        handleClose();
        break;
      default:
        break;
    }
  }

  function handleClose() {
    setShouldClose(true);
    setTimeout(() => {
      setShouldClose(false);
      setClose();
    }, 300);
  }

  function handleDirectionClick(direction) {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
    document.getElementById("imageContainer").scrollTop = 0;
  }

  return (
    show && (
      <div className={styles.imageGallery}>
        <div
          className={styles.overlay + (shouldClose ? ` ${styles.close}` : "")}
        />
        <div className={styles.main + (shouldClose ? ` ${styles.close}` : "")}>
          <div className={styles.controls}>
            <div
              className={styles.button}
              onClick={() => handleDirectionClick("left")}
            >
              <LeftArrow />
            </div>
            <div className={styles.button} onClick={() => handleClose()}>
              <Close />
            </div>
            <div
              className={styles.button}
              onClick={() => handleDirectionClick("right")}
            >
              <RightArrow />
            </div>
          </div>
          <div className={styles.imageContainer} id="imageContainer">
            <div className={styles.image}>
              <Image
                src={require(`../public/projects/${projectId}/${images[imageIndex]}`)}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

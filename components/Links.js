import styles from "../styles/scss/Links.module.scss";
import Tooltip from "./Tooltip";
import LinkedInIcon from "../public/icons/linkedin.svg";
import CameraIcon from "../public/icons/camera-f.svg";
import DocumentIcon from "../public/icons/document-f.svg";
import GithubIcon from "../public/icons/github.svg";
import EnvelopeIcon from "../public/icons/envelope-f.svg";

export default function Links() {
  return (
    <div className={styles.links}>
      <Tooltip text="info@alanrodriguez.me" yOffset={-70}>
        <div className={styles.link}>
          <a
            href="mailto:info@alanrodriguez.me"
            rel="noreferrer"
            target="_blank"
          >
            <EnvelopeIcon />
          </a>
        </div>
      </Tooltip>
      <Tooltip text="My Github" yOffset={-70}>
        <div className={styles.link}>
          <a
            href="https://github.com/alanrodriguezdotme"
            rel="noreferrer"
            target="_blank"
          >
            <GithubIcon />
          </a>
        </div>
      </Tooltip>
      <Tooltip text="My LinkedIn" yOffset={-70}>
        <div className={styles.link}>
          <a
            href="https://www.linkedin.com/in/alanrodriguez/"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
        </div>
      </Tooltip>
      <Tooltip text="My photos" yOffset={-70}>
        <div className={styles.link}>
          <a
            href="https://unsplash.com/@alan_rodriguez"
            rel="noreferrer"
            target="_blank"
          >
            <CameraIcon />
          </a>
        </div>
      </Tooltip>
      <Tooltip text="My Resume/CV" yOffset={-70}>
        <div className={styles.link}>
          <a
            href="alan-rodriguez-resume-2023.pdf"
            rel="noreferrer"
            target="_blank"
          >
            <DocumentIcon />
          </a>
        </div>
      </Tooltip>
    </div>
  );
}
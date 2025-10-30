import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./ProfileCard.module.css";
import { Typewriter } from "react-simple-typewriter";

const ProfileCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          width={600}
          height={600}
          src="/images/PicCv.jpg"
          alt="Profile Picture"
          className={styles.image}
          priority
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.h1}>
          I’m Lucas, <br />
          <span style={{ color: "#0077b5" }}>
            <Typewriter
              words={["Web Developer"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={150}
              deleteSpeed={150}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <div className={styles.icons}>
          <a
            href="https://www.linkedin.com/in/lucas-bernaola/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={styles.icon} />
          </a>
          <a
            href="https://github.com/LucasBernaola"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={styles.icon} />
          </a>
          <a href="/CVen.pdf" download className={styles.downloadButton}>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./ProfileCard.module.css";
import { Typewriter } from "react-simple-typewriter";

const ProfileCard = () => {
  return (
    <div className={styles.card}>
      <Image
        width={350}
        height={350}
        src="/Images/PicCv.jpg"
        alt="Profile Picture"
        loading="lazy"
        className={styles.image}
      />
      <h1 className={styles.h1}>
        I’m Lucas, <br></br>
        <span style={{ color: "#0077b5" }}>
          <Typewriter
            words={["Frontend Developer"]}
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
        <a href="/cv.pdf" download className={styles.downloadButton}>
          Download CV
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;

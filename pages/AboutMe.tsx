import React from "react";
import Image from "next/image";
import "../app/globals.css";
import styles from "./AboutMe.module.css";

const AboutMe: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <Image 
          src="/images/about.jpg" 
          alt="About Me background" 
          layout="fill" 
          objectFit="cover" 
          quality={75} 
          priority 
          className={styles.image}
        />
        <div className={styles.card}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.description}>
            Passionate about translating ideas into impactful digital experiences, I bring a unique blend of creativity and technical expertise to each project.
          </p>
        </div>
      </section>

      <section className={styles.body}>
        <h1 className={styles.sectionTitle}>Experience</h1>
      </section>

      <section className={styles.other}>
        <h1 className={styles.sectionTitle}>Additional Information</h1>
      </section>
    </div>
  );
};

export default AboutMe;

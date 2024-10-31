"use client";

import React from "react";
import Image from "next/legacy/image";
import styles from "./AboutMe.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Timeline from "@/components/TimeLine/VerticalTimeline";

const AboutMe: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <Navbar />
        <div className={styles.card}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.description}>
            Passionate about translating ideas into impactful digital
            experiences...
          </p>
        </div>
      </section>

      <section className={styles.experienceContainer}>
      <Image
        src="/images/about.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className={styles.backgroundImage}
      />
      <div className={styles.content}>
        <h1 className={styles.sectionTitle}>Experience</h1>
        <Timeline />
      </div>
    </section>

      <section className={`${styles.sectionContainer} ${styles.other}`}>
        <h1 className={styles.sectionTitle}>Additional Information</h1>
      </section>
    </div>
  );
};

export default AboutMe;

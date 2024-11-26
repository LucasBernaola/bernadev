import React from "react";
import styles from "@/components/AboutMe/AboutMe.module.css";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className={styles.container} id="AboutMe">
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>About Me</h1>
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.p}>
          Learning something not only requires innate abilities; it is essential
          to be consistent and practice repeatedly until mastering it and
          reaching the goals set. Since I decided to change direction and become
          a developer, I discovered a passion for this craft, and the ability to
          bring ideas to the screen is extraordinary. That’s why I dedicate all
          my time to achieving this goal.
          <br />
          <br />
          <br />
          As a self-taught learner, I strive to
          find information from the best possible sources. I understood that
          acquiring the necessary knowledge takes time and that there are no
          shortcuts to gaining valuable experience. I also appreciate the worth
          of knowledge and the importance of advice from experienced
          professionals.
          <br />
          <br />
          <br />
          My focus as a developer is on the frontend, although my
          first professional experience was in backend, which gives me a more
          comprehensive perspective when approaching projects or tasks. I also
          plan to explore software development and artificial intelligence using
          Python.
        </p>
        <Image
          className={styles.img}
          src={"/images/persistense.jpg"}
          alt="pic of persistense"
          width={450}
          height={500}
          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default AboutMe;

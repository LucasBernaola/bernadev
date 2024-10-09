"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.section}>
        <img
          src="/Images/PicCv.jpg"
          alt="picprofile"
          className={styles.image}
        />
        <div className={styles.textContainer}>
          <h1 className={styles.h1}>
            Hi I’m Lucas,{" "}
            <span style={{ color: "#0808f0" }}>
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
          <p className={styles.p}>
            I am passionate about development and putting ideas on the screen
          </p>
        </div>
        
    </section>
  );
};

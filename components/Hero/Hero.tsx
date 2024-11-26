"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import ProfileCard from "../ui/ProfileCard/ProfileCard";

export const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={styles.section}
    >
      <ProfileCard />
      <div className={styles.textContainer}>
        <p className={styles.p}>
        I am passionate about bringing ideas to the screen by innovating through development.
        </p>
      </div>
    </motion.section>
  );
};

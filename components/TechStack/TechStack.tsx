"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./TechStack.module.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

interface Technology {
  name: string;
  icon: string;
  description: string;
  link: string;
}

const technologies: Technology[] = [
  {
    name: "JavaScript",
    icon: "/images/javascript.svg",
    description: "JavaScript is a versatile language used to create interactive and dynamic content on the web.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: "/images/typescript.svg",
    description: "TypeScript is a superset of JavaScript that adds static typing.",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: "/images/react.svg",
    description: "React is a JavaScript library for building user interfaces.",
    link: "https://reactjs.org/",
  },
  {
    name: "Next.js",
    icon: "/images/nextjs.svg",
    description: "Next.js is a React framework for production-grade web applications.",
    link: "https://nextjs.org/",
  },
  {
    name: "Vue.js",
    icon: "/images/vuejs.svg",
    description: "Vue.js is a progressive framework for building user interfaces.",
    link: "https://vuejs.org/",
  },
  {
    name: "Python",
    icon: "/images/python.svg",
    description: "Python is a popular programming language known for its readability and efficiency.",
    link: "https://www.python.org/",
  },
  {
    name: "Django",
    icon: "/images/django.svg",
    description: "Django is a high-level Python web framework that encourages rapid development.",
    link: "https://www.djangoproject.com/",
  },
];

const TechStack = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  const [activeTech, setActiveTech] = useState<Technology>(technologies[0]);
  const [fade, setFade] = useState<boolean>(false);

  const handleTechClick = (tech: Technology) => {
    if (tech.name !== activeTech.name) {
      setFade(true);
      setTimeout(() => {
        setActiveTech(tech);
        setFade(false);
      }, 500);
    }
  };

  return (
    <motion.div
      ref={ref}
      className={styles.container}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={controls}
    >
      <h2 className={styles.title}>My Tech Stack</h2>
      <div className={styles.iconContainer}>
        {technologies.map((tech, index) => (
          <button
            key={index}
            className={`${styles.iconButton} ${activeTech.name === tech.name ? styles.active : ""}`}
            onClick={() => handleTechClick(tech)}
            aria-label={tech.name}
          >
            <Image
              src={tech.icon}
              alt={`${tech.name} icon`}
              width={60}
              height={60}
              className={styles.icon}
            />
          </button>
        ))}
      </div>
      <div className={`${styles.content} ${fade ? styles.fadeOut : ""}`}>
        <h3 className={styles.techName}>{activeTech.name}</h3>
        <p className={styles.techDescription}>{activeTech.description}</p>
        <a
          href={activeTech.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.learnMore}
        >
          Learn More
        </a>
      </div>
    </motion.div>
  );
};

export default TechStack;


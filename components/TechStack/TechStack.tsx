"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./TechStack.module.css";

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
    description:
      "JavaScript is a versatile, high-level programming language essential for building interactive and dynamic web content. It enables everything from responsive elements on a webpage to sophisticated web applications, making it the backbone of modern web development.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: "/images/typescript.svg",
    description:
      "TypeScript is a statically typed superset of JavaScript that enhances code quality and maintainability. By introducing static types, TypeScript helps catch errors at compile time, making large-scale applications more reliable and easier to refactor.",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: "/images/react.svg",
    description:
      "A powerful JavaScript library for building efficient and dynamic user interfaces. It utilizes a component-based architecture and a virtual DOM, allowing for fast rendering and a modular development approach, ideal for complex web applications.",
    link: "https://reactjs.org/",
  },
  {
    name: "Next.js",
    icon: "/images/nextjs.svg",
    description:
      "Next.js is a production-ready React framework that simplifies building server-rendered applications. It offers features like static site generation, API routes, and server-side rendering, making it a powerful tool for developing performant and SEO-friendly applications.",
    link: "https://nextjs.org/",
  },
  {
    name: "Vue.js",
    icon: "/images/vuejs.svg",
    description:
      "Vue.js is a progressive JavaScript framework designed for building user interfaces with ease. Its approachable design and reactive data-binding make it a popular choice for developers looking for a balance between simplicity and performance in front-end development.",
    link: "https://vuejs.org/",
  },
  {
    name: "Python",
    icon: "/images/python.svg",
    description:
      "Python is a high-level, general-purpose programming language known for its readability and efficiency. Its clear syntax and vast library ecosystem make it an ideal choice for everything from web development to data science and artificial intelligence.",
    link: "https://www.python.org/",
  },
  {
    name: "Django",
    icon: "/images/django.svg",
    description:
      "Django is a high-level Python web framework that promotes rapid development and clean, pragmatic design. It includes an array of built-in features like an ORM, admin panel, and security measures, making it a popular choice for building robust and scalable web applications.",
    link: "https://www.djangoproject.com/",
  },
];

const TechStack = () => {
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
    <section className={`${styles.container} ${styles.gradientBackground}`} id="TechStack">
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>My Tech Stack</h2>
      </div>
      <div className={styles.iconContainer}>
        {technologies.map((tech, index) => (
          <button
            key={index}
            className={`${styles.iconButton} ${
              activeTech.name === tech.name ? styles.active : ""
            }`}
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
    </section>
  );
};

export default TechStack;

'use client';

import React from 'react';
import Image from 'next/image';
import styles from './MyProjects.module.css';

const projects = [
  {
    title: "HooBank",
    description: "A banking website with modern design and functionality.",
    image: "/images/p1.png",
    url: "https://bank-landingpage-three.vercel.app/",
  },
  {
    title: "Restaurant",
    description: "A restaurant landing page showcasing delicious dishes.",
    image: "/images/p2.png",
    url: "https://restaurant-landingpage-pi.vercel.app/",
  },
  {
    title: "GPT-3",
    description: "A modern landing page of innovation technology.",
    image: "/images/p3.png",
    url: "https://chat-gpt-3-landing-page-oz8h5z1ii-lucas-projects-1b3e6bc3.vercel.app/",
  },
  {
    title: "To-Do App",
    description: "A simple to-do app to manage your tasks effectively.",
    image: "/images/p4.png",
    url: "https://to-do-app-kohl-iota.vercel.app/",
  },
];

const MyProjects: React.FC = () => {
  return (
    <div className={styles.projectsSection}>
      <h2 className={styles.title}>MyProjects</h2>
      <div className={styles.cardContainer}>
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} ${index % 2 === 0 ? styles.left : styles.right}`}
          >
            <div className={styles.imageContainer}>
              <Image
                src={project.image}
                alt={`${project.title} thumbnail`}
                width={400} // Ajusta el ancho según sea necesario
                height={200} // Ajusta la altura según sea necesario
                className={styles.projectImage}
              />
            </div>
            <div className={styles.textContainer}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;





import React from "react";
import Image from "next/image";
import styles from "./MyProjects.module.css";

const projects = [
  {
    title: "Medical Care Plus",
    description: "Web platform for modern medical management.",
    image: "/images/p5.png",
    url: "https://medical-care-frontend.vercel.app/",
  },
  {
    title: "HooBank",
    description: "A banking website with modern design and functionality.",
    image: "/images/p1.png",
    url: "https://bank-landingpage-three.vercel.app/",
  },
  {
    title: "Restaurant",
    description: "Restaurant landing page showcasing delicious dishes.",
    image: "/images/p2.png",
    url: "https://restaurant-landingpage-pi.vercel.app/",
  },
  {
    title: "GPT-3",
    description: "Modern landing page of innovative technology.",
    image: "/images/p3.png",
    url: "https://chat-gpt-3-landing-page-oz8h5z1ii-lucas-projects-1b3e6bc3.vercel.app/",
  },
];

const MyProjects: React.FC = () => {
  return (
    <section className={styles.projectsSection} id="MyProjects">
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Projects</h2>
      </div>
      <div className={styles.cardContainer}>
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <div className={styles.imageContainer}>
              <Image
                src={project.image}
                alt={`Thumbnail of ${project.title}`}
                width={400}
                height={200}
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
    </section>
  );
};

export default MyProjects;

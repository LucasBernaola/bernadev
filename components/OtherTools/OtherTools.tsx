import React, { useEffect } from "react";
import styles from "./OtherTools.module.css";
import Image from "next/image";

const tools = [
  { name: "HTML5", icon: "/images/html5.svg" },
  { name: "CSS3", icon: "/images/css3.svg" },
  { name: "Bootstrap", icon: "/images/bootstrap.svg" },
  { name: "Tailwindcss", icon: "/images/tailwindcss.svg" },
  { name: "Vitejs", icon: "/images/vite.svg" },
  { name: "Vuetify", icon: "/images/vuetify.svg" },
  { name: "Django Rest Framework", icon: "/images/djangorest.svg" },
  { name: "Docker", icon: "/images/docker.svg" },
  { name: "PostgreSQL", icon: "/images/postgresql.svg" },
  { name: "SQLite", icon: "/images/sqlite.svg" },
  { name: "Dbeaver", icon: "/images/dbeaver.svg" },
  { name: "Firebase", icon: "/images/firebase.svg" },
  { name: "Git", icon: "/images/git.svg" },
  { name: "Github", icon: "/images/github.svg" },
];

const OtherTools: React.FC = () => {
  useEffect(() => {
    const icons = document.querySelectorAll(`.${styles.icon}`);
    icons.forEach((icon) => {
      const randomDelay = Math.random() * 2;
      (icon as HTMLElement).style.animationDelay = `${randomDelay}s`;
    });
  }, []);

  return (
    <section className={styles.toolsSection} id="OtherTools">
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>My Toolbox</h2>
      </div>
      <div className={styles.toolsContainer}>
        {tools.map((tool, index) => (
          <div key={index} className={styles.tool}>
            <Image
              src={tool.icon}
              alt={`${tool.name} icon`}
              className={styles.icon}
              width={60}
              height={60}
            />
            <p className={styles.toolName}>{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherTools;

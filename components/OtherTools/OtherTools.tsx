import React, { useEffect } from 'react';
import styles from './OtherTools.module.css';

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
    <div className={styles.toolsSection}>
      <h1 className={styles.title}>My Toolbox</h1>
      <div className={styles.toolsContainer}>
        {tools.map((tool, index) => (
          <div key={index} className={styles.tool}>
            <img src={tool.icon} alt={`${tool.name} icon`} className={styles.icon} />
            <p className={styles.toolName}>{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherTools;



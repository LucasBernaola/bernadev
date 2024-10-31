import { useEffect, useState } from "react";
import styles from "./TimeLine.module.css";

interface Experience {
  name: string;
  description: string;
  image: string;
}

const experiences: Experience[] = [
  {
    name: "Web Developer Trainee / E-learning March - Sept 2023",
    description: "I worked on redesigning the landing proyect in WordPress before migrating to a full development in Django and React. I learned to use Django and Python with guidance from the team's Tech Leader, developing skills in both backend and frontend. Additionally, I became familiar with the Scrum methodology and Kanban board, enhancing my communication and problem-solving abilities.",
    image: "",
  },
  { name: "NO COUNTRY / March - April 2024",
    description: "Simulation of Team Work with the No Country group, where we developed an e-commerce platform. The objective of this practical training is to enhance learning and practice of soft skills, work methodologies, team communication, and group management.",
    image: "/images/nocountry.jpg",
   },
  { name: "Ademass Developer Training / April - May 2024",
    description: " Simulation of work with the Ademass Developer Training team, a platform that provides tutoring support to students. In this case, we formed a workgroup where we developed a web application. The goal of this practical training was to create a web app using the technologies known to the group while also developing soft skills such as team communication and group management.",
    image: "/images/ademass.jpg",
  }
];

const Timeline: React.FC = () => {
  useEffect(() => {
    const items = document.querySelectorAll(`.${styles.child}`);
    const handleScroll = () => {
      const scrollPosition = document.documentElement.scrollTop;
      items.forEach((element, index) => {
        const elem = element as HTMLElement;
        const delay = index * 2000;
        if (elem.offsetTop - window.innerHeight / 2 < scrollPosition) {
          setTimeout(() => {
            elem.classList.remove(styles.hide);
            elem.classList.add(styles.show);
          }, delay);
        } else {
          setTimeout(() => {
            elem.classList.remove(styles.show);
            elem.classList.add(styles.hide);
          }, delay);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.timeline}>
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`${styles.child} ${
            index % 2 === 0 ? styles.even : styles.odd
          } ${styles.hide}`}
        >
          <div className={styles.content}>
            <h4>{experience.name}</h4>
            <p>{experience.description}</p>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

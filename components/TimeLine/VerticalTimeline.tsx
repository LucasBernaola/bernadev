import styles from "./TimeLine.module.css";

interface Experience {
  name: string;
  description: string;
}

const experiences: Experience[] = [
  {
    name: "Web Developer Trainee / E-learning March - Sept 2023",
    description:
      "I worked on redesigning the landing project in WordPress before migrating to a full development in Django and React. I learned to use Django with guidance from the team's Tech Leader, developing skills in both backend and frontend. Additionally, I became familiar with the Scrum methodology and Kanban board, enhancing my communication and problem-solving abilities.",
  },
  {
    name: "NO COUNTRY - Work Simulation Practices/ March - April 2024",
    description:
      "Simulation of Team Work with the No Country group, where we developed an e-commerce platform. The objective of this practical training is to enhance learning and practice of soft skills, work methodologies, team communication, and group management.",
  },
  {
    name: "Ademass Developer Training / April - May 2024",
    description:
      "Simulation of work with the Ademass Developer Training team, a platform that provides tutoring support to students. In this case, we formed a workgroup where we developed a web application. The goal of this practical training was to create a web app using the technologies known to the group while also developing soft skills such as team communication and group management.",
  },
];

const Timeline: React.FC = () => {
  return (
    <section className={styles.timelineContainer} id="Career">
      <h2 className={styles.title}>Career</h2>
      <div className={styles.cardsContainer}>
        {experiences.map((experience, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{experience.name}</h3>
              <p className={styles.cardDescription}>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;

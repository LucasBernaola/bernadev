import Image from "next/image";
import styles from "./ProjectCard.module.css";

export type ProjectCardData = {
  title: string;
  badge: string;
  status: string;
  description: string;
  image: string;
  stack: readonly string[];
  url?: string;
};

type ProjectCardProps = {
  project: ProjectCardData;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const cardContent = (
    <>
      <Image
        src={project.image}
        alt={`${project.title} project preview`}
        width={460}
        height={280}
        className={styles.image}
      />
      <div className={styles.body}>
        <div className={styles.meta}>
          <span>{project.badge}</span>
          <strong>{project.status}</strong>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.stack}>
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </>
  );

  if (project.url) {
    return (
      <a className={styles.card} href={project.url} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  return <article className={styles.card}>{cardContent}</article>;
}

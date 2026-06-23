"use client";

import Image from "next/image";
import { type ReactNode, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiNextdotjs, SiReact, SiTypescript, SiVuedotjs } from "react-icons/si";
import { content, type Locale } from "./content";
import styles from "./page.module.css";

const stackIcons: Record<string, ReactNode> = {
  React: <SiReact />,
  "Next.js": <SiNextdotjs />,
  TypeScript: <SiTypescript />,
  "Vue 3": <SiVuedotjs />,
};

const stackClassNames: Record<string, string> = {
  React: styles.reactChip,
  "Next.js": styles.nextChip,
  TypeScript: styles.typescriptChip,
  "Vue 3": styles.vueChip,
};

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const [activeScreenshot, setActiveScreenshot] = useState<
    (typeof content)[Locale]["featured"]["screenshots"][number] | null
  >(null);
  const copy = content[locale];

  const toggleLocale = () => {
    setLocale((current) => (current === "en" ? "es" : "en"));
  };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a href="#top" className={styles.brand} aria-label="Lucas Bernaola home">
          <span>LB</span>
          Lucas Bernaola
        </a>
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#projects">{copy.nav.projects}</a>
          <a href="#skills">{copy.nav.skills}</a>
          <a href="#experience">{copy.nav.experience}</a>
          <a href="#contact">{copy.nav.contact}</a>
        </nav>
        <button className={styles.languageButton} onClick={toggleLocale}>
          <span>{copy.language.label}</span>
          {copy.language.switchTo}
        </button>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{copy.hero.eyebrow}</p>
          <h1>{copy.hero.title}</h1>
          <p className={styles.heroIntro}>{copy.hero.intro}</p>
          <div className={styles.stackPills} aria-label="Core frontend stack">
            {copy.hero.stack.map((item) => (
              <span className={stackClassNames[item]} key={item}>
                {stackIcons[item]}
                {item}
              </span>
            ))}
          </div>
          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryAction}>
              {copy.hero.primaryCta}
            </a>
            <a href="/CVen.pdf" className={styles.secondaryAction} download>
              {copy.hero.secondaryCta}
            </a>
            <a
              href="https://github.com/LucasBernaola"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconAction}
              aria-label="GitHub"
            >
              <FaGithub />
              {copy.hero.githubCta}
            </a>
          </div>
        </div>
      </section>

      <section className={styles.featuredSection} id="projects">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>{copy.featured.eyebrow}</p>
          <h2>{copy.featured.title}</h2>
          <p>{copy.featured.description}</p>
        </div>

        <div className={styles.featuredGrid}>
          <div className={styles.caseStudyGrid}>
            <article className={styles.casePanel}>
              <span>{copy.featured.problemLabel}</span>
              <p>{copy.featured.problem}</p>
            </article>
            <article className={styles.casePanel}>
              <span>{copy.featured.solutionLabel}</span>
              <p>{copy.featured.solution}</p>
            </article>
            <article className={styles.casePanel}>
              <span>{copy.featured.impactLabel}</span>
              <p>{copy.featured.impact}</p>
            </article>
          </div>

          <div className={styles.projectDetails}>
            <div className={styles.detailBlock}>
              <span>{copy.featured.roleLabel}</span>
              <p>{copy.featured.role}</p>
            </div>
            <div className={styles.detailBlock}>
              <span>{copy.featured.stackLabel}</span>
              <div className={styles.badges}>
                {copy.featured.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <ul className={styles.highlights}>
              {copy.featured.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.actions}>
              <a
                href="https://medical-care-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryAction}
              >
                {copy.featured.demo}
              </a>
              <a
                href="https://github.com/LucasBernaola"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryAction}
              >
                {copy.featured.repo}
              </a>
            </div>
          </div>
        </div>

        <div className={styles.technicalCards}>
          {copy.featured.technicalCards.map((card) => (
            <article className={styles.technicalCard} key={card.title}>
              <h3>{card.title}</h3>
              <ul>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className={styles.projectGallery} aria-label={copy.featured.galleryLabel}>
          <div className={styles.galleryLead}>
            <div>
              <p className={styles.eyebrow}>{copy.featured.galleryLabel}</p>
              <h3>{copy.featured.galleryTitle}</h3>
            </div>
            <p>{copy.featured.hostingNote}</p>
          </div>

          <div className={styles.galleryTrack}>
            {copy.featured.screenshots.map((screen) => (
              <button
                className={styles.galleryThumb}
                key={screen.title}
                onClick={() => setActiveScreenshot(screen)}
                type="button"
              >
                <Image
                  src={screen.image}
                  alt={screen.title}
                  width={520}
                  height={320}
                  className={styles.galleryThumbImage}
                />
                <h4>{screen.title}</h4>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.splitSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>{copy.projects.eyebrow}</p>
          <h2>{copy.projects.title}</h2>
          <p>{copy.projects.description}</p>
        </div>
        <div className={styles.projectCards}>
          {copy.projects.items.map((project) => {
            const projectBody = (
              <>
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  width={460}
                  height={280}
                  className={styles.projectCardImage}
                />
                <div className={styles.projectCardBody}>
                  <div className={styles.projectCardMeta}>
                    <span>{project.badge}</span>
                    <strong>{project.status}</strong>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.projectMiniStack}>
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </>
            );

            return "url" in project ? (
              <a
                className={styles.projectCard}
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {projectBody}
              </a>
            ) : (
              <article className={styles.projectCard} key={project.title}>
                {projectBody}
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.skillsSection} id="skills">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>{copy.skills.eyebrow}</p>
          <h2>{copy.skills.title}</h2>
        </div>
        <div className={styles.skillGrid}>
          {copy.skills.groups.map((group) => (
            <article className={styles.card} key={group.title}>
              <h3>{group.title}</h3>
              <div className={styles.badges}>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.experienceSection} id="experience">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>{copy.experience.eyebrow}</p>
          <h2>{copy.experience.title}</h2>
        </div>
        <div className={styles.timeline}>
          {copy.experience.items.map((item) => (
            <article className={styles.timelineItem} key={item.title}>
              <span>{item.meta}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.labSection}>
        <div>
          <p className={styles.eyebrow}>{copy.lab.eyebrow}</p>
          <h2>{copy.lab.title}</h2>
        </div>
        <div className={styles.labItems}>
          {copy.lab.items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <footer className={styles.footer} id="contact">
        <div>
          <h2>{copy.contact.title}</h2>
          <p>{copy.contact.description}</p>
        </div>
        <div className={styles.footerActions}>
          <a
            href="https://www.linkedin.com/in/lucas-bernaola/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            {copy.contact.linkedin}
          </a>
          <a
            href="https://github.com/LucasBernaola"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            {copy.contact.github}
          </a>
          <a href="/CVen.pdf" download>
            {copy.contact.cv}
          </a>
        </div>
      </footer>

      {activeScreenshot ? (
        <div
          className={styles.modalBackdrop}
          onClick={() => setActiveScreenshot(null)}
          role="presentation"
        >
          <div
            className={styles.modal}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={activeScreenshot.title}
          >
            <div className={styles.modalHeader}>
              <h3>{activeScreenshot.title}</h3>
              <button onClick={() => setActiveScreenshot(null)} type="button">
                Close
              </button>
            </div>
            <Image
              src={activeScreenshot.image}
              alt={activeScreenshot.title}
              width={1400}
              height={900}
              className={styles.modalImage}
            />
          </div>
        </div>
      ) : null}
    </main>
  );
}

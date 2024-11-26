import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  useEffect(() => {
    const links = document.querySelectorAll(
      `.${styles.link}`
    ) as NodeListOf<HTMLElement>;
    links.forEach((link) => {
      scrambleText(link);
    });
  }, []);

  const scrambleText = (element: HTMLElement) => {
    const text = element.dataset.text!;
    let iteration = 0;

    const interval = setInterval(() => {
      element.innerText = text
        .split("")
        .map((letter, idx) => {
          if (idx < iteration) {
            return text[idx];
          }
          return String.fromCharCode(65 + Math.floor(Math.random() * 26));
        })
        .join("");

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 100);
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [animationState, setAnimationState] = useState<
    "idle" | "disappearing" | "appearing"
  >("idle");

  const handleLinkClick = (link: string) => {
    setAnimationState("disappearing");
    setTimeout(() => {
      window.location.hash = link;
      setTimeout(() => {
        setAnimationState("appearing");
        setMenuOpen(false);
      }, 100);
    }, 800);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <button
        className={styles.toggle_btn}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul
        className={`${styles.navLinks} ${
          menuOpen ? styles.showMenu : ""
        } ${animationState === "disappearing" ? styles.animatingOut : ""} ${
          animationState === "appearing" ? styles.animatingIn : ""
        }`}
      >
        {[
          { href: "#/", text: "Home" },
          { href: "#TechStack", text: "TechStack" },
          { href: "#MyProjects", text: "Projects" },
          { href: "#Career", text: "Career" },
          { href: "#OtherTools", text: "Toolbox" },
          { href: "#AboutMe", text: "About Me" },
        ].map((link, index) => (
          <li
            key={link.text}
            className={`${styles.linkItem} ${
              animationState !== "idle" ? styles[`linkItem-${index}`] : ""
            }`}
          >
            <Link
              href={link.href}
              passHref
              className={styles.link}
              onClick={() => handleLinkClick(link.href)}
              data-text={link.text}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;


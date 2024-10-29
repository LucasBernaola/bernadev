import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  useEffect(() => {
    const links = document.querySelectorAll(`.${styles.link}`) as NodeListOf<HTMLElement>;
    links.forEach(link => {
      scrambleText(link);
    });
  }, []);

  const scrambleText = (element: HTMLElement) => {
    const text = element.dataset.text!;
    let iteration = 0;
    
    const interval = setInterval(() => {
      element.innerText = text
        .split('')
        .map((letter, idx) => {
          if (idx < iteration) {
            return text[idx];
          }
          return String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Letras aleatorias
        })
        .join('');

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 150);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li className={styles.linkItem}>
          <Link href="/" passHref className={styles.link} data-text="Home">
            Home
          </Link>
        </li>
        <li className={styles.linkItem}>
          <Link href="/AboutMe" passHref className={styles.link} data-text="About Me">
            About Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


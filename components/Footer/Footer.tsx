import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import styles from "./Footer.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    message: "",
    email_id: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [buttonMessage, setButtonMessage] = useState("Send");
  const [buttonClass, setButtonClass] = useState(styles.button);

  useEffect(() => {
    if (isFormSubmitted) {
      setButtonMessage("Message sent!");
      setButtonClass(`${styles.button} ${styles.success}`);
      const timer = setTimeout(() => {
        setButtonMessage("Send");
        setButtonClass(styles.button);
        setIsFormSubmitted(false);
        setFormData({
          from_name: "",
          message: "",
          email_id: "",
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isFormSubmitted]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "template_nikrtyh",
        e.currentTarget,
        "13L_7w0A9MXcfFarO"
      )
      .then(
        () => {
          setIsFormSubmitted(true);
        },
        (error) => {
          alert("Error sending message: " + JSON.stringify(error));
        }
      );
  };

  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>Let’s Connect! I’d Love Your Feedback!</h2>
      <form id="form" className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="from_name" className={styles.h3}>
            Name
          </label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            value={formData.from_name}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div>
          <label htmlFor="email_id" className={styles.h3}>
            Email
          </label>
          <input
            type="email"
            name="email_id"
            id="email_id"
            value={formData.email_id}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="message" className={styles.h3}>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles.textarea}
            style={{ resize: "none", height: "100px" }}
          />
        </div>
        <input
          type="submit"
          id="button"
          value={buttonMessage}
          className={buttonClass}
        />
      </form>
      <div className={styles.footerBottom}>
        <div className={styles.icons}>
          <a
            href="https://www.linkedin.com/in/lucas-bernaola/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={styles.icon} />
          </a>
          <a
            href="https://github.com/LucasBernaola"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={styles.icon} />
          </a>
          <a href="/cv.pdf" download className={styles.downloadButton}>
            Download CV
          </a>
        </div>
        <div className={styles.copyright}>© Lucas Bernaola 2024</div>
      </div>
    </footer>
  );
};

export default Footer;

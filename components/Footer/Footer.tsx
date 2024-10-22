import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import styles from "./footer.module.css";

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    message: "",
    email_id: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

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

    // Enviar el formulario usando emailjs
    emailjs
      .sendForm(
        "default_service",
        "template_nikrtyh",
        e.currentTarget,
        "13L_7w0A9MXcfFarO"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setIsFormSubmitted(true); // Establecer el estado de envío del formulario
        },
        (error) => {
          alert("Error sending message: " + JSON.stringify(error));
        }
      );
  };

  // Efecto para restablecer el estado del formulario después de enviar
  useEffect(() => {
    if (isFormSubmitted) {
      setFormData({
        from_name: "",
        message: "",
        email_id: "",
      });
      setIsFormSubmitted(false); // Restablecer el flag
    }
  }, [isFormSubmitted]); // Solo se ejecuta cuando isFormSubmitted cambia

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
          value="Send"
          className={styles.button}
        />
      </form>
    </footer>
  );
};

export default Footer;

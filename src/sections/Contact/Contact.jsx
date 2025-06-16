import styles from "./ContactStyles.module.css"
import { useRef, useEffect } from "react";
import { animateSectionTitle, animateFadeInUp } from "../animations/animations";

function Contact() {
  const titleRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    animateSectionTitle(titleRef);
    animateFadeInUp(formRef);
  }, []);

  return (
    <section id="contact" className={styles.container}>
      <h1 ref={titleRef} className="sectionTitle">Contact</h1>
      <form ref={formRef} action="https://formspree.io/f/myzjjako" method="POST">
        <div className="formGroup">
          <label htmlFor="name" hidden>Name</label>
          <input type="text" name="name" id="name" placeholder="Name" required />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input type="text" name="email" id="email" placeholder="Email" required />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea name="message" id="message" placeholder="Message" required></textarea>
        </div>
        <input type="submit" className="hover btn" value="Submit"/>
      </form>
    </section>
  );
}

export default Contact

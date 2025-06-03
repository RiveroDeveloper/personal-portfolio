import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import githubIcon from "../../assets/github-light.svg"
import CV from "../../assets/cv.pdf"

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of RiveroDev"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Samuel <br />
          Rivero
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
        </span>
        <p>Building Full Stack solutions focused on solving real-world problems.</p>
        <a href={CV} download>
            <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

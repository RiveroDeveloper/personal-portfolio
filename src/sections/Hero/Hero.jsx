import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../common/Theme.Context";
import { useRef, useEffect } from "react";
import { animateHeroFadeInUp, animateHeroFadeInRight, animateHeroFadeInLeft } from "../animations/animations";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const fadeInUpRef = useRef(null);
  const fadeInRightRef = useRef(null);
  const fadeInLeftRef = useRef(null);

  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    animateHeroFadeInUp(fadeInUpRef);
    animateHeroFadeInRight(fadeInRightRef);
    animateHeroFadeInLeft(fadeInLeftRef);
    
    ScrollTrigger.refresh();
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          ref={fadeInLeftRef}
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of RiveroDev"
        />
        <img
          ref={fadeInRightRef}
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div ref={fadeInUpRef} className={styles.info}>
        <h1>
          Samuel <br />
          Rivero
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/rivero-dev/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
          <a href="https://github.com/SamuelRivero50" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
        </span>
        <p className={styles.description}>
          Building Full Stack solutions focused on solving real-world problems.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

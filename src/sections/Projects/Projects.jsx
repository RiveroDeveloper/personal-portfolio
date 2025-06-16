import styles from "./ProjectsStyles.module.css";
import cvGenerator from "../../assets/cv-generator.png";
import serena from "../../assets/serena.png";
import crm from "../../assets/crm.png";
import ProjectCard from "../common/ProjectCard";
import { useRef, useEffect } from "react";
import { animateProjectCards, animateSectionTitle } from "../animations/animations";

function Projects() {
  const titleRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    animateSectionTitle(titleRef);
    animateProjectCards([card1Ref, card2Ref, card3Ref]);
  }, []);

  return (
    <section id="projects" className={styles.container}>
      <h1 ref={titleRef} className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard ref={card1Ref} src={cvGenerator} alt="CV Generator" />
        <ProjectCard ref={card2Ref} src={serena} alt="Serena" />
        <ProjectCard ref={card3Ref} src={crm} alt="CRM" />
      </div>
    </section>
  );
}

export default Projects;

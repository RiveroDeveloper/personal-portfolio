import styles from "./SkillsStyles.module.css"
import SkillList from "../common/SkillList";
import { useRef, useEffect } from "react";
import { animateSectionTitle } from "../animations/animations";

function Skills() {
  const titleRef = useRef(null);

  useEffect(() => {
    animateSectionTitle(titleRef);
  }, []);

  return (
    <section id="skills" className={styles.container}>
      <h1 ref={titleRef}>Skills</h1>
      <SkillList />
    </section>
  )
}

export default Skills

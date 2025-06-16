import React, { useRef, useEffect } from 'react'
import StackIcon from "tech-stack-icons";
import styles from "../Skills/SkillsStyles.module.css";
import { animateStaggerIn, animateFadeInUp } from "../animations/animations";

function SkillList() {
  const frontendHeaderRef = useRef(null);
  const backendHeaderRef = useRef(null);
  const toolsHeaderRef = useRef(null);

  // Refs for skill items to animate them in groups
  const frontendSkillRefs = useRef([]);
  const backendSkillRefs = useRef([]);
  const toolsSkillRefs = useRef([]);

  useEffect(() => {
    // Animate section headers
    animateFadeInUp(frontendHeaderRef);
    animateFadeInUp(backendHeaderRef);
    animateFadeInUp(toolsHeaderRef);

    // Animate skill items with stagger
    animateStaggerIn(frontendSkillRefs.current);
    animateStaggerIn(backendSkillRefs.current);
    animateStaggerIn(toolsSkillRefs.current);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.skillList}>
        <h2 ref={frontendHeaderRef}>Frontend</h2>
        <SkillItem ref={el => frontendSkillRefs.current[0] = { current: el }} icon="html5" name="HTML" />
        <SkillItem ref={el => frontendSkillRefs.current[1] = { current: el }} icon="css3" name="CSS" />
        <SkillItem ref={el => frontendSkillRefs.current[2] = { current: el }} icon="js" name="JavaScript" />
        <SkillItem ref={el => frontendSkillRefs.current[3] = { current: el }} icon="react" name="React" />
        <SkillItem ref={el => frontendSkillRefs.current[4] = { current: el }} icon="tailwindcss" name="Tailwind" />
        <SkillItem ref={el => frontendSkillRefs.current[5] = { current: el }} icon="flutter" name="Flutter" />
        <SkillItem ref={el => frontendSkillRefs.current[6] = { current: el }} icon="dart" name="Dart" />
        
        <h2 ref={backendHeaderRef}>Backend</h2>
        <SkillItem ref={el => backendSkillRefs.current[0] = { current: el }} icon="nodejs" name="Node.js" />
        <SkillItem ref={el => backendSkillRefs.current[1] = { current: el }} icon="c++" name="C++" />
        <SkillItem ref={el => backendSkillRefs.current[2] = { current: el }} icon="php" name="PHP" />
        <SkillItem ref={el => backendSkillRefs.current[3] = { current: el }} icon="mysql" name="MySQL" />
        <SkillItem ref={el => backendSkillRefs.current[4] = { current: el }} icon="postgresql" name="PostgreSQL" />
        <SkillItem ref={el => backendSkillRefs.current[5] = { current: el }} icon="render" name="Render" />
        <SkillItem ref={el => backendSkillRefs.current[6] = { current: el }} icon="netlify" name="Netlify" />
        <SkillItem ref={el => backendSkillRefs.current[7] = { current: el }} icon="firebase" name="Firebase" />
        
        <h2 ref={toolsHeaderRef}>Tools</h2>
        <SkillItem ref={el => toolsSkillRefs.current[0] = { current: el }} icon="git" name="Git" />
        <SkillItem ref={el => toolsSkillRefs.current[1] = { current: el }} icon="github" name="GitHub" />
        <SkillItem ref={el => toolsSkillRefs.current[2] = { current: el }} icon="vscode" name="VS Code" />
        <SkillItem ref={el => toolsSkillRefs.current[3] = { current: el }} icon="notion" name="Notion" />
        <SkillItem ref={el => toolsSkillRefs.current[4] = { current: el }} icon="figma" name="Figma" />
        <SkillItem ref={el => toolsSkillRefs.current[5] = { current: el }} icon="ps" name="Photoshop" />
      </div>
    </div>
  )
}

const SkillItem = React.forwardRef(({ icon, name }, ref) => {
  return (
    <div ref={ref} className={styles.skillItem}>
      <StackIcon name={icon}/>
      <p>{name}</p>
    </div>
  )
});

SkillItem.displayName = 'SkillItem';

export default SkillList

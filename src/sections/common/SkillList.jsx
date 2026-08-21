import React, { useRef, useEffect } from 'react'
import StackIcon from "tech-stack-icons";
import styles from "../Skills/SkillsStyles.module.css";
import { useTheme } from "./Theme.Context";
import { animateStaggerIn, animateFadeInUp } from "../animations/animations";

// Official two-color Python logo (solid fills, no gradient ids), so it stays
// visible and crisp on both light and dark backgrounds.
function PythonIcon() {
  return (
    <svg viewBox="0 0 256 256" aria-hidden="true">
      <path fill="#387EB8" d="M126.916 0.072c-64.832 0-60.784 28.115-60.784 28.115l0.072 29.128h61.71v8.745H41.631c0 0-41.584-4.889-41.584 60.5 0 65.389 36.432 63.064 36.432 63.064h21.712v-30.333c0 0-1.236-36.183 37.972-36.183h64.645c0 0 35.518 0.576 35.518-34.603V32.342c0 0 5.253-32.27-50.428-32.27zm-34.277 19.254c6.11 0 11.06 4.95 11.06 11.06 0 6.109-4.95 11.06-11.06 11.06-6.109 0-11.06-4.951-11.06-11.06 0-6.11 4.951-11.06 11.06-11.06z"/>
      <path fill="#FFD43B" d="M129.085 255.928c64.832 0 60.784-28.115 60.784-28.115l-0.072-29.128h-61.71v-8.745h84.077c0 0 41.584 4.889 41.584-60.5 0-65.389-36.432-63.064-36.432-63.064h-21.712v30.333c0 0 1.236 36.183-37.972 36.183h-64.645c0 0-35.518-0.576-35.518 34.603v54.26c0 0-5.253 32.27 50.428 32.27zm34.279-19.254c-6.11 0-11.06-4.95-11.06-11.06 0-6.109 4.95-11.06 11.06-11.06 6.109 0 11.06 4.951 11.06 11.06 0 6.11-4.951 11.06-11.06 11.06z"/>
    </svg>
  );
}

function SkillList() {
  const frontendHeaderRef = useRef(null);
  const backendHeaderRef = useRef(null);
  const databasesHeaderRef = useRef(null);
  const cloudHeaderRef = useRef(null);
  const toolsHeaderRef = useRef(null);

  // Refs for skill items to animate them in groups
  const frontendSkillRefs = useRef([]);
  const backendSkillRefs = useRef([]);
  const databasesSkillRefs = useRef([]);
  const cloudSkillRefs = useRef([]);
  const toolsSkillRefs = useRef([]);

  useEffect(() => {
    // Animate section headers
    animateFadeInUp(frontendHeaderRef);
    animateFadeInUp(backendHeaderRef);
    animateFadeInUp(databasesHeaderRef);
    animateFadeInUp(cloudHeaderRef);
    animateFadeInUp(toolsHeaderRef);

    // Animate skill items with stagger
    animateStaggerIn(frontendSkillRefs.current);
    animateStaggerIn(backendSkillRefs.current);
    animateStaggerIn(databasesSkillRefs.current);
    animateStaggerIn(cloudSkillRefs.current);
    animateStaggerIn(toolsSkillRefs.current);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.skillList}>
        <h2 ref={frontendHeaderRef}>Frontend</h2>
        <SkillItem ref={el => frontendSkillRefs.current[0] = { current: el }} icon="html5" name="HTML" />
        <SkillItem ref={el => frontendSkillRefs.current[1] = { current: el }} icon="css3" name="CSS" />
        <SkillItem ref={el => frontendSkillRefs.current[2] = { current: el }} icon="js" name="JavaScript" />
        <SkillItem ref={el => frontendSkillRefs.current[3] = { current: el }} icon="typescript" name="TypeScript" />
        <SkillItem ref={el => frontendSkillRefs.current[4] = { current: el }} icon="react" name="React" />
        <SkillItem ref={el => frontendSkillRefs.current[5] = { current: el }} icon="vuejs" name="Vue.js" />
        <SkillItem ref={el => frontendSkillRefs.current[6] = { current: el }} icon="tailwindcss" name="Tailwind" />
        <SkillItem ref={el => frontendSkillRefs.current[7] = { current: el }} icon="flutter" name="Flutter" />
        <SkillItem ref={el => frontendSkillRefs.current[8] = { current: el }} icon="dart" name="Dart" />
        
        <h2 ref={backendHeaderRef}>Backend</h2>
        <SkillItem ref={el => backendSkillRefs.current[0] = { current: el }} icon="nodejs" name="Node.js" />
        <SkillItem ref={el => backendSkillRefs.current[1] = { current: el }} icon="nestjs" name="NestJS" />
        <SkillItem ref={el => backendSkillRefs.current[2] = { current: el }} icon="expressjs" name="Express.js" />
        <SkillItem ref={el => backendSkillRefs.current[3] = { current: el }} icon="python" name="Python" />
        <SkillItem ref={el => backendSkillRefs.current[4] = { current: el }} icon="django" name="Django" />
        <SkillItem ref={el => backendSkillRefs.current[5] = { current: el }} icon="c++" name="C++" />
        <SkillItem ref={el => backendSkillRefs.current[6] = { current: el }} icon="php" name="PHP" />
        
        <h2 ref={databasesHeaderRef}>Databases</h2>
        <SkillItem ref={el => databasesSkillRefs.current[0] = { current: el }} icon="mysql" name="MySQL" />
        <SkillItem ref={el => databasesSkillRefs.current[1] = { current: el }} icon="postgresql" name="PostgreSQL" />
        <SkillItem ref={el => databasesSkillRefs.current[2] = { current: el }} icon="mongodb" name="MongoDB" />
        <SkillItem ref={el => databasesSkillRefs.current[3] = { current: el }} icon="redis" name="Redis" />
        <SkillItem ref={el => databasesSkillRefs.current[4] = { current: el }} icon="supabase" name="Supabase" />
        <SkillItem ref={el => databasesSkillRefs.current[5] = { current: el }} icon="firebase" name="Firebase" />
        
        <h2 ref={cloudHeaderRef}>Cloud</h2>
        <SkillItem ref={el => cloudSkillRefs.current[0] = { current: el }} icon="aws" name="AWS" />
        <SkillItem ref={el => cloudSkillRefs.current[1] = { current: el }} icon="gcloud" name="Google Cloud" />
        <SkillItem ref={el => cloudSkillRefs.current[2] = { current: el }} icon="azure" name="Azure" />
        <SkillItem ref={el => cloudSkillRefs.current[3] = { current: el }} icon="vercel" name="Vercel" />
        <SkillItem ref={el => cloudSkillRefs.current[4] = { current: el }} icon="render" name="Render" />
        <SkillItem ref={el => cloudSkillRefs.current[5] = { current: el }} icon="netlify" name="Netlify" />
        
        <h2 ref={toolsHeaderRef}>Tools</h2>
        <SkillItem ref={el => toolsSkillRefs.current[0] = { current: el }} icon="git" name="Git" />
        <SkillItem ref={el => toolsSkillRefs.current[1] = { current: el }} icon="github" name="GitHub" />
        <SkillItem ref={el => toolsSkillRefs.current[2] = { current: el }} icon="docker" name="Docker" />
        <SkillItem ref={el => toolsSkillRefs.current[3] = { current: el }} icon="vscode" name="VS Code" />
        <SkillItem ref={el => toolsSkillRefs.current[4] = { current: el }} icon="notion" name="Notion" />
        <SkillItem ref={el => toolsSkillRefs.current[5] = { current: el }} icon="figma" name="Figma" />
        <SkillItem ref={el => toolsSkillRefs.current[6] = { current: el }} icon="ps" name="Photoshop" />
      </div>
    </div>
  )
}

const SkillItem = React.forwardRef(({ icon, name }, ref) => {
  const { theme } = useTheme();
  const variant = theme === "dark" ? "dark" : "light";

  return (
    <div ref={ref} className={styles.skillItem}>
      {icon === "python" ? <PythonIcon/> : <StackIcon name={icon} variant={variant}/>}
      <p>{name}</p>
    </div>
  )
});

SkillItem.displayName = 'SkillItem';

export default SkillList
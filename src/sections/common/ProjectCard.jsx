import React, { forwardRef, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import styles from '../Projects/ProjectsStyles.module.css'

const ProjectCard = forwardRef(({ src, alt, onClick }, ref) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    // Set initial state
    gsap.set(element, { scale: 1 });

    const handleMouseEnter = () => {
      gsap.to(element, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <button 
      ref={(el) => {
        cardRef.current = el;
        if (ref) {
          if (typeof ref === 'function') {
            ref(el);
          } else {
            ref.current = el;
          }
        }
      }} 
      className={styles.projectCard} 
      onClick={onClick}
    >
      <img src={src} alt={alt} />
    </button>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;

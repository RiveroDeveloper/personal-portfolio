import React, { forwardRef } from 'react'

const ProjectCard = forwardRef(({ src, alt, onClick }, ref) => {
  return (
    <button ref={ref} className="hover" onClick={onClick}>
    <img src={src} alt={alt} />
    </button>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;

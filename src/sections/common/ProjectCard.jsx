import React, { forwardRef } from 'react'

const ProjectCard = forwardRef(({ src, alt }, ref) => {
  return (
    <button ref={ref} className="hover">
      <img src={src} alt={alt} />
    </button>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;

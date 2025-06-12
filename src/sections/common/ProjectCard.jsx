import React from 'react'

function ProjectCard({src, alt}) {
  return (
    <button className="hover">
    <img src={src} alt={alt} />
    </button>
  );
}

export default ProjectCard

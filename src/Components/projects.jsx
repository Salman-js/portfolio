import React from 'react';
import ProjectItem from './projectItem';
import HeroFooterSvg from '../assets/heroFooterSvg';

function Projects() {
  return (
    <div className='projects-container'>
      <div className='w-full lg:p-32 p-16 pt-10 lg:pt-40'>
        <div className='lg:w-1/2 w-4/5'>
          <h2 className='projects-title' id='works'>
            Some of my works
          </h2>
          <div className='view-btn-border mt-6'></div>
        </div>
        <div className='project-items-container'>
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <HeroFooterSvg />
      </div>
    </div>
  );
}

export default Projects;

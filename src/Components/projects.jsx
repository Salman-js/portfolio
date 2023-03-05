import React from 'react';
import ProjectItem from './projectItem';
import HeroFooterSvg from '../assets/heroFooterSvg';

function Projects() {
  return (
    <div className='projects-container'>
      <div className='w-full lg:p-32 p-16 pt-10 lg:pt-40'>
        <div className='w-4/5 flex lg:flex-row flex-col'>
          <div className=''>
            <h2 className='projects-title' id='works'>
              <span className='menu-number'>01.</span> Some of my works
            </h2>
          </div>
          <div className='border-b border-gray-500 my-auto w-1/3 ml-4 pt-3 '></div>
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

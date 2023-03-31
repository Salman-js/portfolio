import React, { useEffect } from 'react';
import HeroFooterSvg from '../assets/heroFooterSvg';
import CardItem from './cardItem';

function Projects() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/script.js';
    document.body.appendChild(script);
  }, []);
  return (
    <div className='projects-container'>
      <div className='w-full lg:p-32 p-16 pt-10 lg:pt-40'>
        <div className='w-4/5 flex lg:flex-row flex-col' data-aos='fade-up'>
          <div className=''>
            <h2 className='projects-title' id='works'>
              <span className='menu-number'>01.</span> Some of my works
            </h2>
          </div>
          <div className='border-b border-gray-500 my-auto w-1/3 ml-4 pt-3 '></div>
        </div>
        <div className='project-items-container'>
          <div id='cards'>
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <HeroFooterSvg />
      </div>
    </div>
  );
}

export default Projects;

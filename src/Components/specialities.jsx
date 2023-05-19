import React from 'react';
import HeroFooterSvg from '../assets/heroFooterSvg';
import SpecialityItem from './specialityItem';

function Specialities() {
  const stacks = {
    frontend: ['ReactJs', 'NextJs', 'Svelte', 'Wordpress'],
    backend: ['Node Js', 'Express', 'Socket.io'],
    mobile: ['React Native'],
    database: ['MySQL', 'MongoDB', 'Firebase', 'PostgreSQL'],
    tools: ['Tailwind', 'Tanstack Query', 'Redux', 'Docker'],
  };
  return (
    <div className='specialities-container'>
      <div className='w-full lg:p-32 p-16 pt-10 lg:pt-20'>
        <div className='w-4/5 flex lg:flex-row flex-col' data-aos='fade-up'>
          <div className=''>
            <h2 className='projects-title' id='specialities'>
              <span className='menu-number'>02.</span> Specialities
            </h2>
          </div>
          <div className='border-b border-gray-500 my-auto w-1/3 ml-4 pt-3 '></div>
        </div>
        <div className='specialities-inner-container' data-aos='fade-up'>
          <div className='w-full flex lg:flex-row flex-col'>
            <SpecialityItem
              item={{
                title: 'Frontend',
                stacks: stacks.frontend,
              }}
            />

            <SpecialityItem
              item={{
                title: 'Backend',
                stacks: stacks.backend,
              }}
            />
            <SpecialityItem
              item={{
                title: 'Mobile',
                stacks: stacks.mobile,
              }}
            />
          </div>
          <div className='w-full flex lg:flex-row flex-col'>
            <SpecialityItem
              item={{
                title: 'Database',
                stacks: stacks.database,
              }}
            />

            <SpecialityItem
              item={{
                title: 'Tools',
                stacks: stacks.tools,
              }}
            />
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <HeroFooterSvg />
      </div>
    </div>
  );
}

export default Specialities;

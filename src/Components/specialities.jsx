import React from 'react';
import HeroFooterSvg from '../assets/heroFooterSvg';
import SpecialityItem from './specialityItem';

function Specialities() {
  const stacks = [
    { title: 'Title', image: 'https://reactjs.org/favicon.ico' },
    {
      title: 'Title',
      image: 'https://nextjs.org/static/favicon/favicon-32x32.png',
    },
    {
      title: 'Title',
      image:
        'https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png',
    },
    {
      title: 'Title',
      image: 'https://labs.mysql.com/common/themes/sakila/favicon.ico',
    },
    {
      title: 'Title',
      image: 'https://nodejs.org/static/images/favicons/favicon-32x32.png',
    },
    {
      title: 'Title',
      image:
        'https://react-query-v3.tanstack.com/_next/static/images/favicon-eed8346421218b24d8fd0fd55c2f9e35.png',
    },
    {
      title: 'Title',
      image: 'https://redux.js.org/img/favicon/favicon.ico',
    },
  ];
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
                stacks,
              }}
            />

            <SpecialityItem
              item={{
                title: 'Backend',
                stacks,
              }}
            />
            <SpecialityItem
              item={{
                title: 'Mobile',
                stacks,
              }}
            />
          </div>
          <div className='w-full flex lg:flex-row flex-col'>
            <SpecialityItem
              item={{
                title: 'Database',
                stacks,
              }}
            />

            <SpecialityItem
              item={{
                title: 'Data management',
                stacks,
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

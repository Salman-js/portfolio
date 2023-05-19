import { GitHub } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import Design1 from '../assets/design1.svg';

function MiniCardItem({ item }) {
  return (
    <div
      className='w-full flex flex-col space-y-1 rounded-lg'
      data-aos='fade-up'
    >
      <div class='card-content'>
        <div class='card-info-wrapper'>
          <div class='card-info'>
            <div class='card-info-title'>
              <h3>{item.title}</h3>
              <p className='text-lg font-semibold text-slate-400'>
                {item.type}
              </p>
              <h4>{item.description}</h4>
              <div className='w-full flex flex-row justify-start space-x-2 my-2'>
                {item.techs.map((tech, index) => (
                  <div
                    className='py-2 px-3 bg-slate-700 bg-opacity-20 backdrop-blur-md flex items-center justify-center rounded-full w-fit my-auto'
                    key={index}
                  >
                    <p className='text-xs text-gray-300 font-bold font-[`Inter`] whitespace-nowrap'>
                      {tech}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniCardItem;

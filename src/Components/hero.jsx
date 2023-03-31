import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import HeroFooterSvg from '../assets/heroFooterSvg';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <div className='hero'>
      <div className='w-full lg:p-32 p-16 pt-40'>
        <span className='hello' data-aos='fade-up'>
          Hi, My name is
        </span>
        <div className='lg:w-2/3 w-full mt-6' data-aos='fade-up'>
          <span className='name'>Salman Mohammed.</span>
        </div>
        <div className='w-full mt-4' data-aos='fade-up'>
          <span className='work'>
            I{' '}
            <TypeAnimation
              sequence={['design', 3000, 'develop', 3000, 'build', 3000]}
              wrapper='span'
              cursor={true}
              repeat={Infinity}
            />
            stuff for the web.
          </span>
        </div>
        <div className='w-full flex flex-row justify-between lg:mt-12 mt-6 '>
          <a href='#works'>
            <div className='view-btn' data-aos='fade-up'>
              <span className='view-btn-text smooth'>VIEW PROJECTS</span>
              <div className='view-btn-border'></div>
            </div>
          </a>
          <div className='flex flex-row pr-10' data-aos='fade-up'>
            <div className='my-auto'>
              <IconButton>
                <GitHub sx={{ color: '#6d6981' }} />
              </IconButton>
            </div>
            <div className='my-auto'>
              <IconButton>
                <LinkedIn sx={{ color: '#6d6981' }} />
              </IconButton>
            </div>
            <div className='my-auto'>
              <IconButton>
                <Twitter sx={{ color: '#6d6981' }} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full absolute bottom-0 flex justify-center'>
        <HeroFooterSvg />
      </div>
    </div>
  );
}

export default Hero;

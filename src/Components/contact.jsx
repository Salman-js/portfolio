import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import HeroFooterSvg from '../assets/heroFooterSvg';

function Contacts() {
  return (
    <div className='specialities-container'>
      <div className='w-full p-20 pb-16'>
        <div className='w-4/5 flex lg:flex-row flex-col'>
          <div className='my-auto'>
            <h2 className='projects-title' id='contact'>
              <span className='menu-number'>03.</span> Get in touch
            </h2>
          </div>
          <a
            href='mailto:salmanmoh.eth@gmail.com'
            className='ml-6 lg:mt-0 mt-4'
          >
            <div className='rounded-sm p-4 border border-[#e7ab54] flex flex-row justify-center'>
              <span className='my-auto'>
                <img
                  src='https://em-content.zobj.net/source/microsoft-teams/337/waving-hand_1f44b.png'
                  alt=''
                  className='w-8'
                  animation-play-state='paused'
                />
              </span>
              <span className='text-2xl text-[#e7ab54] font-bold ml-3 my-auto'>
                Say Hello
              </span>
            </div>
          </a>
        </div>
      </div>
      <div className='w-full flex flex-col items-center justify-center px-10 pt-4 pb-6'>
        <p className='credit'>Designed & built by Salman Mohammed</p>
        <div className='w-full flex flex-row justify-center mb-5 mt-3'>
          <div className='my-auto'>
            <IconButton>
              <GitHub sx={{ color: '#c6bdf9', fontSize: 20 }} />
            </IconButton>
          </div>
          <div className='my-auto'>
            <IconButton>
              <LinkedIn sx={{ color: '#c6bdf9', fontSize: 20 }} />
            </IconButton>
          </div>
          <div className='my-auto'>
            <IconButton>
              <Twitter sx={{ color: '#c6bdf9', fontSize: 20 }} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;

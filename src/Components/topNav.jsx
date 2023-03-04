import React, { useState } from 'react';
import { TfiClose } from 'react-icons/tfi';

function TopNav() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className='top-nav'>
      <div className='flex flex-row justify-center items-center'>
        <span className='logo'>S</span>
        <span className='nav-name'>Salman M.</span>
      </div>
      <div
        className='flex justify-center items-center cursor-pointer'
        onClick={() => setClicked(!clicked)}
      >
        {!clicked ? (
          <svg
            width='57'
            height='20'
            viewBox='0 0 26 20'
            className='m-auto hover:w-10 hover:h-5'
          >
            <path
              fill='transparent'
              stroke-width='1.5'
              stroke='#c4c4c4'
              d='M 2 2.5 L 57 2.5'
            ></path>
            <path
              fill='transparent'
              stroke-width='1.5'
              stroke='#c4c4c4'
              d='M 2 9.423 L 57 9.423'
              opacity='1'
            ></path>
            <path
              fill='transparent'
              stroke-width='1.5'
              stroke='#c4c4c4'
              d='M 2 16.346 L 27 16.346'
            ></path>
          </svg>
        ) : (
          <TfiClose size={32} />
        )}
      </div>
    </div>
  );
}

export default TopNav;

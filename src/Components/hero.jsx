import React from 'react';
import HeroFooterSvg from '../assets/heroFooterSvg';

function Hero() {
  return (
    <div className='hero'>
      <div className='w-full lg:p-32 p-16 lg:pt-48 pt-40'>
        <span className='hello'>Hi, My name is</span>
        <div className='lg:w-2/3 w-full mt-6'>
          <span className='name'>Salman Mohammed.</span>
        </div>
        <div className='w-full mt-4'>
          <span className='work'>I build things for the web.</span>
        </div>
      </div>
      <div className='w-full fixed bottom-0 flex justify-center'>
        <HeroFooterSvg />
      </div>
    </div>
  );
}

export default Hero;

import { GitHub, OpenInNewRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import Design1 from '../assets/design1.svg';

function CardItem() {
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
  ];
  return (
    <div className='card'>
      <div className='card-content'>
        <div className='image-container'>
          <img
            src='https://img.freepik.com/free-photo/low-angle-shot-tall-city-building-with-blue-sky-background-new-york_181624-20345.jpg?w=2000'
            alt=''
            className='w-full h-full'
          />
        </div>
        <div className='detail-container'>
          <div className='w-full'>
            <p className='project-title'>Project Title</p>
            <div className='stacks-container'>
              {stacks.map((stack, index) => (
                <img
                  key={index}
                  src={stack.image}
                  alt=''
                  className='mx-1 w-6'
                />
              ))}
            </div>
            <div className='description-container'>
              <p className='project-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur a, veritatis quis voluptas tenetur, similique rem
                non, nisi necessitatibus esse libero delectus ex blanditiis.
                Laborum.
              </p>
            </div>
          </div>
          <div className='flex flex-row w-full justify-between z-50'>
            <div className='my-auto flex flex-row z-50'>
              <IconButton>
                <GitHub sx={{ color: '#6d6981' }} />
              </IconButton>
              <IconButton className='ml-3'>
                <OpenInNewRounded sx={{ color: '#6d6981' }} />
              </IconButton>
            </div>
            <img src={Design1} alt='' className='w-20' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;

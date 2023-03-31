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
    <div class='card' data-aos='fade-up'>
      <div class='card-content'>
        <div class='card-image'>
          <img
            src='https://media.istockphoto.com/id/1331397297/photo/detail-glass-building-background.jpg?s=612x612&w=0&k=20&c=YvMWdmf7gt7GpXuDtfRMVuvcyLsrtHRIrj61keJFfEM='
            alt=''
            className='rounded-t-lg'
          />
        </div>
        <div class='card-info-wrapper'>
          <div class='card-info'>
            <i class='fa-duotone fa-apartment'></i>
            <div class='card-info-title'>
              <h3>Project Title</h3>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                beatae incidunt nemo repellat necessitatibus illo!
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;

import React, { useEffect } from 'react';
import HeroFooterSvg from '../assets/heroFooterSvg';
import CardItem from './cardItem';
import MiniCardItem from './miniCardItem';

function Projects() {
  const projects = [
    {
      title: '7-24 Media',
      images: [
        'https://play-lh.googleusercontent.com/RPZExtOQXcSzQfRoGzyw2Mgc3FMR3XtfbFddeznn3lOyuoYMwty87WS4vyBNa_ppVhw=w2560-h1440-rw',
        'https://play-lh.googleusercontent.com/xHfkYjY9iiwkuAKZn8FpuEXlxcDQNxCYvOjkpzaho3EJsp4hua2DwaZjqNLv1XVbuio=w2560-h1440-rw',
        'https://play-lh.googleusercontent.com/8sXme-xlQAJWwSOqvNIUB4t95W7HR6Nn0RkO6UJbxHHZfa2l0jTOS-qufxYtekwzR28=w2560-h1440-rw',
        'https://play-lh.googleusercontent.com/jnRk827UVboPoHG6H4weQ9n9Qsxgz2-gLSsULVQLltv2KOLDMLvgPFizOW-zXiUMLCw=w2560-h1440-rw',
      ],
      type: 'Native Mobile App & Website',
      description:
        'A Mobile App to book and watch live streamed events organized by 7-24 media group. Plus another app for the admin side where the media group post events and manage tickets.',
      github: '',
      playstore:
        'https://play.google.com/store/apps/details?id=com.client724app.addisway',
      techs: ['React Native', 'Node Js', 'MySQL'],
    },
    {
      title: 'Agar',
      images: [
        'https://play-lh.googleusercontent.com/RPZExtOQXcSzQfRoGzyw2Mgc3FMR3XtfbFddeznn3lOyuoYMwty87WS4vyBNa_ppVhw=w2560-h1440-rw',
        'https://play-lh.googleusercontent.com/xHfkYjY9iiwkuAKZn8FpuEXlxcDQNxCYvOjkpzaho3EJsp4hua2DwaZjqNLv1XVbuio=w2560-h1440-rw',
        'https://play-lh.googleusercontent.com/8sXme-xlQAJWwSOqvNIUB4t95W7HR6Nn0RkO6UJbxHHZfa2l0jTOS-qufxYtekwzR28=w2560-h1440-rw',
        'https://play-lh.googleusercontent.com/jnRk827UVboPoHG6H4weQ9n9Qsxgz2-gLSsULVQLltv2KOLDMLvgPFizOW-zXiUMLCw=w2560-h1440-rw',
      ],
      type: 'Web App & Native Mobile App',
      description:
        'An affiliate marketing platform where businesses maximize their reach and anyone can earn money as an affiliate after registering and verifying their identity.',
      techs: ['ReactJs', 'React Native', 'Node Js', 'MySQL', 'Tailwind'],
    },
    {
      title: 'CoffeeNet',
      images: [
        'https://play-lh.googleusercontent.com/RPZExtOQXcSzQfRoGzyw2Mgc3FMR3XtfbFddeznn3lOyuoYMwty87WS4vyBNa_ppVhw=w2560-h1440-rw',
        'https://play-lh.googleusercontent.com/xHfkYjY9iiwkuAKZn8FpuEXlxcDQNxCYvOjkpzaho3EJsp4hua2DwaZjqNLv1XVbuio=w2560-h1440-rw',
        'https://play-lh.googleusercontent.com/8sXme-xlQAJWwSOqvNIUB4t95W7HR6Nn0RkO6UJbxHHZfa2l0jTOS-qufxYtekwzR28=w2560-h1440-rw',
        'https://play-lh.googleusercontent.com/jnRk827UVboPoHG6H4weQ9n9Qsxgz2-gLSsULVQLltv2KOLDMLvgPFizOW-zXiUMLCw=w2560-h1440-rw',
      ],
      type: 'Web App',
      description:
        'An ERP like platform where coffee exporters manage their day-to-day resources and coffee grading.',
      github: '',
      playstore:
        'https://play.google.com/store/apps/details?id=com.client724app.addisway',
      techs: ['React Js', 'Node Js', 'MySQL', 'Tailwind'],
    },
    {
      title: 'Void',
      images: [
        'https://play-lh.googleusercontent.com/RPZExtOQXcSzQfRoGzyw2Mgc3FMR3XtfbFddeznn3lOyuoYMwty87WS4vyBNa_ppVhw=w2560-h1440-rw',
        'https://play-lh.googleusercontent.com/xHfkYjY9iiwkuAKZn8FpuEXlxcDQNxCYvOjkpzaho3EJsp4hua2DwaZjqNLv1XVbuio=w2560-h1440-rw',
        'https://play-lh.googleusercontent.com/8sXme-xlQAJWwSOqvNIUB4t95W7HR6Nn0RkO6UJbxHHZfa2l0jTOS-qufxYtekwzR28=w2560-h1440-rw',
        'https://play-lh.googleusercontent.com/jnRk827UVboPoHG6H4weQ9n9Qsxgz2-gLSsULVQLltv2KOLDMLvgPFizOW-zXiUMLCw=w2560-h1440-rw',
      ],
      type: 'Native Mobile App',
      description:
        'A social media app where users share their thoughts by posting, liking replying to posts, bookmarking their favourite and engage in various groups',
      github: '',
      techs: ['React Native', 'Node Js', 'MySQL'],
    },
    {
      title: 'Ghost',
      images: [
        'https://play-lh.googleusercontent.com/RPZExtOQXcSzQfRoGzyw2Mgc3FMR3XtfbFddeznn3lOyuoYMwty87WS4vyBNa_ppVhw=w2560-h1440-rw',
        'https://play-lh.googleusercontent.com/xHfkYjY9iiwkuAKZn8FpuEXlxcDQNxCYvOjkpzaho3EJsp4hua2DwaZjqNLv1XVbuio=w2560-h1440-rw',
        'https://play-lh.googleusercontent.com/8sXme-xlQAJWwSOqvNIUB4t95W7HR6Nn0RkO6UJbxHHZfa2l0jTOS-qufxYtekwzR28=w2560-h1440-rw',
        'https://play-lh.googleusercontent.com/jnRk827UVboPoHG6H4weQ9n9Qsxgz2-gLSsULVQLltv2KOLDMLvgPFizOW-zXiUMLCw=w2560-h1440-rw',
      ],
      type: 'Native Mobile App',
      description:
        'A realtime messaging app with easy registration, email verification and fast communication',
      github: '',
      techs: ['React Native', 'Firebase Auth', 'Firebase firestore'],
    },
    {
      title: 'Qelem',
      images: [
        'https://play-lh.googleusercontent.com/RPZExtOQXcSzQfRoGzyw2Mgc3FMR3XtfbFddeznn3lOyuoYMwty87WS4vyBNa_ppVhw=w2560-h1440-rw',
        'https://play-lh.googleusercontent.com/xHfkYjY9iiwkuAKZn8FpuEXlxcDQNxCYvOjkpzaho3EJsp4hua2DwaZjqNLv1XVbuio=w2560-h1440-rw',
        'https://play-lh.googleusercontent.com/8sXme-xlQAJWwSOqvNIUB4t95W7HR6Nn0RkO6UJbxHHZfa2l0jTOS-qufxYtekwzR28=w2560-h1440-rw',
        'https://play-lh.googleusercontent.com/jnRk827UVboPoHG6H4weQ9n9Qsxgz2-gLSsULVQLltv2KOLDMLvgPFizOW-zXiUMLCw=w2560-h1440-rw',
      ],
      type: 'Native Mobile App',
      description: 'An Learning Management System (LMS) powered by moodle.',
      github: '',
      techs: ['Cordova', 'PHP', 'MySQL'],
    },
  ];
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
            {projects.map((project, index) => (
              <CardItem item={project} key={index} />
            ))}
          </div>
        </div>
        <div className='mini-project-items-container'>
          {projects.map((project, index) => (
            <MiniCardItem item={project} key={index} />
          ))}
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <HeroFooterSvg />
      </div>
    </div>
  );
}

export default Projects;

import { Box, Button, IconButton, Zoom } from '@mui/material';
import { Menu, MenuItem } from '@szhsin/react-menu';
import React, { useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import useDarkMode from './useDarkTheme';

function TopNav() {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const [switched, setSwitched] = useState(false);
  const [visibility, setVisibility] = useState(false);
  function switcher() {
    if (switched) {
      setVisibility(true);
      setSwitched(false);
      setDarkTheme(!darkTheme);
      setTimeout(() => {
        setVisibility(false);
      }, 500);
    } else {
      setVisibility(true);
      setSwitched(true);
      setTimeout(() => {
        setDarkTheme(!darkTheme);
        setVisibility(false);
      }, 700);
    }
  }
  return (
    <div className='top-nav' data-aos='fade-down'>
      <a href='#' className='flex items-center justify-center'>
        <div className='flex flex-row justify-center items-center'>
          <img src='/logo.png' alt='' className='w-6' />
          <span className='nav-name'>Salman M.</span>
        </div>
      </a>
      <div className='flex flex-row'>
        {/* <div className='my-auto mr-4'>
          <div
            style={{
              borderRadius: '250%',
              width: '1px',
              height: '1px',
              transform: switched ? 'scale(3500)' : 'scale(0)',
              backgroundColor: '#000000',
              opacity: visibility ? '70%' : '0%',
              pointerEvents: 'none',
              transition: 'all ease-in-out 700ms',
              position: 'fixed',
              top: '38px',
              marginLeft: '28px',
            }}
          ></div>
          <div className='mr-10 -mt-[1.3em]'>
            <Zoom in={darkTheme}>
              <Box className='absolute' onClick={switcher}>
                <BsSun color='#c6bdf9' size={25} className='m-2' />
              </Box>
            </Zoom>
            <Zoom in={!darkTheme}>
              <Box className='absolute' onClick={switcher}>
                <BsMoonStars color='#c6bdf9' size={25} className='m-2' s />
              </Box>
            </Zoom>
          </div>
        </div> */}
        <div className='my-auto'>
          <Menu
            menuButton={({ open }) => (
              <div className='flex justify-center items-center cursor-pointer'>
                <Zoom in={!open}>
                  <Box className='absolute mr-3'>
                    <svg
                      width='57'
                      height='20'
                      viewBox='0 0 26 20'
                      className='menu-icon m-auto hover:w-10 hover:h-5'
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
                  </Box>
                </Zoom>
                <Zoom in={open}>
                  <Box>
                    <TfiClose size={32} />
                  </Box>
                </Zoom>
              </div>
            )}
            transition
            key='bottom'
            direction='bottom'
            align='end'
            position='anchor'
            offsetX={0}
            offsetY={24}
            menuClassName='menu'
            itemProps={{
              className: 'menu',
            }}
            itemProp={{
              className: 'menu',
            }}
          >
            <div className='w-60'>
              <span className='menu-title'>Menu</span>
              <a href='#works'>
                <MenuItem className='menu-item'>
                  <span className='menu-number'>01.</span> Work
                </MenuItem>
              </a>
              <a href='#specialities'>
                <MenuItem className='menu-item'>
                  <span className='menu-number'>02.</span> Specialities
                </MenuItem>
              </a>
              <a href='#contact'>
                <MenuItem className='menu-item'>
                  <span className='menu-number'>03.</span> Contact
                </MenuItem>
              </a>
              <a href='#resume' className='w-full'>
                <MenuItem className='hover:bg-[#3f3f5b] '>
                  <Button
                    variant='outlined'
                    sx={{
                      marginX: 'auto',
                      color: 'white',
                      borderColor: 'white',
                      textTransform: 'none',
                    }}
                    className='mx-auto'
                  >
                    Resume
                  </Button>
                </MenuItem>
              </a>
              <div className='w-full flex flex-row justify-center'>
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
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default TopNav;

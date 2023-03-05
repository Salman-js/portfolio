import React from 'react';

function SpecialityItem({ item }) {
  return (
    <div className='speciality-container'>
      <p className='text-base text-black'>{item.title}</p>
      <div className='flex flex-row mt-3 justify-start'>
        {item.stacks.map((stack, index) => (
          <img key={index} src={stack.image} alt='' className='mx-1 w-6' />
        ))}
      </div>
    </div>
  );
}

export default SpecialityItem;

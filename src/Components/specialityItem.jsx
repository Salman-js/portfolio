import React from 'react';

function SpecialityItem({ item }) {
  return (
    <div className='speciality-container'>
      <p className='text-lg font-bold text-gray-800'>{item.title}</p>
      <div className='flex lg:flex-row lg:flex-nowrap flex-wrap mt-3 justify-start'>
        {item.stacks.map((stack, index) => (
          <div
            className='py-2 px-3 bg-slate-700 bg-opacity-20 backdrop-blur-md flex items-center justify-center rounded-full text-xs text-gray-900 font-bold font-[`Inter`] w-fit mx-1 whitespace-nowrap sm:my-1'
            key={index}
          >
            {stack}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpecialityItem;

import React from 'react';

function SpecialityItem({ item }) {
  return (
    <div className='speciality-container'>
      <div>
        <p className='text-lg font-bold text-gray-800'>{item.title}</p>
      </div>
      <div className='flex flex-row lg:flex-nowrap flex-wrap mt-3 justify-start '>
        {item.stacks.map((stack, index) => (
          <div
            className='py-2 px-3 bg-slate-700 bg-opacity-20 backdrop-blur-md rounded-full text-xs text-gray-900 font-bold font-[`Inter`] whitespace-nowrap m-1'
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

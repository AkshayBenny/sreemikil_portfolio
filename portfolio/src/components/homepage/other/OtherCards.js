import React from 'react';

function OtherCards({ img, title }) {
  return (
    <div className='relative  '>
      <img
        src={img}
        alt='other'
        className='rounded-[8px] h-[240px] w-[368px] object-cover'
      />
      <div className='flex items-center gap-[10px] z-100  absolute bottom-[16px] left-[16px]'>
        <h3 className=' text-white font-semibold text-[32px]'>{title}</h3>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width='36'
          height='36'
        >
          <path fill='none' d='M0 0h24v24H0z' />
          <path
            d='M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z'
            fill='rgba(255,255,255,1)'
          />
        </svg>
      </div>
    </div>
  );
}

export default OtherCards;
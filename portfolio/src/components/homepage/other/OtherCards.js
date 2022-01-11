import React, { useState } from 'react';

function OtherCards({ img, title }) {
  const [mouseHover, setMouseHover] = useState(false);
  return (
    <div
      className='relative group  cursor-pointer transition-all duration-500 ease-in-out'
      // onMouseEnter={() => setMouseHover(true)}
      // onMouseLeave={() => setMouseHover(false)}
    >
      <img
        src={img}
        alt='other'
        className='rounded-[8px] h-[240px] w-[368px] object-cover'
      />
      <div className='flex items-center gap-[10px] z-100  absolute bottom-[16px] left-[16px] button'>
        <h3 className=' text-white font-semibold text-[32px]'>{title}</h3>
        <div className='invisible group-hover:visible  ease-in-out delay-100ms duration-500 relative right-[10px] group-hover:right-[0px] transition-all'>
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
    </div>
  );
}

export default OtherCards;

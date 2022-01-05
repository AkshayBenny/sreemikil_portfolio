import React from 'react';

function OtherCards({ img, title }) {
  return (
    <div className='relative'>
      <img src={img} alt='other' />
      <h3 className='z-100 absolute bottom-0 left-0 text-white'>{title}</h3>
    </div>
  );
}

export default OtherCards;

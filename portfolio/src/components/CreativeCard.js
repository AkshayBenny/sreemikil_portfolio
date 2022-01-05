import React from 'react';

function CreativeCard({ img, title, subTitle }) {
  return <div className='bg-slate-300'>
      <img src={img}  alt="img" />
      <p>{title}</p>
      <p>{subTitle}</p>
  </div>;
}

export default CreativeCard;

import React from 'react';

function CreativeCard({ img, title, subTitle }) {
  return (
    <div className='cursor-pointer	 shadow-[0px 0px 20px rgba(201, 199, 199, 0.19)] p-[20px] md:p-[28px] border-2 rounded-[16px]  md:max-w-[552px] max-w-[363px] hover:shadow-lg '>
      <div className='object-cover'>
        <img
          className='rounded-[16px] mb-[16px] h-[195px] md:h-[314px] w-[323px] md:w-[496px]'
          src={img}
          alt='img'
        />
      </div>
      <div>
        <p className='pb-[5px] md:pb-[8px] font-semibold text-[20px] md:text-[32px]'>
          {title}
        </p>
      </div>
      <div>
        <p className='pb-[16px] md:pb-[24px] font-normal text-[16px]'>
          {subTitle}
        </p>
      </div>
      <div>
        <p className='font-semibold text-[16px] text-[#120055]'>Read More</p>
      </div>
    </div>
  );
}

export default CreativeCard;

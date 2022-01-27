import React from 'react';

function CreativeCard({ img, title, subTitle }) {
  return (
    <div className='shadow-[0px 0px	 20px rgba(201, 199, 199, 0.19)] max-w-[363px] cursor-pointer rounded-[16px] border-2 p-[20px] transition-all  hover:shadow-lg md:max-w-[552px] md:p-[28px] '>
      <div className='object-cover'>
        <img
          className='mb-[16px] h-[195px] w-[323px] rounded-[16px] md:h-[314px] md:w-[496px]'
          src={img}
          alt='img'
        />
      </div>
      <div>
        <p className='pb-[5px] text-[20px] font-semibold md:pb-[8px] md:text-[32px]'>
          {title}
        </p>
      </div>
      <div>
        <p className='pb-[16px] text-[16px] font-normal md:pb-[24px]'>
          {subTitle}
        </p>
      </div>
      <div>
        <p className='text-[16px] font-semibold text-[#120055]'>Read More</p>
      </div>
    </div>
  );
}

export default CreativeCard;

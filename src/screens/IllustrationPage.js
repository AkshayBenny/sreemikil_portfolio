import React from 'react';
import { illustrations } from '../data';

function IllustrationPage() {
  return (
    <div>
      <div className='flex justify-center pb-[16px] pt-[36px]'>
        <h1 className='text-[18px] font-medium text-[#613EE2] md:text-[24px]'>
          Portfolio
        </h1>
      </div>
      <div className='flex justify-center '>
        <h1 className='text-[#120055 ] pb-[48px] text-[32px] font-semibold md:pb-[72px] md:text-[40px]'>
          Illustrations
        </h1>
      </div>
      <div className='flex  flex-wrap items-center justify-center gap-[48px] px-[24px] md:px-[64px]'>
        {illustrations.map((illustration, index) => {
          return (
            <img
              key={index}
              className='h-[340px] w-full rounded-[8px] object-cover md:w-[504px]'
              src={illustration.image}
              alt='illustration'
            />
          );
        })}
      </div>
    </div>
  );
}

export default IllustrationPage;

import React from 'react';
import { aboutData } from '../../data';

function About() {
  return (
    <div className='pt-[120px] px-[24px] md:px-[64px]'>
      <div className='flex justify-center pb-[16px]'>
        <h1 className='text-[18px] md:text-[24px] font-medium text-[#613EE2]'>
          About Me
        </h1>
      </div>
      <div className='flex justify-center '>
        <h1
          className='font-semibold text-[#120055
] text-[32px] md:text-[40px] pb-[48px] md:pb-[72px]'
        >
          Nice To Meet You
        </h1>
      </div>
      <div className='flex-row lg:flex gap-[48px] justify-center'>
        <div>
          <img
            className='h-[392px] md:max-w-[471px] md:h-[509px] object-cover rounded-[8px] mb-[36px]'
            src={aboutData[0].img}
            alt='dp'
          />
        </div>
        <div>
          <h1 className='text-[32px] text-[#120055] font-semibold	pb-[24px]'>
            Hey All,
          </h1>
          <div className='max-w-[471px]'>
            <p className='text-[20px] font-normal leading-[33px] pb-[36px]'>
              {aboutData[0].description}
            </p>
          </div>
          <div>
            <h1 className='text-[18px] md:text-[24px] text-[#120055] font-medium'>
              Familiar Tools
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

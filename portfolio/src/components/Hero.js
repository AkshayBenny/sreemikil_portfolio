import React from 'react';

function Hero() {
  return (
    <div>
      <div className='flex sm:flex justify-start items-center sm:justify-center sm:items-center'>
        <p className='pl-[24px] sm:p-0 font-semibold text-[56px] text-[#120055]'>
          Hi, I'm
        </p>
      </div>
      <div className='flex sm:flex justify-start items-center sm:justify-center sm:items-center '>
        <p className='pl-[24px] sm:p-0 font-semibold text-[56px] text-[#120055]'>
          Sreemikil T Manorahan
        </p>
      </div>
      <div className='flex justify-start sm:flex sm:justify-center sm:items-center sm:text-center'>
        <p className=' text-left px-[24px] pt-[24px] sm:pt-[36px]  font-normal max-w-[880px] text-[20px] text-black opacity-[64%]'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
  );
}

export default Hero;

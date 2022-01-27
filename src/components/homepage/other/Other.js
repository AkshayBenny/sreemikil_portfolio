import React from 'react';
import { Link } from 'react-router-dom';
import OtherCards from './OtherCards';
import { otherData } from '../../../data';

function Other() {
  return (
    <div className='px-[24px] pt-[120px] md:px-[64px]'>
      <div className='flex justify-center '>
        <h1
          className='text-[#120055 ]
pb-[48px] text-[32px] font-semibold md:pb-[72px] md:text-[40px]'
        >
          What Else I Do ?
        </h1>
      </div>
      <div className='flex-row justify-center gap-[24px] md:flex'>
        <Link to='/illustrations'>
          <div className='my-[16px] flex justify-center'>
            <OtherCards
              img={otherData[0].img}
              title={otherData[0].title}
              key={otherData[0].id}
            />
          </div>
        </Link>
        <div className='my-[16px] flex justify-center'>
          <OtherCards
            img={otherData[1].img}
            title={otherData[1].title}
            key={otherData[1].id}
          />
        </div>
        <div className='my-[16px] flex justify-center'>
          <OtherCards
            img={otherData[2].img}
            title={otherData[2].title}
            key={otherData[2].id}
          />
        </div>
      </div>
    </div>
  );
}

export default Other;

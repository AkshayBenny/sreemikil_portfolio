import React from 'react';
import OtherCards from './OtherCards';
import { otherData } from '../../data';

function Other() {
  return (
    <div>
      <div className='flex justify-center pt-[120px]'>
        <h1
          className='font-semibold text-[#120055
] text-[32px] md:text-[40px] pb-[48px] md:pb-[72px]'
        >
          What Else I Do ?
        </h1>
      </div>
      <div className='flex'>
        <OtherCards
          img={otherData[0].img}
          title={otherData[0].title}
          key={otherData[0].id}
        />
        <OtherCards
          img={otherData[1].img}
          title={otherData[1].title}
          key={otherData[1].id}
        />
        <OtherCards
          img={otherData[2].img}
          title={otherData[2].title}
          key={otherData[2].id}
        />
      </div>
    </div>
  );
}

export default Other;

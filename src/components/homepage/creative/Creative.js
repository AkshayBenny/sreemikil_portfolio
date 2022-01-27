import React from 'react';
import { Link } from 'react-router-dom';
import CreativeCard from './CreativeCard';
import { creativeData } from '../../../data';

function Creative() {
  return (
    <div className='flex-row items-center mt-[264px]'>
      <div className='flex justify-center pb-[16px]'>
        <h1 className='text-[18px] md:text-[24px] font-medium text-[#613EE2]'>
          Portfolio
        </h1>
      </div>
      <div className='flex justify-center '>
        <h1
          className='font-semibold text-[#120055
] text-[32px] md:text-[40px] pb-[48px] md:pb-[72px]'
        >
          All Creative Works
        </h1>
      </div>
      <div>
        <div className='md:flex md:justify-center items-center  flex-row md:gap-[48px] px-[24px] md:px-[64px] mb-[36px]'>
          <div className='flex justify-center mb-[36px] md:mb-[0px]'>
            <Link to={`creative/${creativeData[0].id}`}>
              <CreativeCard
                key={creativeData[0].id}
                img={creativeData[0].img}
                title={creativeData[0].title}
                subTitle={creativeData[0].subTitle}
              />
            </Link>
          </div>
          <div className='flex justify-center '>
            <Link to={`creative/${creativeData[1].id}`}>
              <CreativeCard
                key={creativeData[1].id}
                img={creativeData[1].img}
                title={creativeData[1].title}
                subTitle={creativeData[1].subTitle}
              />
            </Link>
          </div>
        </div>

        <div className='md:flex md:justify-center items-center  flex-row md:gap-[48px] px-[24px] md:px-[64px] mb-[36px]='>
          <div className='flex justify-center mb-[36px] md:mb-[0px]'>
            <Link to={`creative/${creativeData[2].id}`}>
              <CreativeCard
                key={creativeData[2].id}
                img={creativeData[2].img}
                title={creativeData[2].title}
                subTitle={creativeData[2].subTitle}
              />
            </Link>
          </div>
          <div className='flex justify-center '>
            <Link to={`creative/${creativeData[3].id}`}>
              <CreativeCard
                key={creativeData[3].id}
                img={creativeData[3].img}
                title={creativeData[3].title}
                subTitle={creativeData[3].subTitle}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creative;

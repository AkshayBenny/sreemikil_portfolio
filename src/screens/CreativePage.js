import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { creativeProjectData, creativeData } from '../data';
import CreativeCard from '../components/homepage/creative/CreativeCard';
import StickyBox from 'react-sticky-box';

function CreativePage() {
  const { id } = useParams();
  const project = creativeProjectData.find((project) => project.id === id);
  // console.log(project);
  return (
    <div className='mt-[36px] px-[24px] md:px-[64px]'>
      <div className='items-center justify-center gap-[48px] lg:flex'>
        <div className='max-w-[552px] lg:pl-[24px]'>
          <h1 className='text-[16px] font-semibold text-[#453091] '>
            Freelance Project
          </h1>
          <h1 className='pt-[16px] text-[56px] font-semibold text-[#120055]'>
            Airline Booking
          </h1>
          <p className='pt-[16px] text-[20px] font-normal	opacity-[64%]'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div>
          <img
            className='mt-[36px] h-[320px] rounded-[8px] object-cover md:h-[486px] lg:mt-[0px]'
            src='https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80'
            alt='creative project pic'
          />
        </div>
      </div>
      {/* '2nd section' */}
      <div className='flex items-start pt-[120px] md:pt-[90px]'>
        <StickyBox className='hidden md:flex' offsetTop={90}>
          <div className='hidden lg:block'>
            <h1 className='text-[24px]	font-medium text-[#453091]'>CONTENTS</h1>
            <div className='pt-[24px] text-[16px] font-semibold text-[#120055]'>
              <p className='pb-[20px]'>Introduction</p>
              <p className='pb-[20px]'>Objective</p>
              <p className='pb-[20px]'>Style Guide</p>
              <p className='pb-[20px]'>User Flow</p>
              <p className='pb-[20px]'>Wireframing</p>
              <p className='pb-[20px]'>Final UI</p>
            </div>
          </div>
        </StickyBox>

        <div className='flex-1 pl-[0] lg:pl-[143px]'>
          <div>
            <h1 className='text-[18px]	font-medium text-[#453091] lg:text-[24px]'>
              PROJECT
            </h1>
            <h1 className='pt-[16px]	text-[28px] font-bold text-[#120055] lg:text-[56px] lg:font-semibold'>
              CTracker - Track your foot and confirm your footprints.
            </h1>
            <p className='pt-[16px] text-[16px] font-normal opacity-[64%]	lg:text-[20px]'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit. Amet
              minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt nostrud amet.
            </p>
            <div className='flex-row pt-[72px] lg:flex lg:justify-between lg:gap-[224px]'>
              <div>
                <h1 className='pb-[16px] text-[18px] font-medium text-[#120055] lg:text-[24px]'>
                  Skills
                </h1>
                <p className='text-[20px]	font-normal opacity-[60%]'>
                  UI Design
                </p>
                <p className='pb-[24px]	text-[20px] font-normal opacity-[60%] lg:pb-[0px]'>
                  User Research
                </p>
              </div>
              <div>
                <h1 className='pb-[16px] text-[18px] font-medium text-[#120055] lg:text-[24px]'>
                  Team
                </h1>
                <p className='text-[20px]	font-normal opacity-[60%]'>Myself</p>
                <p className='text-[20px]	font-normal opacity-[60%]'>Akhil TJ</p>
                <p className='pb-[24px]	text-[20px] font-normal opacity-[60%] lg:pb-[0px]'>
                  Sagav "Lineman" Sugu
                </p>
              </div>
              <div className='pr-[0px] lg:pr-[20px]'>
                <h1 className='pb-[16px] text-[18px] font-medium text-[#120055] lg:text-[24px]'>
                  My Role
                </h1>
                <p className='pb-[24px]	text-[20px] font-normal opacity-[60%] lg:pb-[0px]'>
                  UI/UX Designer
                </p>
              </div>
            </div>
            <div>
              <h1 className='pt-[72px] text-[24px] font-semibold	text-[#120055] lg:text-[40px]'>
                Introduction
              </h1>
              <p className='pt-[16px] text-[16px] font-normal opacity-[64%]	lg:text-[20px]'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div>
              <h1 className='pt-[72px] text-[24px] font-semibold	text-[#120055] lg:text-[40px]'>
                Objectives
              </h1>
              <p className='pt-[16px] text-[16px] font-normal opacity-[64%]	lg:text-[20px]'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div>
              <h1 className='pt-[72px] text-[24px] font-semibold	text-[#120055] lg:text-[40px]'>
                Style Guide
              </h1>
              <p className='pt-[36px] pb-[24px] text-[20px] font-semibold text-[#453091] lg:text-[32px]'>
                Typography
              </p>
              {/* <img
                className='w-full'
                src='https://articulate-heroes.s3.amazonaws.com/dev-type-styles-begini2kr8s.png'
                alt='typography'
              /> */}
              <p className='pb-[22px] text-[51.49px] font-semibold text-[#000000] opacity-[60%]'>
                Heading 1
              </p>
              <p className='pb-[21px] text-[36.78px] font-semibold text-[#000000] opacity-[60%]'>
                Heading 2
              </p>
              <p className='pb-[21px] text-[29.43px] font-semibold text-[#000000] opacity-[60%]'>
                Subheading
              </p>
              <p className='pb-[19px]	 text-[22.07px] font-medium text-[#000000] opacity-[60%]'>
                Body Regular
              </p>
              <p className='pb-[29px]	 text-[18.39px] font-normal text-[#000000] opacity-[60%]'>
                Body Small
              </p>
              <p className='pb-[22px]	 text-[14.71px] font-normal text-[#000000] opacity-[60%]'>
                Extra Small
              </p>
              <p className='pb-[24px]	 text-[12.87px] font-normal text-[#000000] opacity-[60%]'>
                Caption
              </p>
              <p className='text-[14.71px]		 font-semibold text-[#000000] opacity-[60%]'>
                Button
              </p>
            </div>
            <div>
              <h1 className='pt-[16px] text-[20px] font-semibold text-[#453091] lg:text-[32px]'>
                Colors
              </h1>
              <div className='flex gap-[8px] pt-[21px] lg:gap-[11px] lg:pt-[24px]'>
                <div className='h-[65px] w-[65px] rounded-[200px] bg-[#120055] lg:h-[82px] lg:w-[82px]'></div>
                <div className='h-[65px] w-[65px] rounded-[200px] bg-[#453091] lg:h-[82px] lg:w-[82px]'></div>
                <div className='h-[65px] w-[65px] rounded-[200px] bg-[#613EE2] lg:h-[82px] lg:w-[82px]'></div>
                <div className='h-[65px] w-[65px] rounded-[200px] bg-[#9A81F4] lg:h-[82px] lg:w-[82px]'></div>
                <div className='h-[65px] w-[65px] rounded-[200px] bg-[#DCD3FC] lg:h-[82px] lg:w-[82px]'></div>
              </div>
            </div>
            <div>
              <h1 className='pt-[72px] pb-[16px] text-[24px]	font-semibold text-[#120055] lg:text-[40px]'>
                Userflow
              </h1>
              <div>
                <img
                  className='w-full'
                  src='https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2019Q4/user-flow-diagram/user-journey-flow.png'
                  alt='userflow'
                />
              </div>
            </div>
            <div>
              <h1 className='pt-[72px] pb-[16px] text-[24px] font-semibold	text-[#120055] lg:text-[40px]'>
                Wireframing
              </h1>
              <div>
                <img
                  className='w-full'
                  src='https://www.uxmatters.com/mt/archives/2020/10/images/Mobile-app-wireframes_Fig1.png'
                  alt='wireframe'
                />
              </div>
            </div>
            <div>
              <h1 className='pt-[72px] pb-[16px] text-[24px]	font-semibold text-[#120055] lg:text-[40px]'>
                Final UI
              </h1>
              <div>
                <img
                  className='w-full'
                  src='https://www.mobileappdaily.com/public/uploads/mad_96290885f9.png'
                  alt='ui'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[120px]'>
        <h1 className='pt-[72px] pb-[16px] text-center	text-[24px] font-semibold text-[#120055] lg:text-[40px]'>
          Other Works
        </h1>
        <div className='mt-[48px] flex-row items-center  px-[24px] lg:mt-[72px] lg:flex lg:justify-center lg:gap-[48px] lg:px-[64px]'>
          <div className='mb-[36px] flex justify-center lg:mb-[0px]'>
            <Link to={`${creativeData[0].id}`}>
              <CreativeCard
                key={creativeData[0].id}
                img={creativeData[0].img}
                title={creativeData[0].title}
                subTitle={creativeData[0].subTitle}
              />
            </Link>
          </div>
          <div className='flex justify-center '>
            <Link to={`${creativeData[1].id}`}>
              <CreativeCard
                key={creativeData[1].id}
                img={creativeData[1].img}
                title={creativeData[1].title}
                subTitle={creativeData[1].subTitle}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreativePage;

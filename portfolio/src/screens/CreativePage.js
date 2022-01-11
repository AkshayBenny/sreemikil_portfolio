import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { creativeProjectData, creativeData } from '../data';
import CreativeCard from '../components/homepage/creative/CreativeCard';

function CreativePage() {
  const { id } = useParams();
  const project = creativeProjectData.find((project) => project.id === id);
  console.log(project);
  return (
    <div className='px-[24px] md:px-[64px] mt-[36px]'>
      <div className='lg:flex justify-center items-center gap-[48px]'>
        <div className='lg:pl-[24px] max-w-[552px]'>
          <h1 className='text-[16px] font-semibold text-[#453091] '>
            Freelance Project
          </h1>
          <h1 className='font-semibold pt-[16px] text-[56px] text-[#120055]'>
            Airline Booking
          </h1>
          <p className='text-[20px] pt-[16px] font-normal	opacity-[64%]'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div>
          <img
            className='rounded-[8px] mt-[36px] lg:mt-[0px] h-[320px] md:h-[486px] object-cover'
            src='https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80'
            alt='creative project pic'
          />
        </div>
      </div>
      {/* '2nd section' */}
      <div className='mt-[120px] lg:mt-[96px] lg:flex gap-[143px]'>
        <div className='hidden lg:block'>
          <h1 className='font-medium	text-[24px] text-[#453091]'>CONTENTS</h1>
          <div className='font-semibold text-[16px] pt-[24px] text-[#120055]'>
            <p className='pb-[20px]'>Introduction</p>
            <p className='pb-[20px]'>Objective</p>
            <p className='pb-[20px]'>Style Guide</p>
            <p className='pb-[20px]'>User Flow</p>
            <p className='pb-[20px]'>Wireframing</p>
            <p className='pb-[20px]'>Final UI</p>
          </div>
        </div>

        <div>
          <div>
            <h1 className='font-medium	text-[18px] lg:text-[24px] text-[#453091]'>
              PROJECT
            </h1>
          </div>
          <div>
            <h1 className='font-bold	lg:font-semibold pt-[16px] text-[28px] lg:text-[56px] text-[#120055]'>
              CTracker - Track your foot and confirm your footprints.
            </h1>
            <p className='text-[16px] lg:text-[20px] pt-[16px] font-normal	opacity-[64%]'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit. Amet
              minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt nostrud amet.
            </p>
            <div className='flex-row lg:flex lg:justify-between lg:gap-[224px] pt-[72px]'>
              <div>
                <h1 className='font-medium text-[18px] lg:text-[24px] pb-[16px] text-[#120055]'>
                  Skills
                </h1>
                <p className='font-normal	text-[20px] opacity-[60%]'>
                  UI Design
                </p>
                <p className='font-normal	text-[20px] opacity-[60%] pb-[24px] lg:pb-[0px]'>
                  User Research
                </p>
              </div>
              <div>
                <h1 className='font-medium text-[18px] lg:text-[24px] pb-[16px] text-[#120055]'>
                  Team
                </h1>
                <p className='font-normal	text-[20px] opacity-[60%]'>Myself</p>
                <p className='font-normal	text-[20px] opacity-[60%]'>Akhil TJ</p>
                <p className='font-normal	text-[20px] opacity-[60%] pb-[24px] lg:pb-[0px]'>
                  Sagav Sugu KM
                </p>
              </div>
              <div className='pr-[0px] lg:pr-[20px]'>
                <h1 className='font-medium text-[18px] lg:text-[24px] pb-[16px] text-[#120055]'>
                  My Role
                </h1>
                <p className='font-normal	text-[20px] opacity-[60%] pb-[24px] lg:pb-[0px]'>
                  UI/UX Designer
                </p>
              </div>
            </div>
            <div>
              <h1 className='font-semibold text-[#120055] pt-[72px]	text-[24px] lg:text-[40px]'>
                Introduction
              </h1>
              <p className='text-[16px] lg:text-[20px] pt-[16px] font-normal	opacity-[64%]'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div>
              <h1 className='font-semibold text-[#120055] pt-[72px]	text-[24px] lg:text-[40px]'>
                Objectives
              </h1>
              <p className='text-[16px] lg:text-[20px] pt-[16px] font-normal	opacity-[64%]'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div>
              <h1 className='font-semibold text-[#120055] pt-[72px]	text-[24px] lg:text-[40px]'>
                Style Guide
              </h1>
              <p className='font-semibold text-[#453091] text-[20px] lg:text-[32px] pt-[36px] pb-[24px]'>
                Typography
              </p>
              {/* <img
                className='w-full'
                src='https://articulate-heroes.s3.amazonaws.com/dev-type-styles-begini2kr8s.png'
                alt='typography'
              /> */}
              <p className='font-semibold text-[#000000] opacity-[60%] text-[51.49px] pb-[22px]'>
                Heading 1
              </p>
              <p className='font-semibold text-[#000000] opacity-[60%] text-[36.78px] pb-[21px]'>
                Heading 2
              </p>
              <p className='font-semibold text-[#000000] opacity-[60%] text-[29.43px] pb-[21px]'>
                Subheading
              </p>
              <p className='font-medium	 text-[#000000] opacity-[60%] text-[22.07px] pb-[19px]'>
                Body Regular
              </p>
              <p className='font-normal	 text-[#000000] opacity-[60%] text-[18.39px] pb-[29px]'>
                Body Small
              </p>
              <p className='font-normal	 text-[#000000] opacity-[60%] text-[14.71px] pb-[22px]'>
                Extra Small
              </p>
              <p className='font-normal	 text-[#000000] opacity-[60%] text-[12.87px] pb-[24px]'>
                Caption
              </p>
              <p className='font-semibold		 text-[#000000] opacity-[60%] text-[14.71px]'>
                Button
              </p>
            </div>
            <div>
              <h1 className='pt-[16px] font-semibold text-[#453091] text-[20px] lg:text-[32px]'>
                Colors
              </h1>
              <div className='flex gap-[8px] lg:gap-[11px] pt-[21px] lg:pt-[24px]'>
                <div className='w-[65px] h-[65px] lg:w-[82px] lg:h-[82px] rounded-[200px] bg-[#120055]'></div>
                <div className='w-[65px] h-[65px] lg:w-[82px] lg:h-[82px] rounded-[200px] bg-[#453091]'></div>
                <div className='w-[65px] h-[65px] lg:w-[82px] lg:h-[82px] rounded-[200px] bg-[#613EE2]'></div>
                <div className='w-[65px] h-[65px] lg:w-[82px] lg:h-[82px] rounded-[200px] bg-[#9A81F4]'></div>
                <div className='w-[65px] h-[65px] lg:w-[82px] lg:h-[82px] rounded-[200px] bg-[#DCD3FC]'></div>
              </div>
            </div>
            <div>
              <h1 className='font-semibold text-[#120055] pt-[72px]	pb-[16px] text-[24px] lg:text-[40px]'>
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
              <h1 className='font-semibold text-[#120055] pt-[72px] pb-[16px]	text-[24px] lg:text-[40px]'>
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
              <h1 className='font-semibold text-[#120055] pt-[72px]	pb-[16px] text-[24px] lg:text-[40px]'>
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
        <h1 className='font-semibold text-[#120055] pt-[72px]	pb-[16px] text-[24px] lg:text-[40px] text-center'>
          Other Works
        </h1>
        <div className='lg:flex lg:justify-center items-center  flex-row lg:gap-[48px] px-[24px] lg:px-[64px] mt-[48px] lg:mt-[72px]'>
          <div className='flex justify-center mb-[36px] lg:mb-[0px]'>
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

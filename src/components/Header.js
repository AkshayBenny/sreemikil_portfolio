import { Link } from 'react-router-dom';

/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import { navigation, socialMedia } from '../data';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  // const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  console.log(navigation);

  // console.log(isActive);

  // const componentDidMount = () => {
  //   document.body.style.overflow = 'hidden';
  // };

  // const componentWillUnmount = () => {
  //   document.body.style.overflow = 'visible';
  // };

  // const scrollAlower = () => {
  //   if (isOpen === true) {
  //     componentDidMount();
  //   } else if (isOpen === false) {
  //     componentWillUnmount();
  //   }
  // };

  // scrollAlower();
  // setIsActive(false);

  return (
    <>
      <div className='sticky  top-0 z-50 min-h-full'>
        <Disclosure
          as='nav'
          className='firefox:bg-opacity-90 bg-white bg-opacity-30 backdrop-blur backdrop-filter'
        >
          {({ open }) => (
            <>
              <div className='mx-auto px-[24px] sm:px-[64px]'>
                <div className='flex h-16 items-center justify-between'>
                  <Link to='/'>
                    <div className='flex-shrink-0'>
                      <p className='text-[16px] font-semibold  text-[#1d0575]	'>
                        SreemikiLt
                      </p>
                    </div>
                  </Link>
                  <div className='hidden md:block'>
                    <div className='ml-10 flex items-baseline space-x-4'>
                      {navigation.map((item) => (
                        <div>
                          <a
                            key={item.name}
                            href={item.href}
                            className='text-[16px] font-semibold text-[#12005580] transition delay-100 ease-in-out hover:text-[#120055] active:text-[#120055]'
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='hidden md:block'>
                    <div className='ml-4 flex items-center md:ml-6'>
                      {socialMedia.map((item) => {
                        return (
                          <div className='pr-[24px]'>
                            <a
                              href={item.link}
                              target='_blank'
                              rel='noreferrer'
                            >
                              {item.logo}
                            </a>
                          </div>
                        );
                      })}

                      {/* Profile dropdown */}
                    </div>
                  </div>

                  <div className='-mr-2 flex md:hidden'>
                    {/* Mobile menu button */}
                    <Disclosure.Button
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                      className=' inline-flex items-center justify-center rounded-md p-2 text-[#120055] '
                    >
                      <span className='sr-only'>Open main menu</span>
                      {open ? (
                        <XIcon className='block h-6 w-6' aria-hidden='true' />
                      ) : (
                        <MenuIcon
                          className='block h-6 w-6'
                          aria-hidden='true'
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className='md:hidden'>
                <div className='space-y-1 px-2 pt-2 pb-3 sm:px-3'>
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as='a'
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-[16px] font-semibold text-[#120055] ',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}

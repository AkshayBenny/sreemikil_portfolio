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
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const componentDidMount = () => {
    document.body.style.overflow = 'hidden';
  };

  const componentWillUnmount = () => {
    document.body.style.overflow = 'visible';
  };

  const scrollAlower = () => {
    if (isOpen === true) {
      componentDidMount();
    } else if (isOpen === false) {
      componentWillUnmount();
    }
  };

  scrollAlower();

  return (
    <>
      <div className='min-h-full  sticky top-0 z-50'>
        <Disclosure
          as='nav'
          className='bg-white backdrop-filter backdrop-blur bg-opacity-30 firefox:bg-opacity-90'
        >
          {({ open }) => (
            <>
              <div className='mx-auto px-[24px] sm:px-[64px]'>
                <div className='flex items-center justify-between h-16'>
                  <Link to='/'>
                    <div className='flex-shrink-0'>
                      <p className='text-[#1d0575] text-[16px]  font-semibold	'>
                        SreemikiLt
                      </p>
                    </div>
                  </Link>
                  <div className='hidden md:block'>
                    <div className='ml-10 flex items-baseline space-x-4'>
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className='font-semibold text-[#120055] text-[16px]'
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className='hidden md:block'>
                    <div className='ml-4 flex items-center md:ml-6'>
                      {socialMedia.map((item) => {
                        return <div className='pr-[24px]'>{item.logo}</div>;
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
                      className=' inline-flex items-center justify-center p-2 rounded-md text-[#120055] '
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
                <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as='a'
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'font-semibold text-[#120055] text-[16px] ',
                        'block px-3 py-2 rounded-md text-base font-medium'
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

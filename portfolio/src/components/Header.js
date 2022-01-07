/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Portfolio', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
];

const socialMedia = [
  {
    logo: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='36'
        height='36'
      >
        <path fill='none' d='M0 0h24v24H0z' />
        <path
          d='M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z'
          fill='rgba(18,0,85,1)'
        />
      </svg>
    ),
  },
  {
    logo: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='36'
        height='36'
      >
        <path fill='none' d='M0 0h24v24H0z' />
        <path
          d='M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z'
          fill='rgba(18,0,85,1)'
        />
      </svg>
    ),
  },
  {
    logo: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='36'
        height='36'
      >
        <path fill='none' d='M0 0h24v24H0z' />
        <path
          d='M7.443 5.35c.639 0 1.23.05 1.77.198a3.83 3.83 0 0 1 1.377.544c.394.247.689.594.885 1.039.197.445.295.99.295 1.583 0 .693-.147 1.286-.491 1.731-.295.446-.787.841-1.377 1.138.836.248 1.475.693 1.868 1.286.394.594.64 1.336.64 2.177 0 .693-.148 1.286-.394 1.781-.246.495-.639.94-1.082 1.237a5.078 5.078 0 0 1-1.573.692c-.59.149-1.18.248-1.77.248H1V5.35h6.443zm-.394 5.54c.541 0 .984-.148 1.328-.395.344-.247.492-.693.492-1.237 0-.297-.05-.594-.148-.791-.098-.198-.246-.347-.442-.495-.197-.099-.394-.198-.64-.247-.246-.05-.491-.05-.787-.05H4v3.216h3.05zm.148 5.838c.295 0 .59-.05.836-.099a1.72 1.72 0 0 0 .688-.297 1.76 1.76 0 0 0 .492-.544c.098-.247.197-.544.197-.89 0-.693-.197-1.188-.59-1.534-.394-.297-.935-.445-1.574-.445H4v3.81h3.197zm9.492-.05c.393.396.983.594 1.77.594.541 0 1.033-.148 1.426-.395.394-.297.64-.594.738-.891h2.41c-.394 1.187-.984 2.028-1.77 2.572-.788.495-1.722.792-2.853.792a5.753 5.753 0 0 1-2.115-.396 3.93 3.93 0 0 1-1.574-1.088 3.93 3.93 0 0 1-.983-1.633c-.246-.643-.345-1.335-.345-2.127 0-.742.099-1.434.345-2.078a5.34 5.34 0 0 1 1.032-1.682c.443-.445.984-.84 1.574-1.088a5.49 5.49 0 0 1 2.066-.396c.836 0 1.574.149 2.213.495.64.346 1.131.742 1.525 1.336a6.01 6.01 0 0 1 .885 1.88c.098.692.147 1.385.098 2.176H16c0 .792.295 1.534.689 1.93zm3.098-5.194c-.344-.346-.885-.544-1.525-.544-.442 0-.787.099-1.082.247-.295.149-.491.347-.688.545a1.322 1.322 0 0 0-.344.692c-.05.248-.099.445-.099.643h4.426c-.098-.742-.344-1.236-.688-1.583zM15.459 6.29h5.508v1.336H15.46V6.29z'
          fill='rgba(18,0,85,1)'
        />
      </svg>
    ),
  },
  {
    logo: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='36'
        height='36'
      >
        <path fill='none' d='M0 0h24v24H0z' />
        <path
          d='M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z'
          fill='rgba(18,0,85,1)'
        />
      </svg>
    ),
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <>
      <div className='min-h-full  sticky top-0 z-50'>
        <Disclosure
          as='nav'
          className='bg-white backdrop-filter backdrop-blur bg-opacity-30 firefox:bg-opacity-90'
        >
          {({ open }) => (
            <>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                  <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                      <p className='text-[#120055] text-[16px]  font-semibold	'>
                        SreemikiLt
                      </p>
                    </div>
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
                  </div>
                  <div className='hidden md:block'>
                    <div className='ml-4 flex items-center md:ml-6'>
                      {socialMedia.map((item) => {
                        return <div>{item.logo}</div>;
                      })}

                      {/* Profile dropdown */}
                    </div>
                  </div>
                  <div className='-mr-2 flex md:hidden'>
                    {/* Mobile menu button */}
                    <Disclosure.Button className=' inline-flex items-center justify-center p-2 rounded-md text-[#120055] '>
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

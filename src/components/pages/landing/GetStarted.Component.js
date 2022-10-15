import React from 'react';
import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { getStartedData } from '../../../data/landing.data';

const GetStartedComponent = () => {
  return (
    <section className='landing__section-container'>
      {/* ====== title */}
      <h2 className='landing__section-heading'>Get Started</h2>

      {/* ====== tag line */}
      <p className=' -mt-4 text-gray-400 text-center text-md font-secondary'>
        Follow the steps bellow to be part of this community.
      </p>

      {/* ====== list */}
      <div className='grid grid-cols-4 gap-2'>
        {getStartedData &&
          getStartedData.map((item, idx) => (
            <div
              className={`flex flex-col gap-4 py-7 px-5 ${item.theme} transition-all duration-300 rounded-lg hover:shadow-lg  cursor-pointer items-center col-span-4 md:col-span-2 xl:col-span-1 group text-center max-w-[300px] hover:border`}
              key={idx}
            >
              <item.icon className={`${item.icon_color} w-8 h-8 font-medium`} />
              <p className='font-primary font-medium group-hover:text-gray-900 transition-all duration-300 text-gray-700'>
                {item.title}
              </p>
              <p className='font-secondary group-hover:text-gray-600 text-gray-400 text-sm '>
                {item.content}
              </p>
              <Link href='#'>
                <a
                  className={`opacity-0 group-hover:opacity-100 text-gray-400 hover:text-indigo-500 text-sm`}
                >
                  Explore
                  <ArrowLongRightIcon className='transition-all duration- -translate-x-5 w-6 h-4 inline-block text-sm opacity-0 group-hover:translate-x-0 group-hover:opacity-100 delay-100' />
                </a>
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
};

export default GetStartedComponent;

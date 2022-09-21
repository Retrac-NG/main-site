import React from 'react';
import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { getStartedData } from '../../data/landing.data';

const GetStartedComponent = () => {
  return (
    <section className='flex flex-col px-10 gap-10 w-full my-20 py-16 items-center justify-center text-center'>
      {/* ====== title */}
      <h2 className='section__heading'>Get Started</h2>

      {/* ====== tag line */}
      <p className='-mt-8 text-md text-gray-500/90'>
        Follow the steps bellow to be part of this community.
      </p>

      {/* ====== list */}
      <div className='grid grid-cols-4 gap-2'>
        {getStartedData &&
          getStartedData.map((item, idx) => (
            <div
              className={`flex flex-col gap-4 py-7 px-5 ${item.theme} transition-all duration-300 rounded-lg hover:shadow-lg  cursor-pointer items-center col-span-4 md:col-span-2 xl:col-span-1 group`}
              key={idx}
            >
              <item.icon className={`${item.icon_color} w-8 h-8 font-medium`} />
              <p>{item.title}</p>
              <p className='font-secondary text-gray-500 text-sm '>
                {item.content}
              </p>
              <Link href='#'>
                <a
                  className={`opacity-0 group-hover:opacity-100 text-gray-400 hover:text-indigo-500 text-sm group`}
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

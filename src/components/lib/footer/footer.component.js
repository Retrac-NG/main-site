import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  footerCompanyData,
  footerHelpData,
  footerLegalData,
} from '../../../data/footer.data';
import LogoImg from '../../../assets/logo/retrac-logo-3.png';

const FooterComponent = () => {
  return (
    <footer className='flex flex-col lg:items-center justify-center py-8 gap-16 w-full px-10 md:px-16 bg-gray-100'>
      {/* ====== items */}
      <div className='grid grid-cols-5 gap-10 max-w-[1000px] text-sm w-full'>
        {/* ====== Logo and socials */}
        <div className='col-span-5 lg:col-span-2  lg:items-center flex flex-col'>
          <div className='relative w-44 h-12 '>
            <Image src={LogoImg} layout='fill' />
          </div>
        </div>

        {/* ====== company section */}
        <div className=' col-span-2 lg:col-span-1 gap-1 flex flex-col px-2 '>
          <p className='text-gray-700 font-bold'>Company</p>

          {footerCompanyData &&
            footerCompanyData.map((item, index) => (
              <Link href={item.href} key={index} passHref>
                <a className='text-gray-500 font-regular hover:text-gray-800 transition-all duration-300'>
                  {item.text}
                </a>
              </Link>
            ))}
        </div>

        {/* ====== help and support section */}
        <div className='col-span-2 lg:col-span-1 gap-1 flex flex-col px-2'>
          <p className='text-gray-700 font-bold'>Help & Support</p>

          {footerHelpData &&
            footerHelpData.map((item, index) => (
              <Link href={item.href} key={index} passHref>
                <a className='text-gray-500 font-regular hover:text-gray-800 transition-all duration-300'>
                  {item.text}
                </a>
              </Link>
            ))}
        </div>

        {/* ====== legal section */}
        <div className='col-span-2 lg:col-span-1 gap-1 flex flex-col px-2'>
          <p className='text-gray-700 font-bold'>Legal</p>

          {footerLegalData &&
            footerCompanyData.map((item, index) => (
              <Link href={item.href} key={index} passHref>
                <a className='text-gray-500 font-regular hover:text-gray-800 transition-all duration-300'>
                  {item.text}
                </a>
              </Link>
            ))}
        </div>
      </div>

      <p className='font-medium text-sm text-gray-500 w-full text-center'>
        All rights reserved. Copyright © 2022 ReTrac.
      </p>
    </footer>
  );
};

export default FooterComponent;

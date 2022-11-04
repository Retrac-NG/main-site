import React from 'react';
import Link from 'next/link';
import { footerData } from '../../../data/auth.data';

const AuthFooterComponent = () => {
  return (
    <footer className='h-14 w-full absolute bottom-3 text-gray-200/90 font-secondary px-8 md:px-10 lg:px-80 flex flex-col gap-4 md:flex-row justify-between items-center text-sm'>
      <p>All rights reserved. Copyright © 2022 ReTrac.</p>

      <div className='flex gap-5'>
        {footerData &&
          footerData.map((item, index) => (
            <Link href={item.link} passHref key={index}>
              <a>{item.text}</a>
            </Link>
          ))}
      </div>
    </footer>
  );
};

export default AuthFooterComponent;

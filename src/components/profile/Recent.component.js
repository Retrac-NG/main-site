import React from 'react';
import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import ProfileItemCardComponent from '../lib/cards/ProfileItemCard.component';

const RecentComponent = () => {
  return (
    <section className='mt-12 w-full max-w-[1200px] flex flex-col gap-12 items-center'>
      {/* ====== title text */}
      <h2 className='landing__section-heading'>Community Activity</h2>

      {/* ====== recent div */}
      <div className=' w-full grid gap-7 grid-cols-4 justify-items-center items-center justify-center centent-center'>
        <ProfileItemCardComponent status='found' />
        <ProfileItemCardComponent status='lost' />
        <ProfileItemCardComponent status='found' />
        <ProfileItemCardComponent status='misplaced' />
      </div>

      <Link href='#' passHref>
        <a className='landing__hero-btn border-gray-500 text-gray-500 hover:text-green-600 hover:border-green-600 hover:shadow-md transition-all duration-300 group flex items-center justify-center '>
          View all
          <ArrowLongRightIcon className='landing__hero--btn-icon' />
        </a>
      </Link>
    </section>
  );
};

export default RecentComponent;

import Link from 'next/link';
import React, { useState } from 'react';
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';
import ProfileLayout from '../../../layouts/ProfileLayout';
import AssetsListComponent from '../../../components/lib/cards/ProfileAssetList';

const categories = ['Phones', 'Laptops', 'Bikes', 'Cars'];

const Assets = () => {
  const [selected, setSelected] = useState('Phones');

  return (
    <div className='w-full flex flex-col items-center'>
      <main className='main gap-10'>
        {/* ====== back button */}
        <Link href='/profile' passHref>
          <a className='absolute top-5 lg:top-8 lg:text-lg  left-2 md:left-10 transition-all duration-300 group hover:bg-gradient-to-br text-red-500 font-medium hover:text-red-600'>
            <ArrowLongLeftIcon className='inline-block w-8 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-3 group-hover:translate-x-0' />
            Back
          </a>
        </Link>
        {/* ====== title */}
        <h1 className='landing__section-heading'>Asset console</h1>

        {/* ====== category wrapper */}
        <div className='grid grid-cols-4 gap-5 items-center justify-center '>
          {categories.map((item, index) => (
            <div
              className={`px-6 py-2 col-span-2 md:col-span-1 rounded-md shadow-sm cursor-pointer hover:shadow-lg transition-all duration-300 border border-gray-300 ${
                selected === item && 'bg-gray-700 text-gray-50 shadow-xl'
              }`}
              key={index}
              onClick={() => setSelected(item)}
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
        <AssetsListComponent category={selected} />
      </main>
    </div>
  );
};

export default Assets;

Assets.layout = ProfileLayout;

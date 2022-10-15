import React from 'react';
import FoundItemComponent from '../../components/pages/profile/FoundItem.Component';
import ProfileLayout from '../../layouts/ProfileLayout';
import Head from 'next/head';

const Founditem = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center'>
      <Head>
        <title>ReTrac NG | Report AN ITEM</title>
        <meta name='description' content='Retrac Main site ' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex h-auto py-20 px-10 rounded-2xl shadow-2xl mb-24 bg-gradient-to-b from-indigo-50 to-white w-[97%] gap-20 items-center flex-col  justify-center z-20 -mt-12'>
        <FoundItemComponent />
      </main>
    </div>
  );
};

export default Founditem;

Founditem.layout = ProfileLayout;

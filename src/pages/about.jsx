import React from 'react';
import Head from 'next/head';
import AboutusComponent from '../components/about/Aboutus.Component';
import HeroComponent from '../components/about/Hero.Component';
import CommunityComponent from '../components/landing/Community.Component';
import AppLayout from '../layouts/AppLayout';
import GetInTouchComponent from '../components/about/GetInTouch.Component';

const About = () => {
  return (
    <div className='flex flex-col w-full min-h-screen items-center'>
      <Head>
        <title>ReTrac NG | About</title>
        <meta name='description' content='Retrac Main site ' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeroComponent />
      <main className='flex h-auto py-10 px-10 rounded-2xl shadow-2xl mb-10 bg-gradient-to-b from-indigo-50 to-white w-[97%] gap-10 items-center flex-col justify-center -mt-10'>
        <AboutusComponent />
        <GetInTouchComponent />
        <CommunityComponent />
      </main>
    </div>
  );
};

export default About;

About.layout = AppLayout;

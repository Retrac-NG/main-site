import React from 'react';
import AboutusComponent from '../components/about/Aboutus.Component';
import HeroComponent from '../components/about/Hero.Component';
import CommunityComponent from '../components/landing/Community.Component';
import GetStartedComponent from '../components/landing/GetStarted.Component';
import AppLayout from '../layouts/AppLayout';

const About = () => {
  return <div className='flex flex-col w-full min-h-screen items-center'>
    <HeroComponent />
    <main className='flex h-auto py-10 px-10 rounded-2xl shadow-2xl mb-10 bg-gradient-to-b from-indigo-50 to-white w-[97%] gap-10 items-center flex-col justify-center -mt-10'>
      <AboutusComponent />
      <GetStartedComponent />
      <CommunityComponent />

    </main>
  </div>;
};

export default About;

About.layout = AppLayout;

import React from 'react';
import Head from 'next/head';
import AboutusComponent from '../components/pages/about/Aboutus.Component';
import CommunityComponent from '../components/pages/landing/Community.Component';
import AppLayout from '../layouts/AppLayout';
import GetInTouchComponent from '../components/pages/about/GetInTouch.Component';
import HeroComponent from '../components/lib/hero/LandingHero.component';

const About = () => {
  return (
    <div className='flex flex-col w-full min-h-screen bg-gray-100 items-center'>
      <Head>
        <title>ReTrac NG | About</title>
        <meta name='description' content='Retrac Main site ' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeroComponent
        mainText='We"re constantly trying to express ourselves and actualize our
        dreams. If you have the opportunity to play this game'
        btnText='Explore'
      />
      <main className='main'>
        <AboutusComponent />
        <GetInTouchComponent />
        <CommunityComponent />
      </main>
    </div>
  );
};

export default About;

About.layout = AppLayout;

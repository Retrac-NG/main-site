import Head from 'next/head';
import CommunityComponent from '../components/pages/landing/Community';
import CTAComponent from '../components/pages/landing/CTA';
import GetStartedComponent from '../components/pages/landing/GetStarted';
import HeroComponent from '../components/lib/hero/LandingHero';
import TopSectionComponent from '../components/pages/landing/TopSection';
import AppLayout from '../layouts/AppLayout';
import axios from 'axios';
import { useEffect } from 'react';

export default function Home() {
  return (
    <div className='w-full h-auto bg-gray-100'>
      <Head>
        <title>ReTrac NG</title>
        <meta name='description' content='Retrac Main site ' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex flex-col w-full min-h-screen items-center'>
        <HeroComponent
          mainText='A citizens driven tech initiative designed to facilitate the recovery of
        stolen items. devices with unique identification details (UIDs) can be
        reported and tracked.'
          btnText='Explore'
        />

        {/* ====== Main content card */}
        <main className='main'>
          <TopSectionComponent />
          <GetStartedComponent />
          <CommunityComponent />
          <CTAComponent />
        </main>
      </div>
    </div>
  );
}

Home.layout = AppLayout;

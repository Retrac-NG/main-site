import Head from 'next/head';
import CommunityComponent from '../components/pages/landing/Community.Component';
import CTAComponent from '../components/pages/landing/CTA.Component';
import GetStartedComponent from '../components/pages/landing/GetStarted.Component';
import HeroComponent from '../components/lib/hero/LandingHero.component';
import TopSectionComponent from '../components/pages/landing/TopSection.Component';
import AppLayout from '../layouts/AppLayout';

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

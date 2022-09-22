import Head from 'next/head';
import CommunityComponent from '../components/landing/Community.Component';
import GetStartedComponent from '../components/landing/GetStarted.Component';
import HeroComponent from '../components/landing/Hero.Component';
import TopSectionComponent from '../components/landing/TopSection.Component';

export default function Home() {
  return (
    <div className='w-full h-auto bg-gray-100'>
      <Head>
        <title>ReTrac NG</title>
        <meta name='description' content='Retrac Main site ' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col w-full min-h-screen items-center'>
        <HeroComponent />

        {/* ====== Main content card */}
        <div className='flex h-auto py-20 px-10 rounded-2xl shadow-2xl mb-24 bg-gradient-to-b from-indigo-50 to-white w-[97%] gap-20 items-center flex-col justify-center -mt-14'>
          <TopSectionComponent />
          <GetStartedComponent />
          <CommunityComponent />
        </div>
      </main>
    </div>
  );
}

import Head from 'next/head';
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
        <div className='flex h-auto py-20 px-96 rounded-xl shadow-2xl mb-24 bg-gray-50 w-[97%] items-center flex-col justify-center -mt-10'>
          <TopSectionComponent />
          <GetStartedComponent />
        </div>
      </main>
    </div>
  );
}

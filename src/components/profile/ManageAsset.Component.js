import Link from 'next/link';
import Image from 'next/image';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const ManageAssetComponent = () => {
  return (
    <div className='bg-white '>
      <div className='mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8'>
        <div className=' rounded-lg bg-gradient-to-br from-green-600 to-blue-600 shadow-2xl lg:grid lg:grid-cols-2 lg:gap-4'>
          <div className='px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20'>
            <div className='lg:self-center'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                <span className='block'>Keep em Close.</span>
                <span className='block'>Asset Management made easy.</span>
              </h2>
              <p className='mt-4 text-lg font-secondary leading-6 text-gray-200 '>
                Be on the safe side, report missing assets faster and keep track
                of your assets all in one simple to use platorm.
              </p>

              <Link href='#' passHref>
                <a className='mt-8 py-3 inline-block landing__hero-btn group'>
                  Manage assets
                  <ArrowLongRightIcon className='landing__hero--btn-icon' />
                </a>
              </Link>
            </div>
          </div>
          <div className='aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1'>
            <div className='translate-x-6 translate-y-6 transform  object-cover object-center sm:translate-x-16 lg:translate-y-20 relative overflow-hidden rounded-xl shadow-2xl'>
              <Image
                src='https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGV2aWNlc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60'
                alt='device-png'
                layout='fill'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAssetComponent;

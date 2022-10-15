import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const CTAComponent = () => {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8'>
        <div className='overflow-hidden rounded-lg bg-gradient-to-br from-green-600 to-blue-600 shadow-2xl lg:grid lg:grid-cols-2 lg:gap-4'>
          <div className='px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20'>
            <div className='lg:self-center'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                <span className='block'>Join the safe side,</span>
                <span className='block'>Register for full access.</span>
              </h2>
              <p className='mt-4 text-lg font-secondary leading-6 text-gray-200'>
                To ensure transparency and accountability, it is required that
                all users complete a simple and free registration.
              </p>

              <Link href='#' passHref>
                <a className='mt-8 py-3 inline-block landing__hero-btn'>
                  Sign up for free
                </a>
              </Link>
            </div>
          </div>
          <div className='aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1'>
            <img
              className='translate-x-6 translate-y-6 transform rounded-md object-cover object-center sm:translate-x-16 lg:translate-y-20'
              src='https://images.unsplash.com/photo-1625490939776-17cef70ec079?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2aWNlc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60'
              alt='App screenshot'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAComponent;

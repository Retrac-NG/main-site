import Link from 'next/link';
import { assetsData } from '../../../data/profile.data';
import { PlusIcon } from '@heroicons/react/24/outline';

const AssetsListComponent = ({ category = '' }) => {
  return (
    <div className='bg-transparent'>
      <div className='mx-auto max-w-2xl py-5 px-4 sm:py-12 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='text-xl font-bold text-gray-900'>
          View and manage your {category}
        </h2>

        <div className='mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
          {assetsData.map(
            (asset) =>
              category === asset.category && (
                <div key={asset.id}>
                  <div className='relative'>
                    <div className='relative h-72 w-full overflow-hidden rounded-lg'>
                      <img
                        src={asset.imageSrc}
                        alt={asset.imageAlt}
                        className='h-full w-full object-cover object-center'
                      />
                    </div>
                    <div className='relative mt-4'>
                      {/* ====== phone brand */}
                      <h3 className='text-sm font-medium text-gray-900'>
                        {asset.brand}
                      </h3>

                      {/* ====== phone model */}
                      <p className='mt-1 text-sm text-gray-500'>
                        {asset.model}
                      </p>

                      {/* ====== phone color */}
                      <p className='mt-1 text-sm text-gray-500'>
                        {asset.color}
                      </p>
                    </div>
                    <div className='absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4'>
                      <div
                        aria-hidden='true'
                        className='absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50'
                      />
                      <p
                        className={`relative text-sm px-4 rounded-lg py-1 font-regular text-white ${
                          asset.status === 'lost' && 'bg-red-500'
                        } ${asset.status === 'safe' && 'bg-green-600'} ${
                          asset.status === 'misplaced' && 'bg-orange-600'
                        }`}
                      >
                        {asset.status}
                      </p>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <Link href='/profile/assets/test' passHref>
                      <a className='relative flex items-center justify-center rounded-md border shadow-sm border-gray-300 py-3 duration-300 px-8 text-sm font-medium text-gray-900 hover:bg-gray-100 text-center'>
                        Manage {asset.model}
                        <span className='sr-only'>, {asset.name}</span>
                      </a>
                    </Link>
                  </div>
                </div>
              )
          )}
        </div>
        <div className='mt-16 mb-20' />
        <iframe
          width='1080'
          height='720'
          frameborder='0'
          scrolling='no'
          allowfullscreen
          src='https://arcg.is/0vfiuL0'
        ></iframe>

        {/* ====== desktop Add button */}
        <Link href='#' passHref>
          <a className='col-span-4 self-center relative group bg-green-600 py-3 px-5 top-10 rounded-md text-gray-50 transition-all duration-300 hover:shadow-xl font-medium hidden md:inline-block pointer-events-none md:pointer-events-auto'>
            Add new {category.slice(0, -1)}
            <PlusIcon className='inline-block w-5 h-5 opacity-0 -translate-x-3 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ml-2' />
          </a>
        </Link>

        {/* ====== mobile add buttons */}
        <Link href='#' passHref>
          <a className='inline-block fixed bg-green-600 text-gray-50 font-medium right-5 rounded-full duration-300 shadow-2xl bottom-5 md:hidden py-4 px-4 z-10 hover:scale-110 md:pointer-events-none'>
            <PlusIcon className='inline-block w-7 h-7 shadow-2xl' />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AssetsListComponent;

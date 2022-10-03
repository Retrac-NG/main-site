import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { PlusIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import ProfileLayout from '../../../layouts/ProfileLayout';
import ProfileAssetEdit from '../../../components/lib/slideovers/profileAssetEdit.component';

const images = [
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1500&q=60',
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1500&q=60',
  'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1500&q=60',
  'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60 ',
];

const ProfileAssetManageItem = () => {
  const fileUploadRef = useRef();
  const [showEdit, setShowEdit] = useState(false);
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <main className='main px-3 lg:px-20 pt-10 md:-pt-20 md:flex-row gap-4 lg:gap-10 md:items-start'>
      {/* ====== Image Section */}
      <section className='flex flex-col items-center justify-center w-full lgh:w-1/2 h-auto gap-5 border-b pb-3 border-gray-300 md:border-none xl:w-[45%]'>
        {/* ====== main image */}
        <div className='relative w-full bg-green-500 h-96 md:h-[800px] shadow-lg overflow-hidden rounded-2xl'>
          <Image
            src={currentImage}
            alt='image'
            layout='fill'
            objectFit='cover'
          />
        </div>

        {/* ====== Images list showcase */}
        <span className='grid grid-cols-5 w-full h-14 sm:h-16 xl:h-24 gap-2 justify-items-center'>
          {images.map((image, index) => (
            <div
              className={`relative overflow-hidden h-full w-full  border border-gray-400 shadow-sm cursor-pointer hover:shadow-xl rounded-sm after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-gray-300/40 ${
                currentImage === image &&
                ' border-[4px] after:bg-gray-300/0 border-indigo-500 border-spacing-5'
              }`}
              key={index}
              onClick={() => setCurrentImage(image)}
            >
              <Image src={image} alt={index} layout='fill' objectFit='cover' />
            </div>
          ))}

          {/* ====== add image button */}
          {/* ====== only shows if image list has less than 5 items */}
          {images.length < 5 && (
            <div
              className='relative overflow-hidden h-full w-full  border border-gray-400 shadow-sm cursor-pointer hover:shadow-xl rounded-sm flex items-center justify-center'
              onClick={() => fileUploadRef.current.click()}
            >
              <PlusIcon className='text-gray-600 w-1/2 h-1/2' />
              <input
                type='file'
                className='hidden pointer-events-none'
                ref={fileUploadRef}
              />
            </div>
          )}
        </span>
      </section>

      {/* ====== details section */}
      <section className='w-full md:w-1/2 py-3 shrink-0 flex flex-col gap-8 xl:w-[55%] px-1 lg:px-6'>
        {/* ====== brand and model */}
        <span className='flex flex-col gap-2'>
          <h2 className='font-bold text-gray-700 text-2xl lg:text-3xl font-primary'>
            Samsung S21 Ultra
          </h2>
          <div>
            <p className='rounded-md shadow-md px-8 py-1 inline-block bg-green-600 text-gray-100 w-max text-sm'>
              Safe
            </p>
            <Link href='#' passHref>
              <a className='text-xs text-indigo-500 font-medium ml-3'>Change</a>
            </Link>
          </div>
        </span>

        {/* ====== description */}
        <span className='flex flex-col gap-2 pb-4 border-b border-gray-300'>
          <p className='font-medium text-lg'>Description</p>
          <p className='font-secondary font-light text-gray-500 text-sm text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            recusandae aliquid veniam odio error corrupti voluptas, soluta
            ducimus! Dolore fugit sapiente magni quae nobis amet nam impedit,
            animi omnis tempora! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nihil inventore quae natus ducimus laboriosam
            error assumenda velit praesentium. Quidem autem tempora ex quisquam
            est mollitia temporibus commodi ipsam earum omnis.
          </p>
        </span>

        {/* ====== features */}

        {/* ====== general features */}
        <span>
          <p className='font-medium text-gray-700'>Features</p>
          <ul className='list-disc pl-7 text-gray-600 text-sm font-secondary'>
            <li className=' list-item'>
              <b className=''>Model:</b> &nbsp;Samsung
            </li>

            <li className=' list-item'>
              <b className=''>Brand:</b> &nbsp;S21 Ultra
            </li>

            <li className=' list-item'>
              <b className=''>Year:</b> &nbsp;2018
            </li>

            <li className=' list-item'>
              <b className=''>Category:</b> &nbsp;Cars
            </li>

            <li className=' list-item'>
              <b className=''>Colour:</b> &nbsp;Matte black
            </li>

            <li className=' list-item'>
              <b className=''>Markings:</b> &nbsp;A little scratch on the screen
              on the bottom right side that goes half way through to the top.
            </li>
          </ul>
        </span>

        <div className='flex flex-col xl:flex-row gap-3 justify-center'>
          {/* ====== gadget features */}
          <span className='flex flex-col gap-2 py-5 px-3 lg:px-5 border border-gray-300 rounded-lg bg-indigo-50 w-full shadow-md'>
            <p className='font-medium text-gray-700'>Gadget features</p>
            <ul className=' list-disc pl-7 text-gray-600 text-sm font-secondary'>
              <li className=' list-item'>
                <b className=''>IMEI 1:</b> &nbsp;38948747928492374297
              </li>

              <li className=' list-item'>
                <b className=''>IMEI 2:</b> &nbsp;38948747928492374297
              </li>

              <li className=' list-item'>
                <b className=''>Serial No:</b> &nbsp;38948747928494297
              </li>
            </ul>
          </span>

          {/* ====== vehicle features */}
          <span className='flex flex-col gap-2 py-5 px-3 lg:px-5 border border-gray-300 rounded-lg bg-indigo-50 shadow-md w-full'>
            <p className='font-medium text-gray-700'>Vehicle features</p>
            <ul className=' list-disc pl-7 text-gray-600 text-sm font-secondary'>
              <li className=' list-item'>
                <b className=''>Year:</b> &nbsp;2018
              </li>

              <li className=' list-item'>
                <b className=''>VIN:</b> &nbsp;38948747928492374297
              </li>

              <li className=' list-item'>
                <b className=''>Plate No:</b> &nbsp;38948747928492374297
              </li>

              <li className=' list-item'>
                <b className=''>Chasis No:</b> &nbsp;38948747928492374297
              </li>
            </ul>
          </span>
        </div>

        {/* ====== location */}
        <div>
          <p className='font-medium text-gray-700'>Location</p>
          <ul className=' list-disc pl-7 text-gray-600 text-sm font-secondary'>
            <li className=' list-item'>
              <b className=''>State:</b> &nbsp;Lagos
            </li>

            <li className=' list-item'>
              <b className=''>Town:</b> &nbsp;Ikotun
            </li>

            <li className=' list-item'>
              <b className=''>L.G.A:</b> &nbsp;Oshodi-Isolo
            </li>
          </ul>
        </div>

        {/* ====== Edit button */}
        <button
          className='flex items-center border-2 py-2 w-max px-12 rounded-md shadow-sm transition-all duration-300 relative hover:shadow-lg border-gray-400  text-gray-400 hover:border-indigo-500  hover:text-indigo-500  font-medium after:w-full after:h-0 after:absolute after:bottom-0 after:left-0 hover:after:h-full after:bg-indigo-500/20 after:transition-all after:duration-300 group'
          onClick={() => setShowEdit((state) => !state)}
        >
          Edit asset
          <PencilSquareIcon
            className='inline-block w-5 h-5 ml-2 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0'
            onClick={() => setShowEdit((state) => !state)}
          />
        </button>
      </section>

      {/* ====== edit slideover */}
      <ProfileAssetEdit id='' state={showEdit} setState={setShowEdit} />
    </main>
  );
};

export default ProfileAssetManageItem;

ProfileAssetManageItem.layout = ProfileLayout;

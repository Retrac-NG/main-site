import React, { useState } from 'react';
import ProfileLayout from '../../layouts/ProfileLayout';
import Head from 'next/head';

const Founditem = () => {
  const [itemType, setItemType] = useState('gadget');

  return (
    <div className='w-full min-h-screen flex flex-col items-center'>
      <Head>
        <title>ReTrac NG | Report AN ITEM</title>
        <meta name='description' content='Retrac Main site ' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex h-auto py-20 px-10 rounded-2xl shadow-2xl mb-24 bg-gradient-to-b from-indigo-50 to-white w-[97%] gap-20 items-center flex-col  justify-center z-20 -mt-12'>
        <h2 className='landing__section-heading'>Report a found item</h2>
        {/* ======= comment here */}
        <div className='w-full max-w-[1024px] '>
          <div className='md:grid md:grid-cols-3 md:gap-6'>
            <div className='md:col-span-1'>
              <div className='px-4 sm:px-0'>
                <h3 className='text-lg font-medium leading-6 text-gray-900'>
                  General Information
                </h3>
                <p className='mt-1 text-sm text-gray-600'>
                  These are details that pertain both gadgets and vehicles.
                </p>
              </div>
            </div>
            <div className='mt-5 md:col-span-2 md:mt-0 w-full'>
              <form action='#' method='POST'>
                <div className='shadow sm:overflow-hidden sm:rounded-md w-full'>
                  <div className='space-y-6 bg-white px-4 py-5 sm:p-6 '>
                    <div className='grid grid-cols-4 gap-6 col-span-4'>
                      <div className='col-span-4 sm:col-span-2'>
                        <label
                          htmlFor='item-brand'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Item Brand
                        </label>
                        <input
                          type='text'
                          name='item-brand'
                          id='item-brand'
                          className='asset__edit-input'
                        />
                      </div>

                      {/* ======= item model */}
                      <div className='col-span-4 sm:col-span-2'>
                        <label
                          htmlFor='item-model'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Item Model
                        </label>
                        <input
                          type='text'
                          name='item-model'
                          id='item-model'
                          className='asset__edit-input'
                        />
                      </div>

                      {/* ======= oitem color */}
                      <div className='col-span-3 sm:col-span-2'>
                        <label
                          htmlFor='colour'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Item Colour
                        </label>
                        <input
                          type='text'
                          name='colour'
                          id='colour'
                          className='asset__edit-input'
                        />
                      </div>
                      {/* ======= type of item */}

                      <div className='col-span-4 sm:col-span-2 '>
                        <label
                          htmlFor='country'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Item type
                        </label>
                        <select
                          id='country'
                          name='country'
                          className='asset__edit-input'
                          onChange={(e) => setItemType(e.target.value)}
                        >
                          <option value='gadget'>Gadget</option>
                          <option value='vehicle'>Vehicle</option>
                        </select>
                      </div>
                    </div>

                    {/* ======= item markings */}
                    <div>
                      <label
                        htmlFor='about'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Item Markings
                      </label>
                      <div className='mt-1'>
                        <textarea
                          id='about'
                          name='about'
                          rows={3}
                          className='asset__edit-text-area'
                          placeholder='you@example.com'
                          defaultValue={''}
                        />
                      </div>
                      <p className='mt-2 text-sm text-gray-500'>
                        Brief description of the marks, stains and dents on the
                        item
                      </p>
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-700'>
                        Add item photos
                      </label>
                      <div className='mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'>
                        <div className='space-y-1 text-center'>
                          <svg
                            className='mx-auto h-12 w-12 text-gray-400'
                            stroke='currentColor'
                            fill='none'
                            viewBox='0 0 48 48'
                            aria-hidden='true'
                          >
                            <path
                              d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                          <div className='flex text-sm text-gray-600'>
                            <label
                              htmlFor='file-upload'
                              className='relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500'
                            >
                              <span>Upload a file</span>
                              <input
                                id='file-upload'
                                name='file-upload'
                                type='file'
                                className='sr-only'
                              />
                            </label>
                            <p className='pl-1'>or drag and drop</p>
                          </div>
                          <p className='text-xs text-gray-500'>
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* ======= location details  */}
                    <div className='grid grid-cols-4 gap-5'>
                      <div className='col-span-4'>
                        <label
                          htmlFor='street-address'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Street address
                        </label>
                        <input
                          type='text'
                          name='street-address'
                          id='street-address'
                          autoComplete='street-address'
                          className='asset__edit-input placeholder:text-gray-400'
                          placeholder='location found...'
                        />
                      </div>
                      <div className='col-span-4 sm:col-span-2 lg:col-span-2'>
                        <label
                          htmlFor='city'
                          className='block text-sm font-medium text-gray-700'
                        >
                          City
                        </label>
                        <input
                          type='text'
                          name='city'
                          id='city'
                          autoComplete='address-level2'
                          className='asset__edit-input'
                        />
                      </div>
                      <div className='col-span-4 sm:col-span-2 lg:col-span-2'>
                        <label
                          htmlFor='region'
                          className='block text-sm font-medium text-gray-700'
                        >
                          State / Province
                        </label>
                        <input
                          type='text'
                          name='region'
                          id='region'
                          autoComplete='address-level1'
                          className='asset__edit-input'
                        />
                      </div>
                      <div className='col-span-4 sm:col-span-2 lg:col-span-2'>
                        <label
                          htmlFor='postal-code'
                          className='block text-sm font-medium text-gray-700'
                        >
                          ZIP / Postal code
                        </label>
                        <input
                          type='text'
                          name='postal-code'
                          id='postal-code'
                          autoComplete='postal-code'
                          className='asset__edit-input'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* ======= comment */}
        {/* ======= Details pertaining gadgets only */}
        {/* ======= comment */}
        <div className='mt-10 sm:mt-0 w-full max-w-[1024px]'>
          <div className='md:grid md:grid-cols-3 md:gap-6'>
            <div className='md:col-span-1'>
              <div className='px-4 sm:px-0'>
                <h3 className='text-lg font-medium leading-6 text-gray-900'>
                  Gadget Data
                </h3>
                <p className='mt-1 text-sm text-gray-600'>
                  Information that pertains to just gadget items
                </p>
              </div>
            </div>
            <div className='mt-5 md:col-span-2 md:mt-0'>
              <form action='#' method='POST'>
                <div className='overflow-hidden shadow sm:rounded-md'>
                  <div className='bg-white px-4 py-5 sm:p-6'>
                    <div className='grid grid-cols-6 gap-6'>
                      {/* ======= imei 1 */}
                      <div className='col-span-6 sm:col-span-3'>
                        <label
                          htmlFor='imei-1'
                          className='block text-sm font-medium text-gray-700'
                        >
                          IMEI 1
                        </label>
                        <input
                          type='text'
                          name='imei-1'
                          id='imei-1'
                          disabled={itemType === 'gadget' ? false : true}
                          className={`asset__edit-input ${
                            itemType !== 'gadget' &&
                            'border-red-400 cursor-not-allowed'
                          }`}
                        />
                      </div>

                      {/* ======= imei 2 */}
                      <div className='col-span-6 sm:col-span-3'>
                        <label
                          htmlFor='imei-2'
                          className='block text-sm font-medium text-gray-700'
                        >
                          IMEI 2
                        </label>
                        <input
                          type='text'
                          name='imei-2'
                          id='imei-2'
                          disabled={itemType === 'gadget' ? false : true}
                          className={`asset__edit-input ${
                            itemType !== 'gadget' &&
                            'border-red-400 cursor-not-allowed'
                          }`}
                        />
                      </div>

                      <div className='col-span-6 sm:col-span-4'>
                        <label
                          htmlFor='serial-number'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Serial Number
                        </label>
                        <input
                          type='text'
                          name='serial-number'
                          id='serial-number'
                          disabled={itemType === 'gadget' ? false : true}
                          className={`asset__edit-input ${
                            itemType !== 'gadget' &&
                            'border-red-400 cursor-not-allowed'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* ======= comment */}
        {/* ======= Details pertaining gadgets only */}
        {/* ======= comment */}
        <div className='mt-10 sm:mt-0 w-full max-w-[1024px]'>
          <div className='md:grid md:grid-cols-3 md:gap-6'>
            <div className='md:col-span-1'>
              <div className='px-4 sm:px-0'>
                <h3 className='text-lg font-medium leading-6 text-gray-900'>
                  Vehicle Data
                </h3>
                <p className='mt-1 text-sm text-gray-600'>
                  Information that pertains to just vehicles that have been
                  found.
                </p>
              </div>
            </div>
            <div className='mt-5 md:col-span-2 md:mt-0'>
              <form action='#' method='POST'>
                <div className='overflow-hidden shadow sm:rounded-md'>
                  <div className='bg-white px-4 py-5 sm:p-6'>
                    <div className='grid grid-cols-6 gap-6'>
                      {/* ======= VIN number */}
                      <div className='col-span-6 sm:col-span-3'>
                        <label
                          htmlFor='imei-1'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Vehicle Identification Number (VIN)
                        </label>
                        <input
                          type='text'
                          name='imei-1'
                          id='imei-1'
                          disabled={itemType === 'vehicle' ? false : true}
                          className={`asset__edit-input ${
                            itemType !== 'vehicle' &&
                            'border-red-400 cursor-not-allowed'
                          }`}
                        />
                      </div>

                      {/* ======= plate number */}
                      <div className='col-span-6 sm:col-span-3'>
                        <label
                          htmlFor='plate-number'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Plate Number
                        </label>
                        <input
                          type='text'
                          name='plate-number'
                          id='plate-number'
                          disabled={itemType === 'vehicle' ? false : true}
                          className={`asset__edit-input ${
                            itemType !== 'vehicle' &&
                            'border-red-400 cursor-not-allowed'
                          }`}
                        />
                      </div>

                      {/* ======= chaisis number */}
                      <div className='col-span-6 sm:col-span-4'>
                        <label
                          htmlFor='chasis-number'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Chasis Number
                        </label>
                        <input
                          type='text'
                          name='chasis-number'
                          id='chasis-number'
                          disabled={itemType === 'vehicle' ? false : true}
                          className={`asset__edit-input ${
                            itemType !== 'vehicle' &&
                            'border-red-400 cursor-not-allowed'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
                    <button
                      type='submit'
                      className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className='hidden sm:block' aria-hidden='true'>
          <div className='py-5'>
            <div className='border-t border-gray-200' />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Founditem;

Founditem.layout = ProfileLayout;

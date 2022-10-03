import React, { useState, useRef, useEffect } from 'react';
import { Listbox } from '@headlessui/react';
import { Transition, Fragment } from '@headlessui/react';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/24/outline';

const ProfileEditAssetForm = () => {
  const [year, setYear] = useState(1999);
  const categoryInputRef = useRef();

  /* ====== generate 25 years from 1999 */
  let years = [];
  let baseYear = 1999;

  while (years.length < 25) {
    years.push(baseYear);
    baseYear++;
  }

  /* ====== prevent easy category breach */
  useEffect(() => {
    categoryInputRef.current.setAttribute('disabled', true);
  });

  return (
    <form className='w-full grid grid-cols-2 gap-4'>
      {/* ====== brand */}
      <div className='asset__edit-container '>
        <label htmlFor='brand'>Brand</label>
        <input className='asset__edit-input' type='text' name='brand' />
      </div>

      {/* ====== model */}
      <div className='asset__edit-container '>
        <label htmlFor='model'>model</label>
        <input className='asset__edit-input' type='text' name='model' />
      </div>

      {/* ====== year */}
      <div className='asset__edit-container '>
        <label htmlFor='year'>Year</label>
        <div className='col-span-2 md:col-span-1 h-10 cursor-pointer'>
          <Listbox value={year} onChange={setYear}>
            <div className='relative h-full'>
              <Listbox.Button className='relative w-full rounded-lg bg-white py-2 pl-3 pr-10 text-left  shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 h-full border border-indigo-300 cursor-pointer focus-visible:ring-offset-indigo-300 sm:text-sm'>
                <span className='block truncate h-full'>{year}</span>
                <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                  <ChevronUpDownIcon
                    className='h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                  {years.map((year, index) => (
                    <Listbox.Option
                      key={index}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? 'bg-indigo-100 text-indigo-900'
                            : 'text-gray-900'
                        }`
                      }
                      value={year}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {year}
                          </span>
                          {selected ? (
                            <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600'>
                              <CheckIcon
                                className='h-5 w-5'
                                aria-hidden='true'
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>

      {/* ====== category */}
      <div className='asset__edit-container '>
        <label htmlFor='category'>Category</label>
        <input
          className='asset__edit-input border-red-400 cursor-not-allowed'
          type='text'
          disabled
          ref={categoryInputRef}
          value='Cars'
          name='category'
          readOnly
        />
      </div>

      {/* ====== colour */}
      <div className='asset__edit-container '>
        <label htmlFor='colour'>Colour</label>
        <input className='asset__edit-input' type='text' name='colour' />
      </div>

      {/* ====== status */}
      <div className='asset__edit-container '>
        <label htmlFor='status'>Status</label>
        <input className='asset__edit-input' type='text' name='status' />
      </div>

      {/* ====== description */}
      <div className='asset__edit-container col-span-2'>
        <label htmlFor='description'>Asset description</label>
        <textarea
          className='asset__edit-text-area '
          type='text'
          placeholder='describe what this asset is and how it is popularly identified...'
          name='description'
        />
      </div>

      {/* ====== markings */}
      <div className='asset__edit-container col-span-2'>
        <label htmlFor='markings'>Markings</label>
        <textarea
          className='asset__edit-text-area '
          type='text'
          placeholder='describe unique marks or scratches on asset...'
          name='markings'
        />
      </div>

      {/* ====== gadget section  */}
      {/* ====== separator */}
      <div className='relative col-span-2 mt-12'>
        <div className='absolute inset-0 flex items-center' aria-hidden='true'>
          <div className='w-full border-t border-gray-300' />
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-white px-2 text-sm text-gray-700'>
            Gadget details
          </span>
        </div>
      </div>

      {/* ====== imei_1 */}
      <div className='asset__edit-container '>
        <label htmlFor='imei_1'>IMEI 1</label>
        <input className='asset__edit-input' type='text' name='imei_1' />
      </div>

      {/* ====== imei_2 */}
      <div className='asset__edit-container '>
        <label htmlFor='imei_2'>IMEI 2</label>
        <input className='asset__edit-input' type='text' name='imei_2' />
      </div>

      {/* ====== serial_no */}
      <div className='asset__edit-container col-span-2'>
        <label htmlFor='serial_no'>Serial No</label>
        <input className='asset__edit-input' type='text' name='serial_no' />
      </div>

      {/* ====== Behicle section  */}
      {/* ====== separator */}
      <div className='relative col-span-2 mt-12'>
        <div className='absolute inset-0 flex items-center' aria-hidden='true'>
          <div className='w-full border-t border-gray-300' />
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-white px-2 text-sm text-gray-700'>
            Behicle details
          </span>
        </div>
      </div>

      {/* ====== plate_no */}
      <div className='asset__edit-container '>
        <label htmlFor='plate_no'>Plate Number</label>
        <input className='asset__edit-input' type='text' name='plate_no' />
      </div>

      {/* ====== chasis_no */}
      <div className='asset__edit-container '>
        <label htmlFor='chasis_no'>Chasis Number</label>
        <input className='asset__edit-input' type='text' name='chasis_no' />
      </div>

      {/* ====== vin */}
      <div className='asset__edit-container col-span-2'>
        <label htmlFor='vin'>Vehicle ID Number (VIN)</label>
        <input className='asset__edit-input' type='text' name='vin' />
      </div>

      {/* ====== separator */}
      <button
        type='button'
        className='border border-gray-300 flex items-center justify-center py-3 w-full rounded-lg shadow-md col-span-2 mt-8 mb-4 bg-indigo-600 font-medoium text-gray-50 hover:shadow-xl transition-all duration-300'
      >
        Save changes
      </button>
    </form>
  );
};

export default ProfileEditAssetForm;

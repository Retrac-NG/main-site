import React, { useRef, useEffect } from 'react';

import YearSelector from '../misc/yearSelector';

const ProfileEditAssetForm = () => {
  const categoryInputRef = useRef();

  /* ====== generate 25 years from 1999 */
  let years = [];
  let baseYear = 1999;

  while (years.length < 30) {
    years.push(baseYear);
    baseYear++;
  }

  /* ====== prevent easy category breach */
  useEffect(() => {
    categoryInputRef.current.setAttribute('disabled', true);
  });

  return (
    <form className='asset__edit-form'>
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
      <YearSelector />

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

      {/* ====== Vehicle section  */}
      {/* ====== separator */}
      <div className='relative col-span-2 mt-12'>
        <div className='absolute inset-0 flex items-center' aria-hidden='true'>
          <div className='w-full border-t border-gray-300' />
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-white px-2 text-sm text-gray-700'>
            Vehicle details
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

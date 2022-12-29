import React, { useRef } from 'react';
import YearSelector from '../misc/yearSelector';

const ProfileAddGadgetForm = () => {
  const fileInputRef = useRef();
  return (
    <form className='asset__edit-form'>
      {/* -- Brand */}
      <div className='asset__edit-container'>
        <label>Brand</label>
        <input className='asset__edit-input' type='text' required />
      </div>

      {/* -- model */}
      <div className='asset__edit-container'>
        <label>Model</label>
        <input className='asset__edit-input' type='text' required />
      </div>

      {/* -- year */}
      <YearSelector />

      {/* -- color */}
      <div className='asset__edit-container'>
        <label>Color</label>
        <input className='asset__edit-input' type='text' required />
      </div>

      {/* -- imei 1 */}
      <div className='asset__edit-container'>
        <label>IMEI 1</label>
        <input className='asset__edit-input' type='text' required />
      </div>

      {/* -- imei 2 */}
      <div className='asset__edit-container'>
        <label>IMEI 2</label>
        <input className='asset__edit-input' type='text' required />
      </div>

      {/* -- serial number */}
      <div className='asset__edit-container col-span-2'>
        <label>Serial Number</label>
        <input className='asset__edit-input' type='text' required />
      </div>

      {/* -- Add images */}
      <div className='asset__edit-container col-span-2 border py-2 px-4 rounded-lg border-gray-300 border-dashed'>
        <label>Add images of asset</label>
        <input
          className='hidden'
          ref={fileInputRef}
          type='file'
          required
          accept='image/*'
        />
        <div
          className='py-2 w-32 flex items-center justify-center border rounded-lg cursor-pointer shadow-md transition-all duration-300 border-indigo-300 hover:border-teal-500 mt-2'
          onClick={() => fileInputRef.current.click()}
        >
          <p className='text-sm font-secondary'>Upload image</p>
        </div>
        {/* -- list the images  */}
        <ul className='list-disc mt-2 mx-10' role='listbox'>
          <li>Image 1</li>
          <li>Image 2</li>
          <li>Image 3</li>
        </ul>
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

      {/* -- -------------- */}
      {/* -- location */}
      {/* -- -------------- */}
      <div className='relative col-span-2 mt-12'>
        <div className='absolute inset-0 flex items-center' aria-hidden='true'>
          <div className='w-full border-t border-gray-300' />
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-white px-2 text-sm text-gray-700'>Location</span>
        </div>
      </div>

      {/* -- state */}
      <div className='asset__edit-container'>
        <label>State</label>
        <input className='asset__edit-input' type='text' required />
      </div>

      {/* -- LGA */}
      <div className='asset__edit-container'>
        <label>Lga</label>
        <input className='asset__edit-input' type='text' required />
      </div>

      {/* -- town */}
      <div className='asset__edit-container'>
        <label>Town</label>
        <input className='asset__edit-input' type='text' required />
      </div>

      {/* ====== separator */}
      <button
        type='button'
        className='border border-gray-300 flex items-center justify-center py-3 w-full rounded-lg shadow-md col-span-2 mt-8 mb-4 bg-indigo-600 font-medoium text-gray-50 hover:shadow-xl transition-all duration-300'
      >
        Add Item
      </button>
    </form>
  );
};

export default ProfileAddGadgetForm;
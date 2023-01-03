import axios from 'axios';
import { useQuery } from 'react-query';
import YearSelector from '../misc/yearSelector';
import useUser from '../../../hooks/user/useUser';
import React, { useRef, useState, useEffect } from 'react';
import { fileUploader } from '../../../utils/firebase-file-upload';

const ProfileAddGadgetForm = () => {
  // -- user whose profile the asset would be added  -->
  const { user } = useUser();
  const fileInputRef = useRef();
  const [images, setImages] = useState([]);
  const [assetDetails, setAssetDetails] = useState({ status: 'safe' });

  const { data, isLoading, isSuccess, error, refetch } = useQuery(
    'add-new-gadget',
    async () =>
      await axios.post('/api/v1/assets/add-gadget', {
        assetData: assetDetails,
        userId: user.id,
        location,
      }),
    {
      retry: false,
      enabled: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    }
  );

  // -- upload files -->
  const uploadImages = async () => {
    const url = `${user.email}/gadgets/${assetDetails.brand}-${assetDetails.model}-${assetDetails.year}`;
    const { data: fileData } = await fileUploader(url, images);
    setAssetDetails((state) => ({ ...state, images: fileData }));
    alert('✅ Images saved');
  };

  // -- handle add asset -->
  const handleAddAsset = async () => {
    refetch();
  };

  useEffect(() => {
    if (isSuccess) console.log(data);
    if (error) console.error(error);
  }, [data, isLoading, isSuccess]);

  // -- monitor length of image files selected -->
  useEffect(() => {
    images.length >= 5
      ? (fileInputRef.current.disabled = true)
      : (fileInputRef.current.disabled = false);
  }, [images]);

  // -- handle asset input change -->
  const handleAssetDataChange = (target_1, target_2) => (e) => {
    !target_2 &&
      setAssetDetails((state) => ({
        ...state,
        [target_1]: e.target.value,
      }));

    target_2 &&
      setAssetDetails((state) => ({
        ...state,
        [target_1]: {
          ...state[target_1],
          [target_2]: e.target.value,
        },
      }));
  };

  // -- year setter -->
  const yearSetter = (year) => setAssetDetails((state) => ({ ...state, year }));

  return (
    <form className='asset__edit-form'>
      {/* -- Brand */}
      <div className='asset__edit-container'>
        <label>Brand</label>
        <input
          className='asset__edit-input'
          type='text'
          required
          onChange={(e) => handleAssetDataChange('brand')(e)}
        />
      </div>

      {/* -- model */}
      <div className='asset__edit-container'>
        <label>Model</label>
        <input
          className='asset__edit-input'
          type='text'
          required
          onChange={(e) => handleAssetDataChange('model')(e)}
        />
      </div>

      {/* -- year */}
      <YearSelector setter={yearSetter} />

      {/* -- color */}
      <div className='asset__edit-container'>
        <label>Color</label>
        <input
          className='asset__edit-input'
          type='text'
          required
          onChange={(e) => handleAssetDataChange('colour')(e)}
        />
      </div>

      {/* -- imei 1 */}
      <div className='asset__edit-container'>
        <label>IMEI 1</label>
        <input
          className='asset__edit-input'
          type='text'
          required
          onChange={(e) => handleAssetDataChange('imei_1')(e)}
        />
      </div>

      {/* -- imei 2 */}
      <div className='asset__edit-container'>
        <label>IMEI 2</label>
        <input
          className='asset__edit-input'
          type='text'
          required
          onChange={(e) => handleAssetDataChange('imei_2')(e)}
        />
      </div>

      {/* -- serial number */}
      <div className='asset__edit-container col-span-2'>
        <label>Serial Number</label>
        <input
          className='asset__edit-input'
          type='text'
          required
          onChange={(e) => handleAssetDataChange('serial_no')(e)}
        />
      </div>

      {/* -- Add images */}
      <div className='asset__edit-container col-span-2 border py-2 px-4 rounded-lg border-gray-300 border-dashed'>
        <label>Add images of asset</label>
        <input
          className='hidden'
          ref={fileInputRef}
          type='file'
          accept='image/*'
          // this code avoids selecting the same file twice
          onChange={(e) => {
            e.target.files[0] &&
              setImages((images) => [
                ...images.filter(
                  (image) => image.name !== e.target.files[0].name
                ),
                e.target.files[0],
              ]);
          }}
        />
        <span className='flex w-full justify-between gap-2 mt-2'>
          <div
            className='py-2 w-40 flex items-center justify-center border rounded-lg cursor-pointer shadow-md transition-all duration-300 border-indigo-300 hover:border-teal-500'
            onClick={() => fileInputRef.current.click()}
          >
            <p className='text-sm font-secondary'>
              {images.length >= 5 ? 'Max files selected' : 'Upload image'}
            </p>
          </div>
          <div
            className='py-2 w-40 flex items-center justify-center bg-indigo-500 border rounded-lg cursor-pointer shadow-md transition-all duration-300 border-indigo-300 hover:border-teal-500'
            onClick={uploadImages}
          >
            <p className='text-sm font-secondary text-gray-50'>Save</p>
          </div>
        </span>

        {/* -- list the images - Has list item with delete functionalities*/}
        <ul className='list-disc mt-2 mx-10' role='listbox'>
          {images &&
            images.map((img, idx) => (
              <li key={idx}>
                <div className='flex items-center justify-between text-xs'>
                  {img.name}
                  <span
                    className='text-rose-500 cursor-pointer px-2'
                    onClick={() => {
                      setImages((images) =>
                        images.filter((image) => image.name !== img.name)
                      );
                    }}
                  >
                    delete
                  </span>
                </div>
              </li>
            ))}
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
          onChange={(e) => handleAssetDataChange('description')(e)}
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
          onChange={(e) => handleAssetDataChange('markings')(e)}
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
        <input
          className='asset__edit-input'
          type='text'
          required
          onChange={handleAssetDataChange('location', 'state')}
        />
      </div>

      {/* -- LGA */}
      <div className='asset__edit-container'>
        <label>Lga</label>
        <input
          className='asset__edit-input'
          type='text'
          required
          onChange={handleAssetDataChange('location', 'lga')}
        />
      </div>

      {/* -- town */}
      <div className='asset__edit-container'>
        <label>Town</label>
        <input
          className='asset__edit-input'
          type='text'
          required
          onChange={handleAssetDataChange('location', 'town')}
        />
      </div>

      {/* ====== separator */}
      <button
        type='button'
        className='border border-gray-300 flex items-center justify-center py-3 w-full rounded-lg shadow-md col-span-2 mt-8 mb-4 bg-indigo-600 font-medoium text-gray-50 hover:shadow-xl transition-all duration-300'
        onClick={handleAddAsset}
      >
        Add Item
      </button>
    </form>
  );
};

export default ProfileAddGadgetForm;

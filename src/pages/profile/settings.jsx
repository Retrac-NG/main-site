import axios from 'axios';
import useUser from '../../hooks/user/useUser';
import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import ProfileLayout from '../../layouts/ProfileLayout';

const ProfileSettings = () => {
  const { user } = useUser();

  const [updateData, setUpdateData] = useState(user);

  const { data, isLoading, error, isSuccess, refetch } = useQuery(
    'update-user-data',
    async () =>
      await axios.post('/api/v1/users/updateUser', {
        id: user.id,
        data: updateData,
      }),
    {
      enabled: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    }
  );

  // -- set fileds o the new data from server -->
  useEffect(() => {
    setUpdateData(user);
  }, [user]);

  useEffect(() => {
    if (isSuccess) alert('✅ Update successful');
    if (error) alert(' ❌Error performing update');
  }, [data]);

  // -- hndle form change -->
  const handleFormChange = (target) => (e) => {
    setUpdateData({ ...updateData, [target]: e.target.value });
  };

  return (
    <div className='w-full flex flex-col items-center'>
      <main className='main'>
        <h3 className='landing__section-heading'>Profile Settings</h3>

        {/* ====== profile details */}
        <form className='grid grid-cols-6 gap-4 w-full max-w-[1100px]'>
          {/* ====== firstname */}
          <div className='profile__settings-container'>
            <label htmlFor='firstname'>Firstname</label>
            <input
              type='text'
              className='profile__settings-input'
              name='firstname'
              value={updateData.first_name}
              onChange={(e) => handleFormChange('first_name')(e)}
              placeholder='John'
            />
          </div>

          {/* ====== lastname */}
          <div className='profile__settings-container'>
            <label htmlFor='lastname'>Lastname</label>
            <input
              type='text'
              className='profile__settings-input '
              name='lastname'
              value={updateData.last_name}
              onChange={(e) => handleFormChange('last_name')(e)}
              placeholder='Doe'
            />
          </div>

          {/* ====== othernames */}
          <div className='profile__settings-container'>
            <label htmlFor='othernames'>Other names</label>
            <input
              type='text'
              className='profile__settings-input '
              name='othernames'
              value={updateData.other_name}
              onChange={(e) => handleFormChange('other_name')(e)}
              placeholder='Williams'
            />
          </div>

          {/* ====== email */}
          <div className='profile__settings-container  col-span-6 lg:col-span-4'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='profile__settings-input'
              name='email'
              value={updateData.email}
              placeholder='name@example.com'
              onChange={(e) => handleFormChange('email')(e)}
            />
          </div>

          {/* ====== phone */}
          <div className='profile__settings-container col-span-6 lg:col-span-2'>
            <label htmlFor='phone'>phone</label>
            <input
              type='tel'
              className='profile__settings-input'
              name='phone'
              value={updateData.phone}
              onChange={(e) => handleFormChange('phone')(e)}
              placeholder='+234 XXX XXXX XXX'
            />
          </div>

          {/* ====== old password */}
          <div className='profile__settings-container col-span-6 lg:col-span-2'>
            <label htmlFor='old_password'>Old password</label>
            <input
              type='password'
              className='profile__settings-input'
              name='old_password'
              placeholder=''
            />
          </div>

          {/* ====== new password */}
          <div className='profile__settings-container col-span-6 lg:col-span-2'>
            <label htmlFor='new_password'>New password</label>
            <input
              type='password'
              className='profile__settings-input'
              name='new_password'
              placeholder=''
              disabled
            />
          </div>

          {/* ====== confirm password */}
          <div className='profile__settings-container col-span-6 lg:col-span-2'>
            <label htmlFor='confirm_password'>Confirm password</label>
            <input
              type='password'
              className='profile__settings-input'
              name='confirm_password'
              placeholder=''
              disabled
            />
          </div>

          {/* ====== address */}
          <div className='profile__settings-container col-span-6'>
            <label htmlFor='address'>Address</label>
            <textarea
              type='tel'
              className='profile__settings-textarea'
              name='address'
              value={updateData.address}
              placeholder='Full address here...'
              onChange={(e) => handleFormChange('address')(e)}
            />
          </div>

          {/* ====== Update button */}
          <button
            type='button'
            className='col-span-6 py-3 mt-6 border border-gray-300 rounded-lg shadow-md bg-indigo-600 text-gray-100 font-medium'
            onClick={refetch}
          >
            {isLoading ? 'loading' : 'Update profile'}
          </button>
        </form>
      </main>
    </div>
  );
};

export default ProfileSettings;

ProfileSettings.layout = ProfileLayout;

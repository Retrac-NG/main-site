import React from 'react';
import ProfileLayout from '../../layouts/ProfileLayout';

const ProfileSettings = () => {
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
              placeholder='name@example.com'
            />
          </div>

          {/* ====== phone */}
          <div className='profile__settings-container col-span-6 lg:col-span-2'>
            <label htmlFor='phone'>phone</label>
            <input
              type='tel'
              className='profile__settings-input'
              name='phone'
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
              placeholder='Full address here...'
            />
          </div>

          {/* ====== Update button */}
          <button
            type='button'
            className='col-span-6 py-3 mt-6 border border-gray-300 rounded-lg shadow-md bg-indigo-600 text-gray-100 font-medium'
          >
            Update profile
          </button>
        </form>
      </main>
    </div>
  );
};

export default ProfileSettings;

ProfileSettings.layout = ProfileLayout;

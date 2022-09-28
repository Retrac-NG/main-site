import React from 'react';
import FooterComponent from '../components/lib/footer/footer.component';
import ProfileHeroComponent from '../components/profile/ProfileHero.component';

const ProfileLayout = ({ children }) => {
  return (
    <div className='w-full flex flex-col min-h-screen bg-gray-100'>
      <ProfileHeroComponent />
      {children}
      <FooterComponent />
    </div>
  );
};

export default ProfileLayout;

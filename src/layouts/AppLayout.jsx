import React from 'react';
import NavBarComponent from '../components/lib/navbar/navbar';
import FooterComponent from '../components/lib/footer/footer';

const AppLayout = ({ children }) => {
  return (
    <div className='w-full h-auto flex flex-col items-center'>
      {/* ====== Navbar */}
      <NavBarComponent />
      {children}
      {/* ====== footer */}
      <FooterComponent />
    </div>
  );
};

export default AppLayout;

import React from 'react';
import NavBarComponent from '../components/lib/navbar/navbar.component';
import FooterComponent from '../components/lib/footer/footer.component';

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

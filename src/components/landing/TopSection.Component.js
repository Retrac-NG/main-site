import React from 'react';

const TopSectionComponent = () => {
  return (
    <div className='landing__section-container xl:px-36'>
      <h1 className='landing__section-heading'>Know ReTrac</h1>
      <p className='text-gray-400 text-lg mt-10 font-secondary'>
        <b className='text-green-400'>ReTrac</b> is a citizens driven tech
        initiative designed to facilitate the recovery of stolen items. It
        provides a central portal where lost, stolen and found items with unique
        identification details (UIDs) can be reported and tracked.
      </p>
      <p className='text-gray-400 text-lg font-secondary'>
        The goal of ReTrac is to discourage the buying and selling of stolen
        items as well as encourage citizens to report stolen or lost items they
        may have found or bought unintentionally.
      </p>
      <p className='text-gray-400 text-lg font-secondary'>
        Buyers and/or dealers of pre-owned items can confirm that those items
        have not been stolen or sourced illegally by conducting a SEARCH on
        ReTrac NG portal using UIDs of those items or devices.
      </p>
    </div>
  );
};

export default TopSectionComponent;

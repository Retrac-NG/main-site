import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ActionCardComponent from '../../components/profile/ActionCard.component';
import ProfileLayout from '../../layouts/ProfileLayout';
import ManageAssetComponent from '../../components/profile/ManageAsset.Component';
import RecentComponent from '../../components/profile/Recent.component';

const Profile = () => {
  const [ActionData, setActionData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get('/api/profile');
      setActionData(response.data.actionSection);
      console.log(response.data);
    })();
  }, []);

  return (
    <div className='w-full min-h-screen flex flex-col items-center'>
      {/* ====== Main content card */}
      <main className='flex h-auto py-20 px-10 rounded-2xl shadow-2xl mb-24 bg-gradient-to-b from-indigo-50 to-white w-[97%] gap-20 items-center flex-col  justify-center z-20 -mt-12'>
        <div className='flex flex-col gap-5 items-center justify-center text-center'>
          <h2 className='landing__section-heading'>Quick actions</h2>
          <h3 className='-mt-2 text-gray-400 text-center text-md font-secondary'>
            Perform quick action and contribute to the ReTrac NG community in
            minutes.
          </h3>
        </div>

        <div className='grid grid-cols-4 w-full  max-w-[1200px] gap-6 overflow-hidden justify-items-center -mt-3 mb32'>
          {ActionData &&
            ActionData.map((item, index) => (
              <ActionCardComponent
                image={item.image}
                text={item.text}
                desc={item.desc}
                key={index}
              />
            ))}
        </div>

        <ManageAssetComponent />
        <RecentComponent />
      </main>
    </div>
  );
};

export default Profile;

Profile.layout = ProfileLayout;

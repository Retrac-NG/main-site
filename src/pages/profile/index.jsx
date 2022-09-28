import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ActionCardComponent from '../../components/profile/ActionCard.component';
import ProfileLayout from '../../layouts/ProfileLayout';
import ManageAssetCOmponent from '../../components/profile/ManageAsset.Component';

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
        <div className='grid grid-cols-4 w-full  max-w-[1200px] gap-6 overflow-hidden justify-items-center '>
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

        <ManageAssetCOmponent />
      </main>
    </div>
  );
};

export default Profile;

Profile.layout = ProfileLayout;

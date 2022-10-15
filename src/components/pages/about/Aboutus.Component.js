import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AboutusComponent = () => {
  const [aboutusdata, setAboutusdata] = useState([]);
  useEffect(() => {
    (async () => {
      await axios.get('/api/about').then((res) => setAboutusdata(res.data));
    })();
  }, []);

  return (
    <div className='landing__section-container xl:px-36'>
      <h1 className='landing__section-heading'>About Us</h1>
      {aboutusdata &&
        aboutusdata.map((item, ind) => (
          <section
            key={ind}
            className='flex flex-shrink flex-col items-center '
          >
            <p className='text-gray-400 text-lg mt-4 font-secondary w-[65%] '>
              {item.text1}
            </p>
          </section>
        ))}
    </div>
  );
};

export default AboutusComponent;

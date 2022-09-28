import React from 'react';
import Image from 'next/image';

const ActionCardComponent = ({ image, text, desc }) => {
  return (
    <div className='flex w-full h-[260px] flex-col items-center justify-center text-2xl text-gray-100 relative cursor-pointer group col-span-4 md:col-span-2 lg:col-span-1 border rounded-xl border-gray-400 hover:shadow-2xl transition-all duration-300 max-w-sm overflow-hidden'>
      {/* ====== bg image */}
      <div className='w-full h-full lg:h-0 bottom-0 group-hover:h-full absolute overflow-hidden group-hover:opacity-100 lg:opacity-0  transition-all duration-500 '>
        <Image src={image} layout='fill' objectFit='cover' />
      </div>

      <div className='z-10 flex flex-col items-center gap-4 justify-center  group-hover:bg-gradient-to-b  group-hover:from-[rgba(10,40,60,.5)] to-[rgba(10,20,30,.6)] group-hover:to-[rgba(0,0,0,.6)] w-full h-full transition-all duration-300 bg-gradient-to-b  from-[rgba(10,40,60,.5)] lg:from-gray-100 lg:to-gray-100 overflow-hidden'>
        <p className='font-primary text-2xl w-[80%] text-white  text-center lg:text-gray-800 z-20 font-bold group-hover:text-white'>
          {text}
        </p>
        <p className='text-sm text-center  w-3/4 font-medium font-secondary lg:translate-y-10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 lg:group-hover:translate-y-0'>
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ActionCardComponent;

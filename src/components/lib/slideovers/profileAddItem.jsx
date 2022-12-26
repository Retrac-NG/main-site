import React from 'react';
import { Transition } from '@headlessui/react';

const profileAddItem = ({ category, state, setState }) => {
  return (
    <Transition
      show={state}
      as='div'
      enter='ease-out duration-300'
      enterFrom='tranlsate-y-full opacity-0'
      enterTo='opacity-100 translate-y-0'
      className='width-full y-full bg-gray-600'
    >
      <p
        className=' px-5 py-1 rounded-md border-2 shadow-md border-gray-400 cursor-pointer'
        onClick={() => setState((state) => !state)}
      >
        CLose Transition
      </p>
    </Transition>
  );
};

export default profileAddItem;

import React, { useState, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/24/outline';

const YearSelector = ({ setter }) => {
  const [year, setYear] = useState(1999);

  /* ====== generate 30 years from 1999 */
  let years = [];
  let baseYear = 1999;

  while (years.length < 30) {
    years.push(baseYear);
    baseYear++;
  }

  return (
    <div className='asset__edit-container '>
      <label htmlFor='year'>Year</label>
      <div className='col-span-2 md:col-span-1 h-10 cursor-pointer'>
        <Listbox value={year} onChange={setYear}>
          <div className='relative h-full'>
            <Listbox.Button className='asset__edit-listbox-btn'>
              <span className='block truncate h-full'>{year}</span>
              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                <ChevronUpDownIcon
                  className='h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='asset__edit-listbox-options'>
                {years.map((year, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active
                          ? 'bg-indigo-100 text-indigo-900'
                          : 'text-gray-900'
                      }`
                    }
                    value={year}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {year}
                        </span>
                        {selected ? (
                          <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600'>
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
};

export default YearSelector;

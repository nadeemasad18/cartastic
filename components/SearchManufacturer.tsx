import Image from 'next/image';
import { Combobox, Transition } from '@headlessui/react';
import { manufacturers } from '@/constants/constants';
import { SearchManufacturerProps } from '@/types';
import { useState, Fragment } from 'react';

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');

  // Filter manufacturers based on the search query.
  const filteredManufacturers = query === ''
    ? manufacturers // If search query is empty, return all manufacturers.
    : manufacturers.filter((item) => {
      // For non-empty queries, set conditions.

      // Format the item and query by converting to lowercase and removing whitespace.
      const formattedItem = item.toLowerCase().replace(/\s+/g, '');
      const formattedQuery = query.toLowerCase().replace(/\s+/g, '');

      // Check if the formatted item includes the formatted query.
      return formattedItem.includes(formattedQuery);
    });

  return (
    <div className='search-manufacturer'>
      <Combobox value ={manufacturer} onChange={setManufacturer}> 
      {/* as we are selecting a manufacturer, a state within the search bar is being updated in the background. */}
        <div className='relative  w-full '>
          {/* Button for the combobox. Click on the icon to see the complete dropdown */}
          <Combobox.Button className='absolute top-[14px]'>
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => {
              return manufacturer;
            }}
            onChange={(e) => setQuery(e.target.value)}
          />

          {/* Transition for displaying the options */}
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')} // Resets Query after the completion of transition
          >
            <Combobox.Options
              // className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
              // static
            >
            
             {/* Loop through and display filtered manufacturer options  */}
              {filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                      active ? "bg-primary-blue text-white"
                        : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {/* {item} */} 
                    {/* instead of rending items, we can do the following */}
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                )
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchManufacturer;

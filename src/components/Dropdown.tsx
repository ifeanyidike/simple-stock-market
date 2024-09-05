import React, { useState, useRef, useEffect } from 'react';
import { ArrowDownIcon, SearchIcon } from '../assets/icons';
import { DropdownProps } from '../types';

const Dropdown: React.FC<DropdownProps> = ({ 
    items, 
    defaultValue,
    hasSearch = true, 
    handleSearch = () => {},
    callback= () => {},
    status = {loading: false, error: ''}
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(defaultValue);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSelect = (item: DropdownProps["items"][0]) => {
    setSelectedItem(item);
    setIsOpen(false);
    setSearchTerm('');
    callback(item);
  };

  return (
    <div className="relative inline-block w-full" ref={dropdownRef}>
      <div
        className="flex items-center justify-between border border-gray-300 rounded-md px-4 py-2 cursor-pointer bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedItem?.label}</span>
        <span>
            <ArrowDownIcon width='16' height='16' />
        </span>
      </div>

      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
         { hasSearch && <div className='flex items-center border-b border-gray-300 pr-2'>
              <input
                type="text"
                className="w-full p-2 outline-none"
                placeholder="Type something and hit enter to search..."
                value={searchTerm}
                onChange={handleSearchData}
                onKeyDown={(e) => {
                    if(e.key === "Enter") {
                        handleSearch((e.target as HTMLInputElement).value)
                    }
                }}
              />
              <SearchIcon />  
          </div>}
          <ul className="max-h-40 overflow-y-auto">
            {status.loading ? <span className='px-4 py-2'>Loading...</span> : status.error ? <div className='px-6 py-4'>{status.error}</div> : 
                items.map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelect(item)}
                  >
                 {item.label}
                  </li>
                ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

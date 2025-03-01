'use client';

import { ArrowDown2, Racoon, Search } from '@/icons';
import { useEffect, useState } from 'react';

export function User() {
  const [openSearchMenu, setOpenSearchMenu] = useState(false);

  const handleChange = () => {
    setOpenSearchMenu(!openSearchMenu);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenSearchMenu(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='flex items-center gap-8'>
      {openSearchMenu && (
        <div className='flex items-center px-2 gap-2 max-w-[250px] w-full border-white/30 border duration-300 opacity-100'>
          <Search className='text-white h-8 w-8' />

          <input
            type='text'
            className='bg-transparent w-full focus:outline-none'
          />
        </div>
      )}

      {!openSearchMenu && (
        <button
          onClick={handleChange}
          className='cursor-pointer text-white hover:text-white/50 duration-150'
        >
          <Search className='h-8 w-8' />
        </button>
      )}

      <div className='flex items-center gap-2 group cursor-pointer relative'>
        <Racoon className='w-8 h-8 text-white bg-green-800 rounded-[4px]' />

        <ArrowDown2 className='w-3 h-3 text-white group-hover:rotate-180 duration-300' />

        <div className='bg-black/80 group-hover:flex hidden absolute top-10 w-[200px] right-1'>
          <span className='text-center text-white w-full py-2'>
            close Session in Netflix
          </span>
        </div>
      </div>
    </div>
  );
}

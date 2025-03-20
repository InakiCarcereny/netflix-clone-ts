'use client';

import { useLocalStorage } from '@/hooks';
import { ArrowDown2, Racoon, Search } from '@/icons';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function User() {
  const router = useRouter();
  const [openSearchMenu, setOpenSearchMenu] = useState(false);
  const { setValue } = useLocalStorage('values', {});

  const handleChange = () => {
    setOpenSearchMenu(!openSearchMenu);
  };

  const handleCloseSession = () => {
    setValue({
      values: {},
    });

    router.push('/');
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
      {openSearchMenu ? (
        <div className='flex items-center px-2 gap-2 max-w-[250px] w-full border-white/30 border duration-300 opacity-100 bg-black/80'>
          <Search className='text-white h-8 w-8' />
          <input
            type='text'
            className='bg-transparent w-full focus:outline-none text-white placeholder:text-zinc-300'
            placeholder='Titles, persons, genre'
          />
        </div>
      ) : (
        <button
          onClick={handleChange}
          className='cursor-pointer text-white hover:text-white/50 duration-150'
        >
          <Search className='h-8 w-8' />
        </button>
      )}

      <div className='flex items-center gap-3 group cursor-pointer relative'>
        <Racoon className='w-8 h-8 text-white bg-black rounded-[4px]' />
        <ArrowDown2 className='w-3 h-3 text-white group-hover:rotate-180 duration-300' />

        {/* Menú desplegable */}
        <div className='bg-black/80 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto absolute top-14 w-[200px] right-1 z-50 transition-opacity duration-300'>
          <button
            onClick={handleCloseSession}
            className='text-center text-white w-full py-2 cursor-pointer hover:underline-offset-1'
          >
            Close Session in Netflix
          </button>
        </div>
      </div>
    </div>
  );
}

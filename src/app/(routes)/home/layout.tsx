import { ArrowDown2, Netflix, Racoon, Search } from '@/icons';
import { ReactNode } from 'react';
import { Nav } from '@/components';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <section className='max-w-[1720px] w-full mx-auto h-full'>
        <header className='flex items-center justify-between w-full h-[100px] bg-black/30'>
          <div className='flex items-center gap-8'>
            <h1>
              <Netflix className='w-24 h-24' />
            </h1>

            <Nav />
          </div>

          <div className='flex items-center gap-8'>
            <button className='cursor-pointer'>
              <Search className='text-white h-8 w-8 cru' />
            </button>

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
        </header>

        {children}
      </section>
    </>
  );
}

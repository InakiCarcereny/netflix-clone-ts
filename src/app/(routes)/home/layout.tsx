import { Info, Netflix, Play } from '@/icons';
import { ReactNode } from 'react';
import { Nav, User } from '@/components';

import firstFilm from '@/mocks/data.json';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className='w-full h-[100px] bg-black/10'>
        <div className='max-w-[1720px] mx-auto w-full h-full flex items-center justify-between'>
          <div className='flex items-center gap-8'>
            <h1>
              <Netflix className='w-24 h-24' />
            </h1>

            <Nav />
          </div>

          <User />
        </div>
      </header>

      <section className='max-w-[1720px] mx-auto w-full h-[700px] flex flex-col relative'>
        <div className='absolute top-68 flex flex-col gap-4 max-w-[500px] w-full'>
          <h2 className='text-7xl text-white font-semibold'>
            {firstFilm[0].title}
          </h2>
          <p className='text-white/90 font-bold text-2xl'>
            {firstFilm[0].description}
          </p>

          <div className='flex items-center gap-4'>
            <button className='flex items-center gap-4 bg-white text-black font-semibold text-xl px-12 py-3 rounded-[4px]'>
              <Play className='w-8 h-8' />
              Reproduce
            </button>

            <button className='flex items-center gap-4 bg-[#313030]/80 text-white font-semibold text-xl px-12 py-3 rounded-[4px]'>
              <Info className='w-8 h-8' />
              More Info
            </button>
          </div>
        </div>
      </section>

      <img
        src={firstFilm[8].poster[1]}
        className='absolute top-0 left-0 w-full h-[800px] object-cover -z-10'
      />

      <main className='max-w-[1720px] mx-auto w-full h-full'>{children}</main>
    </>
  );
}

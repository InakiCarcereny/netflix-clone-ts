import { Info, Netflix, Play } from '@/icons';
import { ReactNode } from 'react';
import { Nav, User } from '@/components';
import { fontClass } from '@/utils';

import firstFilm from '@/mocks/data.json';

const BUTTONS = [
  { label: 'Reproduce', icon: <Play /> },
  { label: 'More Info', icon: <Info /> },
];

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

      <section className='max-w-[1720px] mx-auto w-full h-[800px] flex flex-col relative'>
        <div className='absolute top-90 flex flex-col gap-4 max-w-[500px] w-full'>
          <h2
            className={`text-8xl text-white font-semibold ${fontClass(firstFilm[4].id)}`}
          >
            {firstFilm[4].title}
          </h2>
          <p className='text-white/90 font-bold text-xl'>
            {firstFilm[4].description}
          </p>

          <div className='flex items-center gap-4'>
            {BUTTONS.map((button) => (
              <button
                key={button.label}
                className='flex items-center gap-4 bg-white text-black font-semibold text-xl px-12 py-3 rounded-[4px]'
              >
                {button.icon}

                {button.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <img
        src={firstFilm[4].poster[1]}
        className='absolute top-0 left-0 w-full h-[900px] object-cover -z-10'
      />

      <main className='max-w-[1720px] mx-auto w-full h-full'>{children}</main>
    </>
  );
}

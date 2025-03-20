'use client';

/* eslint-disable @next/next/no-img-element */

import { fontClass, randomMovie } from '@/utils';
import { BUTTONS } from '@/lib';
import { useModalStore } from '@/store';
import { InfoModal } from '@/components';

export default function Home() {
  const actualMovie = randomMovie();
  const { openModal } = useModalStore();

  return (
    <>
      <section className='max-w-[1720px] mx-auto w-full h-[800px] flex flex-col relative'>
        <div className='absolute top-90 flex flex-col gap-4 max-w-[500px] w-full'>
          <h2
            className={`text-8xl text-white font-semibold ${fontClass(actualMovie.id)}`}
          >
            {actualMovie.title}
          </h2>
          <p className='text-white/90 font-bold text-xl'>
            {actualMovie.description}
          </p>

          <div className='flex items-center gap-4'>
            {BUTTONS.map((button) => (
              <button
                key={button.label}
                className={`flex items-center gap-4 font-bold text-xl px-10 py-1 rounded-[4px] w-full cursor-pointer ${button.className}`}
                onClick={() => openModal('info', actualMovie)}
              >
                {button.icon}

                {button.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <img
        src={actualMovie.poster[1]}
        className='absolute top-0 left-0 w-full h-[900px] object-cover -z-10'
        alt={actualMovie.title}
      />

      <InfoModal />
    </>
  );
}

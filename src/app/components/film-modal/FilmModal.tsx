/* eslint-disable @next/next/no-img-element */
'use client';

import { ArrowRight, Cross } from '@/icons';
import { useModalStore } from '@/store';
import { Button } from '../ui/button/Button';

export function FilmModal() {
  const { isOpen, type, data, closeModal } = useModalStore();

  console.log(data);

  return (
    <>
      {isOpen && type === 'film' && data && (
        <div className='inset-0 w-full h-full absolute flex flex-col items-center justify-center bg-black/50'>
          <article className='w-[600px] h-[650px] bg-[#1e1e1e] flex flex-col z-50 border-zinc-700 border-1 rounded-xl relative overflow-hidden'>
            <img
              src={data.poster}
              alt={data.title}
              className='w-full h-[350px]'
            />

            <button
              onClick={closeModal}
              className='text-white absolute top-4 right-4 cursor-pointer'
            >
              <Cross className='h-14 w-14' />
            </button>

            <div className='px-10 py-10 flex flex-col gap-4'>
              <h2 className='text-white font-semibold text-4xl'>
                {data.title}
              </h2>

              <ul className='flex items-center gap-2'>
                <li className='bg-[#313030] text-white/60 px-2 py-1 rounded-[4px]'>
                  {data.age}
                </li>
                <li className='bg-[#313030] text-white/60 px-2 py-1 rounded-[4px]'>
                  {data.genre}
                </li>
                <li className='bg-[#313030] text-white/60 px-2 py-1 rounded-[4px]'>
                  {data.year}
                </li>
              </ul>

              <p className='text-white/80 text-pretty'>{data.description}</p>

              <Button
                label='Start Now'
                icon={<ArrowRight />}
                classNmame='max-w-[250px]'
              />
            </div>
          </article>
        </div>
      )}
    </>
  );
}

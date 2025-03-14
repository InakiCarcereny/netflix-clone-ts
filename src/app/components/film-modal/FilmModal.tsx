/* eslint-disable @next/next/no-img-element */
'use client';

import {
  Bangers,
  Luckiest_Guy,
  Fredoka,
  Parisienne,
  Baloo_2,
  Orbitron,
  Ranchers,
  Pacifico,
  Poppins,
  Anton,
} from 'next/font/google';

import { ArrowRight, Cross } from '@/icons';
import { useModalStore } from '@/store';
import { Button } from '@/components/ui/button/Button';

const anton = Anton({ subsets: ['latin'], weight: '400' });
const bangers = Bangers({ subsets: ['latin'], weight: '400' });
const luckiest = Luckiest_Guy({ subsets: ['latin'], weight: '400' });
const fredoka = Fredoka({ subsets: ['latin'], weight: '400' });
const parisienne = Parisienne({ subsets: ['latin'], weight: '400' });
const baloo = Baloo_2({ subsets: ['latin'], weight: '400' });
const orbitron = Orbitron({ subsets: ['latin'], weight: '400' });
const ranchers = Ranchers({ subsets: ['latin'], weight: '400' });
const pacifico = Pacifico({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: '400' });

const fonts = [
  bangers.className,
  luckiest.className,
  fredoka.className,
  anton.className,
  parisienne.className,
  orbitron.className,
  baloo.className,
  ranchers.className,
  pacifico.className,
  poppins.className,
];

export function FilmModal() {
  const { isOpen, type, data, closeModal } = useModalStore();

  const fontClass = fonts[data?.id % fonts.length];

  return (
    <>
      {isOpen && type === 'film' && data && (
        <div className='inset-0 w-full h-full absolute flex flex-col items-center justify-center bg-black/50'>
          <article className='w-[700px] h-[650px] bg-[#1e1e1e] flex flex-col z-50 border-zinc-700 border-1 rounded-xl relative overflow-hidden'>
            <img
              src={data.poster[1]}
              alt={data.title}
              className='w-full h-[350px] object-cover'
            />

            <button
              onClick={closeModal}
              className='text-white absolute top-4 right-4 cursor-pointer px-0.5 py-0.5 rounded-full hover:bg-white/10 duration-100'
            >
              <Cross className='h-14 w-14' />
            </button>

            <div className='px-10 py-10 flex flex-col gap-4'>
              <h2 className={`text-white font-semibold text-4xl ${fontClass}`}>
                {data.title}
              </h2>

              <ul className='flex items-center gap-2'>
                <li className='bg-[#313030] text-white/60 px-2 py-1 rounded-[4px]'>
                  {data.year}
                </li>
                <li className='bg-[#313030] text-white/60 px-2 py-1 rounded-[4px]'>
                  {data.genre}
                </li>
                <li className='bg-[#313030] text-white/60 px-2 py-1 rounded-[4px]'>
                  {data.age}
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

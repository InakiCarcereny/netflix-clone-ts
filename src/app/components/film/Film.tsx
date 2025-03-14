'use client';

/* eslint-disable @next/next/no-img-element */

import { useModalStore } from '@/store';
import { CarouselItem } from '../ui/carousel';
import { FilmProps } from '@/models';

export function Film({
  id,
  poster,
  title,
  description,
  age,
  year,
  genre,
}: FilmProps) {
  const { openModal } = useModalStore();

  return (
    <CarouselItem key={id} className='basis-1/7 pl-10'>
      <button
        onClick={() =>
          openModal('film', {
            id,
            poster,
            title,
            description,
            age,
            year,
            genre,
          })
        }
        className='relative hover:scale-105 duration-150 cursor-pointer'
      >
        <span
          style={{ textShadow: '0px 0px 2px rgba(255,255,255, 1)' }}
          className={
            'text-black text-8xl absolute top-36 -left-6 font-semibold '
          }
        >
          {id}
        </span>
        <img
          className='rounded-lg h-[250px] w-[185px] object-cover'
          src={poster[0]}
          alt={title}
        />
      </button>
    </CarouselItem>
  );
}

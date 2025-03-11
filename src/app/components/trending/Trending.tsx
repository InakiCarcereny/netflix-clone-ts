/* eslint-disable @next/next/no-img-element */
import { Tittle } from '@/components/ui/tittle';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import films from '@/mocks/data.json';

export function Trending() {
  return (
    <section className='max-w-[1524px] w-full h-full mx-auto mt-8 flex flex-col gap-4'>
      <Tittle label='Trending Now' />

      <Carousel className='w-full max-w-full'>
        <CarouselContent className=''>
          {films.map((film) => (
            <CarouselItem key={film.id} className='basis-1/7'>
              <button className='relative'>
                <span className='text-black text-8xl absolute top-36 -left-5'>
                  {film.id}
                </span>
                <img
                  className='rounded-lg h-[250px] w-[175px] object-cover'
                  src={film.poster}
                  alt={film.title}
                />
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

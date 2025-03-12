import { Tittle } from '@/components/ui/tittle';

import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import FilmList from '@/components/film-list/FilmList';

export function Trending() {
  return (
    <section className='max-w-[1524px] w-full h-full mx-auto mt-8 flex flex-col gap-4'>
      <Tittle label='Trending Now' />

      <Carousel className='w-full max-w-[1500px] mx-auto'>
        <FilmList />

        <CarouselPrevious className='h-[150px] bg-[#1e1e1e] text-white border-none hover:bg-[#272727] hover:text-white' />
        <CarouselNext className='h-[150px] bg-[#1e1e1e] text-white border-none hover:bg-[#272727] hover:text-white' />
      </Carousel>
    </section>
  );
}

/* eslint-disable @next/next/no-img-element */
import { Tittle } from '@/components/ui/tittle';

import films from '@/mocks/data.json';

export function Trending() {
  return (
    <section className='max-w-[1524px] w-full h-full mx-auto mt-8'>
      <Tittle label='Trending Now' />

      <ul className='flex items-center gap-4'>
        {films.map((film) => (
          <div key={film.id} className='flex place-items-end'>
            <span>{film.id}</span>
            <img
              className='rounded-lg h-[200px] w-[100px]'
              src={film.poster}
              alt={film.title}
            />
          </div>
        ))}
      </ul>
    </section>
  );
}

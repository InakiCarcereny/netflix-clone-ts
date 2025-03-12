import { CarouselContent } from '../ui/carousel';

import films from '@/mocks/data.json';
import { Film } from '@/components/film';

export function FilmList() {
  return (
    <CarouselContent className='px-4 py-4'>
      {films.map((film) => (
        <Film
          key={film.id}
          id={film.id}
          poster={film.poster}
          title={film.title}
          description={film.description}
          age={film.age}
          year={film.year}
          genre={film.genre}
        />
      ))}
    </CarouselContent>
  );
}

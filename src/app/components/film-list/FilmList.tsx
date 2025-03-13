import { CarouselContent } from '../ui/carousel';
import { Film } from '@/components/film';
import films from '@/mocks/data.json';

export default async function FilmList() {
  //example if you want to use a service with suspense and fallback
  // const films = (await getFilms('url')) as FilmProps[];

  return (
    <CarouselContent>
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

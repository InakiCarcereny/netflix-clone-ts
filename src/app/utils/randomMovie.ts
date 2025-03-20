import films from '@/mocks/data.json';

export function randomMovie() {
  const date = new Date();
  const day = date.getDay();

  console.log(day);

  const getRandomMovie = () => {
    return films[day];
  };

  return getRandomMovie();
}

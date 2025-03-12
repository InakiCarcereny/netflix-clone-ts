import {
  FilmModal,
  Footer,
  Header,
  Questions,
  Reasons,
  Trending,
} from '@/components';

export default function Home() {
  return (
    <>
      <Header />

      <Trending />

      <Reasons />

      <Questions />

      <Footer />

      <FilmModal />
    </>
  );
}

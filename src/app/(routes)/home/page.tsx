import { fontClass } from '@/utils';
import firstFilm from '@/mocks/data.json';
import { BUTTONS } from '@/lib';

export default function Home() {
  return (
    <>
      <section className='max-w-[1720px] mx-auto w-full h-[800px] flex flex-col relative'>
        <div className='absolute top-90 flex flex-col gap-4 max-w-[500px] w-full'>
          <h2
            className={`text-8xl text-white font-semibold ${fontClass(firstFilm[4].id)}`}
          >
            {firstFilm[4].title}
          </h2>
          <p className='text-white/90 font-bold text-xl'>
            {firstFilm[4].description}
          </p>

          <div className='flex items-center gap-4'>
            {BUTTONS.map((button) => (
              <button
                key={button.label}
                className={`flex items-center gap-4 font-bold text-xl px-10 py-1 rounded-[4px] w-full ${button.className}`}
              >
                {button.icon}

                {button.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <img
        src={firstFilm[4].poster[1]}
        className='absolute top-0 left-0 w-full h-[900px] object-cover -z-10'
      />
    </>
  );
}

/* eslint-disable @next/next/no-img-element */
import { Cross, Play, Plus2 } from '@/icons';
import { useModalStore } from '@/store';
import { fontClass } from '@/utils';
import films from '@/mocks/data.json';

export function InfoModal() {
  const { isOpen, type, data, closeModal } = useModalStore();

  const filteredFilms = films.filter((data) => data.genre.includes('Comedy'));

  return (
    <>
      {isOpen && type === 'info' && data && (
        <div className='absolute left-0 top-0 w-full h-screen bg-black/80 flex items-center justify-center'>
          <article className='w-[800px] h-[900px] rounded-xl overflow-hidden relative bg-[#1e1e1e]'>
            <img
              src={data.poster[1]}
              alt={data.title}
              className='w-full h-[350px] object-cover'
            />

            <button
              onClick={closeModal}
              className='text-white absolute top-4 right-4 cursor-pointer rounded-full bg-zinc-800'
            >
              <Cross className='h-10 w-10' />
            </button>

            <div className='flex flex-col gap-4 px-8 py-4 absolute top-38'>
              <h2
                className={`text-white font-semibold text-4xl ${fontClass(data.id)}`}
              >
                {data.title}
              </h2>

              <div className='flex items-center gap-4'>
                <button className='flex items-center gap-2 bg-white text-black rounded-[4px] px-8 py-1 font-bold text-2xl'>
                  <span>
                    <Play />
                  </span>
                  Reproduce
                </button>

                <button className='rounded-full flex items-center border-2 border-zinc-300 text-white bg-zinc-800/40 hover:border-white hover:bg-white/20 cursor-pointer'>
                  <Plus2 className='w-11 h-11' />
                </button>
              </div>
            </div>

            <div className='grid grid-cols-2 px-8 py-6 w-full gap-14'>
              <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-2'>
                  <span className='text-white/50'>{data.year}</span>
                  <span className='text-white/50'>duration</span>
                  <span className='text-white/50'>{data.age}</span>
                  <span className='border-1 border-white/50 text-sm text-white font-light px-2'>
                    HD
                  </span>
                </div>

                <p className='text-base text-white/90 text-pretty font-light'>
                  {data.description}.
                </p>
              </div>

              <div>
                <p className='text-white/50'>
                  Genre:{' '}
                  <span className='text-white/90 font-light'>
                    {data.genre.join(' ,')}
                  </span>
                </p>
              </div>
            </div>

            <ul className='grid grid-cols-4 px-8 mt-6 gap-4'>
              {filteredFilms.map((film) => (
                <li key={film.id}>{film.title}</li>
              ))}
            </ul>
          </article>
        </div>
      )}
    </>
  );
}

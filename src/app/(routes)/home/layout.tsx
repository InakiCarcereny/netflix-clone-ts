import { Netflix } from '@/icons';
import { ReactNode } from 'react';
import { Nav, User } from '@/components';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <section className='max-w-[1720px] w-full mx-auto h-full'>
        <header className='flex items-center justify-between w-full h-[100px] bg-black/30'>
          <div className='flex items-center gap-8'>
            <h1>
              <Netflix className='w-24 h-24' />
            </h1>

            <Nav />
          </div>

          <User />
        </header>
      </section>

      <main>{children}</main>
    </>
  );
}

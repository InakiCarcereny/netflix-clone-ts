import { Netflix } from '@/icons';
import { ReactNode } from 'react';
import { Nav, User } from '@/components';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className='w-full h-[100px] from-black/30 via-black/20 to-zinc-400/10 bg-gradient-to-b'>
        <div className='max-w-[1720px] mx-auto w-full h-full flex items-center justify-between'>
          <div className='flex items-center gap-8'>
            <h1>
              <Netflix className='w-24 h-24' />
            </h1>

            <Nav />
          </div>

          <User />
        </div>
      </header>

      <main className='max-w-[1720px] mx-auto w-full h-full'>{children}</main>
    </>
  );
}

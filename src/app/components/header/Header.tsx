import { Netflix } from '@/icons';
import { Button } from '@/components/ui/button/Button';
import Link from 'next/link';
import { LoginForm } from '@/components/login-form';

export function Header() {
  return (
    <section className='w-full h-[900px] bg-center bg-cover bg-no-repeat bg-[url(/assets/landing/hero.jpg)] relative'>
      <div className='flex flex-col gap-44 max-w-[1524px] w-full h-full mx-auto'>
        <header className='flex items-center justify-between z-50'>
          <h1>
            <Netflix />
          </h1>

          <div className='flex items-center gap-4'>
            <button className='text-white text-sm flex items-center justify-center rounded-[4px] border-zinc-200 border px-4 py-2'>
              Translate
            </button>

            <Link href='/register'>
              <Button label='Register' classNmame='text-sm cursor-pointer' />
            </Link>
          </div>
        </header>

        <div className='flex flex-col items-center gap-6 text-white z-50'>
          <h5 className='text-6xl font-bold text-white text-center text-pretty max-w-[550px]'>
            Unlimited movies, TV shows and more
          </h5>

          <small className='text-white font-semibold text-xl'>
            Starting at $5,99. Cancel anytime.
          </small>

          <p className='text-white text-lg font-medium text-pretty max-w-[600px] text-center'>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <LoginForm className='max-w-[600px]' />
        </div>
      </div>

      <div className='w-full border-red-500 border-2'></div>
      <div className='absolute w-full h-full bg-black opacity-80 top-0 left-0 z-0'></div>
    </section>
  );
}

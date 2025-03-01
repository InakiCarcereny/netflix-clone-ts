import { RegisterForm } from '@/components';
import { Netflix } from '@/icons';
import Link from 'next/link';

export default function Register() {
  return (
    <section className='flex items-center justify-center w-full h-screen bg-center bg-cover bg-no-repeat bg-[url(/assets/landing/hero.jpg)] relative z-0'>
      <div
        className='absolute w-[400px] h-[600px] flex flex-col gap-6
      bg-black/80 rounded-xl z-50 px-8 py-8'
      >
        <h3 className='text-3xl text-white font-semibold'>Register</h3>

        <RegisterForm />

        <span className='text-white font-normal text-sm mt-10'>
          Remember its just a Netflix clone, dont expect it to be the same
        </span>
      </div>

      <div className='absolute w-full h-full bg-black opacity-35 z-0'></div>

      <Link href='/' className='absolute top-6 left-12 z-50'>
        <Netflix />
      </Link>
    </section>
  );
}

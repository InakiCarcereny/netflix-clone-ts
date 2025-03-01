'use client';

import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { useLocalStorage } from '@/hooks';
import { useRouter } from 'next/navigation';

interface FormValues {
  email: string;
  password: string;
}

export function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { setValue } = useLocalStorage<FormValues>('values', {
    email: '',
    password: '',
  });

  const onSubmit = handleSubmit((data) => {
    setValue(data);
    router.push('/home');
  });

  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-4 w-full'>
      <div className='flex flex-col gap-2'>
        <input
          type='text'
          className='px-4 py-4 rounded-[4px] border-zinc-200 border w-full text-white text-sm placeholder:text-zinc-300 placeholder:text-sm '
          placeholder='Email'
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
        />

        {errors.email?.message && <span>{errors.email?.message}</span>}
      </div>
      <div className='flex flex-col gap-2'>
        <input
          type='password'
          className='px-4 py-4 rounded-[4px] border-zinc-200 border w-full text-white text-sm placeholder:text-zinc-300 placeholder:text-sm '
          placeholder='Password'
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
          })}
        />

        {errors.password?.message && <span>{errors.password?.message}</span>}
      </div>

      <Button label='Register' classNmame='text-xl w-full mt-8' />
    </form>
  );
}

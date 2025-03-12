'use client';

import { Button } from '@/components/ui/button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLocalStorage } from '@/hooks';
import { useRouter } from 'next/navigation';
import { FormValues } from '@/schemas/register';
import registerSchema from '@/schemas/register';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/input';

export function RegisterForm() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(registerSchema),
  });

  const { setValue } = useLocalStorage<FormValues>('values', {
    email: '',
    password: '',
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setValue(data);
    router.push('/home');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-4 w-full'
    >
      <Input
        name='email'
        type='text'
        placeholder='Email'
        control={control}
        error={errors.email}
      />

      <Input
        name='password'
        type='password'
        placeholder='Password'
        control={control}
        error={errors.password}
      />

      <Button label='Register' classNmame='text-xl w-full mt-8' />
    </form>
  );
}

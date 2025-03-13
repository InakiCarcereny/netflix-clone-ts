'use client';

import { Input } from '@/components/input/Input';
import { Button } from '@/components/ui/button/Button';
import { useLocalStorage } from '@/hooks';
import { ArrowRight } from '@/icons';
import { FormValuesLogin } from '@/schemas';
import loginSchema from '@/schemas/login';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export function LoginForm() {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValuesLogin>({
    resolver: zodResolver(loginSchema),
  });

  const { storedValue } = useLocalStorage('values', {});

  const onSubmit: SubmitHandler<FormValuesLogin> = (data) => {
    if (storedValue && storedValue.email === data.email) {
      router.push('/home');
    } else {
      console.log('No value found or invalid email');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex items-center justify-center gap-2 max-w-[600px] w-full'
    >
      <Input
        control={control}
        name='email'
        error={errors.email}
        type='text'
        placeholder='Email'
      />

      <Button
        label='Login'
        classNmame='text-2xl w-full'
        icon={<ArrowRight />}
      />
    </form>
  );
}

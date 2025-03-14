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

interface LoginFormProps {
  className?: string;
}

export function LoginForm({ className }: LoginFormProps) {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValuesLogin>({
    resolver: zodResolver(loginSchema),
  });

  const { storedValue } = useLocalStorage('values', {
    email: '',
  });

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
      className={`flex items-center justify-center gap-2 w-full ${className}`}
    >
      <Input
        control={control}
        name='email'
        error={errors.email}
        type='text'
        placeholder='Email Address'
      />

      <Button
        label='Get Started'
        classNmame='text-2xl w-full'
        icon={<ArrowRight />}
      />
    </form>
  );
}

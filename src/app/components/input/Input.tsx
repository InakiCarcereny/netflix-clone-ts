import { FormValues } from '@/schemas/register';
import { Control, Controller, FieldError } from 'react-hook-form';

interface InputProps {
  name: keyof FormValues;
  control: Control<FormValues>;
  type: string;
  error?: FieldError;
  placeholder?: string;
}

export function Input({ name, control, error, placeholder, type }: InputProps) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            className='px-4 py-4 rounded-[4px] border-zinc-200 border w-full text-white text-sm placeholder:text-zinc-300 placeholder:text-sm'
            placeholder={placeholder}
          />
        )}
      />

      {error?.message && <span className='text-red-500'>{error.message}</span>}
    </>
  );
}

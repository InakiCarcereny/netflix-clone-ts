import { ArrowRight } from '@/icons';
import { Button } from '@/components/ui/button/Button';

export function Footer() {
  return (
    <footer className='flex flex-col gap-4 items-center max-w-[1524px] w-full mx-auto mt-8'>
      <p className='text-white text-lg font-medium text-pretty text-center'>
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <div className='flex items-center justify-center gap-2 max-w-[800px] w-full'>
        <input
          placeholder='Email'
          type='text'
          className='text-white text-sm flex items-center justify-center rounded-[4px] border-zinc-200 border px-4 py-3.5 w-full placeholder:text-zinc-300 placeholder:text-sm placeholder:font-semibold'
        />

        <Button
          label='Login'
          classNmame='text-2xl max-w-[300px] w-full'
          icon={<ArrowRight />}
        />
      </div>
    </footer>
  );
}

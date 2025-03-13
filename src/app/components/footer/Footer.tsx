import { LoginForm } from '@/components/login-form';

export function Footer() {
  return (
    <footer className='flex flex-col gap-4 items-center max-w-[1524px] w-full mx-auto mt-8'>
      <p className='text-white text-lg font-medium text-pretty text-center'>
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <LoginForm />
    </footer>
  );
}

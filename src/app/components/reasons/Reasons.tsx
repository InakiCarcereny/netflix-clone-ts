import { REASONS } from '@/lib';
import { JSX } from 'react';
import { Tittle } from '@/components/ui/tittle';

export function Reasons(): JSX.Element {
  return (
    <section className='flex flex-col mx-auto max-w-[1524px] w-full min-h-[300px] gap-4 mt-8'>
      <Tittle label='More Reasons to Join' />

      <ul className='grid grid-cols-4 gap-4 w-full'>
        {REASONS.map(
          (reason): JSX.Element => (
            <li
              key={reason.title}
              className=' from-[#151d42]  to-[#310909] bg-gradient-to-br rounded-xl px-4 py-6 flex flex-col justify-between'
            >
              <div className='flex flex-col gap-4'>
                <h6 className='text-white font-semibold text-xl'>
                  {reason.title}
                </h6>
                <p className='text-zinc-300 font-medium'>{reason.resume}</p>
              </div>
              <span className='flex place-content-end'>{reason.icon}</span>
            </li>
          ),
        )}
      </ul>
    </section>
  );
}

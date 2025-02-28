'use client';

import { Cross, Plus } from '@/icons';
import { JSX, useState } from 'react';

interface QuestionProps {
  answer: string;
  question: string;
}

export function Question({ answer, question }: QuestionProps): JSX.Element {
  const [open, setOpen] = useState<string | boolean>(false);

  const handleClick = (question: string): void => {
    setOpen((prevState) => (prevState === question ? false : question));
  };

  return (
    <>
      <li
        onClick={() => handleClick(question)}
        className='w-full h-[90px] flex items-center justify-between px-4 py-6 bg-[#242323] hover:bg-[#292828] duration-150 cursor-pointer'
      >
        <h6 className='text-white font-base text-xl'>{question}</h6>

        <button>
          {open ? (
            <Cross className='w-12 h-12 text-white' />
          ) : (
            <Plus className='w-12 h-12 text-white' />
          )}
        </button>
      </li>

      {open === question && (
        <div className='bg-[#242323] px-4 py-6 w-full'>
          <p className='text-white font-medium text-2xl'>{answer}</p>
        </div>
      )}
    </>
  );
}

import { JSX } from 'react';

interface ButtonProps {
  label: string;
  classNmame?: string;
  icon?: JSX.Element;
}

export function Button({ label, classNmame, icon }: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center gap-4 text-white rounded-[4px] px-4 py-[9px] bg-red-500 font-semibold ${classNmame}`}
    >
      {label}

      {icon}
    </button>
  );
}

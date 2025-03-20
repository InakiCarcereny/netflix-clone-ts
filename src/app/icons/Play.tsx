import React from 'react';
import type { SVGProps } from 'react';

export function Play(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={48}
      height={48}
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='currentColor'
        fillOpacity={0}
        stroke='currentColor'
        strokeDasharray={40}
        strokeDashoffset={40}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M8 6l10 6l-10 6Z'
      >
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='0.5s'
          dur='0.5s'
          values='0;1'
        ></animate>
        <animate
          fill='freeze'
          attributeName='stroke-dashoffset'
          dur='0.5s'
          values='40;0'
        ></animate>
      </path>
    </svg>
  );
}

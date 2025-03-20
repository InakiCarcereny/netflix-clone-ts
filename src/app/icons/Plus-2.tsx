import React from 'react';
import type { SVGProps } from 'react';

export function Plus2(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      {...props}
    >
      <path fill='currentColor' d='M5 13v-1h6V6h1v6h6v1h-6v6h-1v-6z'></path>
    </svg>
  );
}

'use client';

import { NAV_ITEMS } from '@/lib';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className='flex items-center'>
      <ul className='flex items-center gap-4'>
        {NAV_ITEMS.map((item) => (
          <Link key={item.label} href={`${item.href}`}>
            <li
              className={`text-sm ${pathname === item.href ? 'font-semibold text-white' : 'text-white/70 hover:text-white/50 duration-150'}`}
            >
              {item.label}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

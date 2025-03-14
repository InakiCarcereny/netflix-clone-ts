import {
  Bangers,
  Luckiest_Guy,
  Fredoka,
  Parisienne,
  Baloo_2,
  Orbitron,
  Ranchers,
  Pacifico,
  Poppins,
  Anton,
} from 'next/font/google';

const anton = Anton({ subsets: ['latin'], weight: '400' });
const bangers = Bangers({ subsets: ['latin'], weight: '400' });
const luckiest = Luckiest_Guy({ subsets: ['latin'], weight: '400' });
const fredoka = Fredoka({ subsets: ['latin'], weight: '400' });
const parisienne = Parisienne({ subsets: ['latin'], weight: '400' });
const baloo = Baloo_2({ subsets: ['latin'], weight: '400' });
const orbitron = Orbitron({ subsets: ['latin'], weight: '400' });
const ranchers = Ranchers({ subsets: ['latin'], weight: '400' });
const pacifico = Pacifico({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export const fonts = [
  bangers.className,
  luckiest.className,
  fredoka.className,
  anton.className,
  parisienne.className,
  baloo.className,
  orbitron.className,
  ranchers.className,
  poppins.className,
  pacifico.className,
];

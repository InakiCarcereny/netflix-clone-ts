import { Tv, ArrowDown, Watcher, Faces } from '@/icons';

export const REASONS = [
  {
    title: 'Enjoy on your TV',
    resume:
      'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
    icon: Tv(),
  },
  {
    title: 'Download your shows to watch offline',
    resume: 'Save your favorites easily and always have something to watch.',
    icon: ArrowDown(),
  },
  {
    title: 'Watch everywhere',
    resume:
      'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
    icon: Watcher(),
  },
  {
    title: 'Create profiles for kids',
    resume:
      'Send kids on adventures with their favorite characters in a space made just for them — free with your membership.',
    icon: Faces(),
  },
] as const;

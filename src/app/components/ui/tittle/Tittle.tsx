interface TittleProps {
  label: string;
}

export function Tittle({ label }: TittleProps) {
  return <h5 className='text-white font-semibold text-2xl'>{label}</h5>;
}

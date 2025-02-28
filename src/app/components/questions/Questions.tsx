import { Tittle } from '@/components/ui/tittle';
import { QuestionList } from '@/components/question-list';

export function Questions() {
  return (
    <section className='flex flex-col mx-auto max-w-[1524px] w-full min-h-[300px] gap-4 mt-8'>
      <Tittle label='Frquently Asked Questions' />

      <QuestionList />
    </section>
  );
}

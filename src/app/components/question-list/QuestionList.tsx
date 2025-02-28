import { QUESTIONS } from '@/lib';
import { Question } from '@/components/question';

export function QuestionList() {
  return (
    <ul className='flex flex-col gap-2 w-full'>
      {QUESTIONS.map((question) => (
        <Question
          key={question.answer}
          answer={question.answer}
          question={question.question}
        />
      ))}
    </ul>
  );
}

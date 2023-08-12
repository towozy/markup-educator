/* eslint-disable react/jsx-no-useless-fragment */
import Link from 'next/link';
import styles from './QuizListItem.module.scss';

interface QuizListProps {
  quizList: QuizListPropsInner[];
}

interface QuizListPropsInner {
  id: string;
  category: string;
  name: string;
}

export default function QuizListItem({ quizList }: QuizListProps) {
  return (
    <>
      {quizList && (
        <ul className={styles.list_quiz}>
          {quizList.map((quiz) => (
            <li className={styles.quiz_quiz} key={quiz.id}>
              <Link href={`/quiz/${quiz.id}`} className={styles.link_quiz} prefetch={false}>
                # Quiz {quiz.id} {quiz.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

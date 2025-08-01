import type { Question } from '../types'

interface Props {
    question: Question;
    currentIndex: number;
    total: number;
    onNext: () => void;

}
const QuestionScreen: React.FC<Props> = ({question, currentIndex, total, onNext}) => {
  return (
    <div className="text-white font-shareTech mt-5">
        <h1>Question {currentIndex  + 1} of {total}</h1>
        <p className="text-xl mb-6">{question.question}</p>
        <button onClick={onNext}>next</button>
    </div>
  )
}

export default QuestionScreen
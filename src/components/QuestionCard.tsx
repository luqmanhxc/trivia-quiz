import React, { useState, useEffect } from 'react';
import './QuestionCard.css';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { updateScore } from '../features/score/scoreSlice';
import shuffleArray from '../utils';

type Props = {
    questionId: number;
    question: string;
    incorrectAnswers: string[];
    correctAnswer: string;
};

const QuestionCard = ({
    questionId,
    question,
    incorrectAnswers,
    correctAnswer,
}: Props) => {
    const [answers, setAnswers] = useState<string[]>([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setAnswers(shuffleArray([...incorrectAnswers, correctAnswer]));
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const correct = e.currentTarget.value === correctAnswer;
        const answerObject = {
            question: question,
            correctAnswer: correctAnswer,
            userAnswer: e.currentTarget.value,
            correct: correct,
        };
        dispatch(updateScore(answerObject));
    };

    return (
        <div>
            <h2>{question}</h2>
            {answers.map((answer) => (
                <div key={answer}>
                    <button
                        className="answer"
                        value={answer}
                        onClick={handleClick}
                    >
                        {answer}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default QuestionCard;

// const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     console.log(e.currentTarget.value);
//     const answerObject: AnswerObject = {
//         questionId: questionId,
//         userAnswer: e.currentTarget.value,
//         correctAnswer: correctAnswer,
//         correct: e.currentTarget.value === correctAnswer,
//     };
// };

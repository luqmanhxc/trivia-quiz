import React, { useState, useEffect } from 'react';
import './QuestionCard.css';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { addScore, updateScore } from '../features/score/scoreSlice';
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
    const score = useAppSelector((state) => state.score.score);
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
        if (score.some((el) => el.question === question)) {
            dispatch(updateScore(answerObject));
        } else {
            dispatch(addScore(answerObject));
        }
        console.log(score);
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

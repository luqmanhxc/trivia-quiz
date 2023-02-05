import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { addScore, updateScore } from '../features/score/ScoreSlice';
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
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [answers, setAnswers] = useState<string[]>([]);
    const score = useAppSelector((state) => state.score.score);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setAnswers(shuffleArray([...incorrectAnswers, correctAnswer]));
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setSelectedAnswer(e.currentTarget.value);
        const correct = e.currentTarget.value === correctAnswer;
        const answerObject = {
            questionId: questionId,
            question: question,
            correctAnswer: correctAnswer,
            userAnswer: e.currentTarget.value,
            correct: correct,
        };
        if (score.some((el) => el.questionId === questionId)) {
            dispatch(updateScore(answerObject));
        } else {
            dispatch(addScore(answerObject));
        }
    };

    return (
        <div className="question u-margin-bottom-small">
            <h2 className="question__text u-margin-bottom-small">{question}</h2>
            <div className="question__answers u-margin-bottom-small">
                {answers.map((answer) => (
                    <button
                        key={answer}
                        value={answer}
                        onClick={handleClick}
                        className={`btn btn--answer 
                        ${
                            score[questionId]?.userAnswer === answer
                                ? 'btn--active'
                                : ''
                        }
                        ${answer === selectedAnswer ? 'btn--active' : ''}`}
                    >
                        {answer}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;

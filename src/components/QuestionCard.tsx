import React from 'react';
import './QuestionCard.css';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { updateScore } from '../features/score/scoreSlice';

type Props = {
    questionId: number;
    question: string;
    answers: string[];
    correctAnswer: string;
};

const QuestionCard = ({
    questionId,
    question,
    answers,
    correctAnswer,
}: Props) => {
    const score = useAppSelector((state) => state.score.score);
    const dispatch = useAppDispatch();

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

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (e.currentTarget.value === correctAnswer) {
            dispatch(updateScore());
        }
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
                    <h2>{score}</h2>
                </div>
            ))}
        </div>
    );
};

export default QuestionCard;

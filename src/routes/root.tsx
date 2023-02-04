import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { fetchQuiz } from '../features/quiz/QuizSlice';
import QuestionCard from '../components/QuestionCard';
import he from 'he';
import Results from '../components/Results';
import QuestionPage from '../components/QuestionPage';

const Root = () => {
    const [number, setNumber] = useState<number>(0);
    const [gameOver, setGameOver] = useState<boolean>(false);
    const { loading, quiz, error } = useAppSelector((state) => state.quiz);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchQuiz());
    }, []);

    const handleNext = () => {
        setNumber(number + 1);
    };

    const handleSubmit = () => {
        setGameOver(true);
    };

    return (
        <main>
            <div>
                {loading && <div>Loading...</div>}
                {!loading && !gameOver && quiz.length && (
                    <QuestionCard
                        key={quiz[number].question}
                        questionId={number + 1}
                        question={he.decode(quiz[number].question)}
                        incorrectAnswers={quiz[number].incorrect_answers}
                        correctAnswer={quiz[number].correct_answer}
                    />
                )}

                {gameOver && <Results />}
            </div>

            <div>
                {!loading && number !== 4 && (
                    <button onClick={handleNext}>Next Question</button>
                )}
                {!loading && !gameOver && number === 4 && (
                    <button onClick={handleSubmit}>Submit</button>
                )}
            </div>

            {/* <div>
                <QuestionPage />
            </div> */}
        </main>
    );
};

export default Root;

import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { fetchQuiz } from './features/quiz/QuizSlice';
import './App.css';
import QuestionCard from './components/QuestionCard';
import he from 'he';
import shuffleArray from './utils';

function App() {
    const { loading, quiz, error } = useAppSelector((state) => state.quiz);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchQuiz());
    }, []);

    return (
        <div>
            {loading && <div>Loading...</div>}
            {!loading &&
                quiz.map((question, index) => (
                    <QuestionCard
                        key={question.question}
                        questionId={index + 1}
                        question={he.decode(question.question)}
                        answers={shuffleArray([
                            ...question.incorrect_answers,
                            question.correct_answer,
                        ])}
                        correctAnswer={question.correct_answer}
                    />
                ))}
        </div>
    );
}

export default App;

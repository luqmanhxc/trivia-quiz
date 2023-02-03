import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { fetchQuiz } from './features/quiz/QuizSlice';
import './App.css';
import QuestionCard from './components/QuestionCard';
import he from 'he';

function App() {
    const { loading, quiz, error } = useAppSelector((state) => state.quiz);
    const score = useAppSelector((state) => state.score.score);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchQuiz());
    }, []);

    return (
        <div>
            {score.filter((obj) => obj.correct === true).length}
            {loading && <div>Loading...</div>}
            {!loading &&
                quiz.map((question, index) => (
                    <QuestionCard
                        key={question.question}
                        questionId={index + 1}
                        question={he.decode(question.question)}
                        incorrectAnswers={question.incorrect_answers}
                        correctAnswer={question.correct_answer}
                    />
                ))}
        </div>
    );
}

export default App;

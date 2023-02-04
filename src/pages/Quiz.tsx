import { useAppSelector, useAppDispatch } from '../app/hooks';
import { fetchQuiz, resetQuiz } from '../features/quiz/QuizSlice';
import {
    incNumber,
    updateNumber,
    setGameOver,
} from '../features/status/StatusSlice';
import { Link } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';
import he from 'he';
import { useEffect } from 'react';

const Quiz = () => {
    const { number, gameOver } = useAppSelector((state) => state.status);
    const { score } = useAppSelector((state) => state.score);
    const { loading, quiz } = useAppSelector((state) => state.quiz);
    const dispatch = useAppDispatch();

    const handleSubmit = () => {
        dispatch(setGameOver(true));
        dispatch(resetQuiz());
    };

    useEffect(() => {
        dispatch(fetchQuiz());
    }, []);

    return (
        <div>
            <div>
                {!loading && !gameOver && quiz.length ? (
                    <QuestionCard
                        key={quiz[number].question}
                        questionId={number + 1}
                        question={he.decode(quiz[number].question)}
                        incorrectAnswers={quiz[number].incorrect_answers}
                        correctAnswer={quiz[number].correct_answer}
                    />
                ) : (
                    <p>Loading...</p>
                )}
            </div>

            <div>
                {!loading && score.length && score.length !== 5 ? (
                    <button onClick={() => dispatch(incNumber())}>
                        Next Question
                    </button>
                ) : !loading && score.length === 5 ? (
                    <Link to="/results">
                        <button onClick={handleSubmit}>Submit</button>
                    </Link>
                ) : null}
            </div>

            {score && (
                <div>
                    {score.map((obj) => (
                        <button
                            onClick={() =>
                                dispatch(updateNumber(obj?.questionId - 1))
                            }
                        >
                            {obj.questionId}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Quiz;

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
import Loader from '../components/Loader';

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
        <div className="container container-start">
            <div>
                {!loading && !gameOver && quiz.length ? (
                    <QuestionCard
                        key={quiz[number].question}
                        questionId={number}
                        question={he.decode(quiz[number].question)}
                        incorrectAnswers={quiz[number].incorrect_answers}
                        correctAnswer={quiz[number].correct_answer}
                    />
                ) : (
                    <Loader />
                )}
            </div>

            <div className="turn-page">
                {!loading &&
                score.length &&
                score.length !== 5 &&
                score[number] ? (
                    <button
                        className="btn btn--next u-margin-bottom-small"
                        onClick={() => dispatch(incNumber())}
                    >
                        Next Question
                    </button>
                ) : !loading && score.length === 5 ? (
                    <Link to="/results">
                        <button
                            className="btn btn--submit u-margin-bottom-small"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </Link>
                ) : null}
            </div>

            {score && (
                <div className="pagination">
                    {score.map((obj) => (
                        <button
                            className="btn btn--page"
                            key={obj.questionId}
                            onClick={() =>
                                dispatch(updateNumber(obj?.questionId))
                            }
                        >
                            {obj.questionId + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Quiz;

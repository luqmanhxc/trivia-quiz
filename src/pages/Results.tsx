import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { resetScore } from '../features/score/ScoreSlice';
import { resetNumber } from '../features/status/StatusSlice';

const Results = () => {
    const score = useAppSelector((state) => state.score.score);
    const dispatch = useAppDispatch();

    const handleReset = () => {
        dispatch(resetNumber());
        dispatch(resetScore());
    };

    return (
        <div>
            <h2>You scored:</h2>
            <h3>{score.filter((obj) => obj.correct === true).length} / 5</h3>
            <button onClick={handleReset}>
                <Link to="/">Reset Quiz</Link>
            </button>
        </div>
    );
};

export default Results;

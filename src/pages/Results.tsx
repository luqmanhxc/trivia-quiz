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
        <div className="container container-start results">
            <h2 className="results__label u-margin-bottom-small">
                You scored:
            </h2>
            <h3 className="results__score">
                {score.filter((obj) => obj.correct === true).length} / 5
            </h3>

            <Link to="/">
                <button className="btn btn--reset" onClick={handleReset}>
                    Reset Quiz
                </button>
            </Link>
        </div>
    );
};

export default Results;

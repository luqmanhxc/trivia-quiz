// Redux
import { useAppDispatch } from '../app/hooks';
import { resetNumber, setGameOver } from '../features/status/StatusSlice';
import { resetScore } from '../features/score/ScoreSlice';

// React router
import { Link } from 'react-router-dom';

const Home = () => {
    const dispatch = useAppDispatch();

    const handleStart = () => {
        dispatch(setGameOver(false));
    };

    return (
        <div>
            <h1>Trivia Time!</h1>
            <button onClick={handleStart}>
                <Link to="/quiz">Start Game</Link>
            </button>
        </div>
    );
};

export default Home;

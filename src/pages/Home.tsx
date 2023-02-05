// Redux
import { useAppDispatch } from '../app/hooks';
import { setGameOver } from '../features/status/StatusSlice';

// Auth0
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';

// React router
import { Link } from 'react-router-dom';

const Home = () => {
    const dispatch = useAppDispatch();
    const { isAuthenticated } = useAuth0();

    const handleStart = () => {
        dispatch(setGameOver(false));
    };

    return (
        <div className="container container-start">
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            {isAuthenticated && (
                <Link to="/quiz" className="u-light-text">
                    <button className="btn btn--start" onClick={handleStart}>
                        Start Game
                    </button>
                </Link>
            )}
        </div>
    );
};

export default Home;

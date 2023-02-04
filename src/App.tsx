import { Route, Routes } from 'react-router-dom';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import { useAuth0 } from '@auth0/auth0-react';
import AuthenticationGuard from './components/AuthenticationGuard';

const App = () => {
    const { isAuthenticated } = useAuth0();
    return (
        <>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/quiz"
                    element={<AuthenticationGuard component={Quiz} />}
                />
                <Route path="/results" element={<Results />} />
            </Routes>
        </>
    );
};

export default App;

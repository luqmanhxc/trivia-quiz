import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import AuthenticationGuard from './components/AuthenticationGuard';

const App = () => {
    return (
        <div>
            <div>
                <h1 className="header__logo-text u-margin-bottom-small">
                    Trivia Time!
                </h1>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/quiz"
                    element={<AuthenticationGuard component={Quiz} />}
                />
                <Route path="/results" element={<Results />} />
            </Routes>
        </div>
    );
};

export default App;

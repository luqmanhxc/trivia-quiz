import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/results" element={<Results />} />
            </Routes>
        </>
    );
};

export default App;

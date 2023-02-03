import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '../features/quiz/QuizSlice';
import resultReducer from '../features/result/ResultSlice';
import scoreReducer from '../features/score/scoreSlice';

const store = configureStore({
    reducer: {
        quiz: quizReducer,
        result: resultReducer,
        score: scoreReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

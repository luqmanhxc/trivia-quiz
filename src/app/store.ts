import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '../features/quiz/QuizSlice';
import scoreReducer from '../features/score/ScoreSlice';
import statusReducer from '../features/status/StatusSlice';

const store = configureStore({
    reducer: {
        quiz: quizReducer,
        score: scoreReducer,
        status: statusReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import QuizSlice from '../features/quiz/QuizSlice';
import ScoreSlice from '../features/score/ScoreSlice';
import StatusSlice from '../features/status/StatusSlice';

const store = configureStore({
    reducer: {
        quiz: QuizSlice,
        score: ScoreSlice,
        status: StatusSlice,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

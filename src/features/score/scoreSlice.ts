import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Answers = {
    question: string;
    correctAnswer: string;
    userAnswer: string;
    correct: boolean;
};

type InitialState = {
    score: Answers[];
};

const initialState: InitialState = {
    score: [],
};

const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        updateScore: (state, action: PayloadAction<Answers>) => {
            state.score.push(action.payload);
        },
    },
});

export default scoreSlice.reducer;
export const { updateScore } = scoreSlice.actions;

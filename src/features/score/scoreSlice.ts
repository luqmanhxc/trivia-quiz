import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    score: number;
};

const initialState: InitialState = {
    score: 0,
};

const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        updateScore: (state) => {
            state.score += 1;
        },
    },
});

export default scoreSlice.reducer;
export const { updateScore } = scoreSlice.actions;

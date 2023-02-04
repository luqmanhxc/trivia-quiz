import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    number: number;
    gameOver: boolean;
};

const initialState: InitialState = {
    number: 0,
    gameOver: true,
};

const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        incNumber: (state) => {
            state.number += 1;
        },
        resetNumber: (state) => {
            state.number = 0;
        },
        updateNumber: (state, action: PayloadAction<number>) => {
            state.number = action.payload;
        },
        setGameOver: (state, action: PayloadAction<boolean>) => {
            state.gameOver = action.payload;
        },
    },
});

export default statusSlice.reducer;
export const { incNumber, resetNumber, updateNumber, setGameOver } =
    statusSlice.actions;

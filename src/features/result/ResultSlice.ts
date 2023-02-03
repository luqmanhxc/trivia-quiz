import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ResultType = {
    questionId: number;
    userAnswer: string;
    correctAnswer: string;
    correct: boolean;
};

type InitialStateType = {
    result: ResultType[];
};

const initialState: InitialStateType = {
    result: [],
};

const resultSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        addNewAnswer: (state, action: PayloadAction<ResultType>) => {
            state.result.push(action.payload);
        },
    },
});

export default resultSlice.reducer;
export const { addNewAnswer } = resultSlice.actions;

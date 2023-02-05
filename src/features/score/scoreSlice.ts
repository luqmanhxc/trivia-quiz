import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Answers = {
    questionId?: any;
    question?: string;
    correctAnswer?: string;
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
        addScore: (state, action: PayloadAction<Answers>) => {
            state.score.push(action.payload);
        },
        updateScore: (state, action: PayloadAction<Answers>) => {
            state.score = state.score.map((obj) => {
                if (obj.questionId === action.payload.questionId) {
                    return {
                        ...obj,
                        userAnswer: action.payload.userAnswer,
                        correct: action.payload.correct,
                    };
                }
                return obj;
            });
        },
        resetScore: (state) => {
            state.score = [];
        },
    },
});

export default scoreSlice.reducer;
export const { addScore, updateScore, resetScore } = scoreSlice.actions;

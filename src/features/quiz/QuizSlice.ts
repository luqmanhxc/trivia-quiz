import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type QuestionType = {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
};

type InitialState = {
    loading: boolean;
    quiz: QuestionType[];
    error: string;
};

const initialState: InitialState = {
    loading: false,
    quiz: [],
    error: '',
};

export const fetchQuiz = createAsyncThunk('quiz/fetchQuiz', () => {
    return axios
        .get('https://opentdb.com/api.php?amount=5&type=multiple')
        .then((response) => response.data.results);
});

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        resetQuiz: (state) => {
            state.quiz = [];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuiz.pending, (state) => {
            state.loading = true;
            state.quiz = [];
        });
        builder.addCase(
            fetchQuiz.fulfilled,
            (state, action: PayloadAction<QuestionType[]>) => {
                state.loading = false;
                state.quiz = action.payload;
                state.error = '';
            }
        );
        builder.addCase(fetchQuiz.rejected, (state, action) => {
            state.loading = false;
            state.quiz = [];
            state.error = action.error.message || 'Something went wrong';
        });
    },
});

export default quizSlice.reducer;
export const { resetQuiz } = quizSlice.actions;

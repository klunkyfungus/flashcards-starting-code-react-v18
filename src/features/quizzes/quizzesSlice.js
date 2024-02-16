import { createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        /* example state for the below property
        {
            '456': {
                id: '456',
                topicId: '123',
                name: 'quiz name',
                cardIds: ['1','2','3']
            }
        }
        */
        quizzes: {}
    },
    reducers: {
        /* example payload:
        {
            id: '456',
            name: 'quiz name',
            topicId: '123',
            cardIds: ['1','2','3']
        }
        */
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                topicId: action.payload.topicId,
                cardIds: action.payload.cardIds
            }
        }
    }
});

export const allQuizzesSelector = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        /*This topics property will hold all topics keyed by id:
        {
            '123': {
                id: '123',
                name: 'topic name',
                icon: 'icon url',
                quizIds: ['456']
            }
        }
        */
        topics: {}
    },
    reducers: {
        /* payload for addTopic looks like: 
        {
           id: '1234',
           name: 'topic name',
           icon: 'icon url' 
        } 
        */
        addTopic: (state, action) => {
            state.topics[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: []
            }
        }
    }
});

export const topicsSelector = (state) => state.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
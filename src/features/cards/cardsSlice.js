import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        /* example of cards property:
        {
            '789': {
                id: '789',
                front: 'question text',
                back: 'answer text'
            }
        }
        */
        cards: {}
    },
    reducers: {
        /* example payload for addCard:
        {
            id: '789',
            front: 'front text',
            back: 'back text'
        }
        */
        addCard: (state, action) => {
            state.cards[action.payload.id] = action.payload;
        }
    }
})

export const { addCard } = cardsSlice.actions;
export const allCardsSelector = (state) => state.cards.cards;
export default cardsSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

export const formActivitySlice = createSlice({
    name: 'formActivity',
    initialState: {
        value: false,
    },
    reducers: {
        toogleFormActivity: state => {
            state.value = !state.value;
        },
    },
});
//console.log(counterSlice.reducer);
export const { toogleFormActivity } = formActivitySlice.actions;

export const selectFormActivity = state => state.formActivity.value;

export default formActivitySlice.reducer;

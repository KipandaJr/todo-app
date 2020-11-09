import { createSlice } from '@reduxjs/toolkit';

export const formAddActivitySlice = createSlice({
    name: 'formAddActivity',
    initialState: {
        value: false,
    },
    reducers: {
        toogleFormAddActivity: state => {
            state.value = !state.value;
        },
    },
});
//console.log(counterSlice.reducer);
export const { toogleFormAddActivity } = formAddActivitySlice.actions;

export const selectFormAddActivity = state => state.formAddActivity.value;

export default formAddActivitySlice.reducer;
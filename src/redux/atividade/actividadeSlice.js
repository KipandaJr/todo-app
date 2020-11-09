import { createSlice } from '@reduxjs/toolkit';

export const actividadeSlice = createSlice({
    name: 'actividade',
    initialState: {
        value: [],
    },
    reducers: {
        newActividade: (state, action) => {
            let array = state.value.map((element) => {
                return element
            });
            array.push(
                {
                    index: state.value["length"] !== 0 ? state.value[state.value["length"] - 1].index + 1 : 1,
                    name: action.payload.name,
                    indexCategoria: action.payload.indexCategoria,
                    data: new Date().toLocaleDateString()
                }
            );
            state.value = array;
        },
    },
});
//console.log(counterSlice.reducer);
export const { newActividade } = actividadeSlice.actions;

export const selectActividade = state => state.actividade.value;

export default actividadeSlice.reducer;

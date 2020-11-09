import { createSlice } from '@reduxjs/toolkit';

export const planoSlice = createSlice({
    name: 'plano',
    initialState: {
        value: [],
    },
    reducers: {
        newPlano: (state, action) => {
            let array = state.value.map((element) => {
                return element
            });
            array.push(
                {
                    index: state.value["length"] !== 0 ? state.value[state.value["length"] - 1].index + 1 : 1,
                    indexActividade: action.payload.indexActividade,
                    indexCategoria: action.payload.indexCategoria,
                    time: action.payload.time
                }
            );
            state.value = array;
        },
    },
});
//console.log(counterSlice.reducer);
export const { newPlano } = planoSlice.actions;

export const selectPlano = state => state.plano.value;

export default planoSlice.reducer;

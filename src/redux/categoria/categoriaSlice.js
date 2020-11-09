import { createSlice } from '@reduxjs/toolkit';

/**
 * Códigos para as categorias
 * 1º Domestico
 * 2º Academico
 * 3º Espiritualidade
 * 4º Pessoal
 * 5º Relaxo
 * 6º Outros
 */
export const categoriaSlice = createSlice({
    name: 'categoria',
    initialState: {
        value: [
            {
                index: 1,
                name: 'Domestico',
                icon: 1
            },
            {
                index: 2,
                name: 'Academico',
                icon: 2
            },
            {
                index: 3,
                name: 'Espiritualidade',
                icon: 3
            },
            {
                index: 4,
                name: 'Pessoal',
                icon: 4
            },
            {
                index: 5,
                name: 'Relaxo',
                icon: 5
            },
            {
                index: 6,
                name: 'Outros',
                icon: 6
            }
        ],
    },
    reducers: {
        newCategoria: (state, action) => {
            let array = state.value.map((element) => {
                return element
            });
            array.push(
                {
                    index: state.value["length"] !== 0 ? state.value[state.value["length"] - 1].index + 1 : 1,
                    name: action.payload.name,
                    icon: action.payload.icon,
                }
            );
            state.value = array;
        },
    },
});
//console.log(counterSlice.reducer);
export const { newCategoria } = categoriaSlice.actions;

export const selectCategoria = state => state.categoria.value;

export default categoriaSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import actividadeReducer from './redux/atividade/actividadeSlice';
import categoriaReducer from './redux/categoria/categoriaSlice';
import planoReducer from './redux/plano/planoSlice';
import formActivityReducer from './redux/outros/formActivitySlice';
import formAddActivityReducer from './redux/outros/formAddActivitySlice';

export default configureStore({
    reducer: {
        actividade: actividadeReducer,
        categoria: categoriaReducer,
        plano: planoReducer,
        formActivity: formActivityReducer,
        formAddActivity: formAddActivityReducer,
    },
});
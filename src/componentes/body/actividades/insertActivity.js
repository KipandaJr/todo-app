import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField } from '@material-ui/core';
import FiberNewOutlinedIcon from '@material-ui/icons/FiberNewOutlined';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useSelector, useDispatch } from 'react-redux';
import {
  newActividade,
} from '../../../redux/atividade/actividadeSlice';
import {
  toogleFormActivity,
  selectFormActivity
} from '../../../redux/outros/formActivitySlice';
import {
  newCategoria,
  selectCategoria
} from '../../../redux/categoria/categoriaSlice';
//import styled, { keyframes } from 'styled-components';
import './inBloco.css';
/*
const firstAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;
const secondAnimation = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;
const thirdAnimation = keyframes`
  0% {npm 
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;
const fourthAnimation = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
`;
const Linha = styled.span`
    transition:0.5;
    &:nth-child(1){
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:3px;
        background:linear-gradient(to right,#48b7ad,#4f48b7 130%);
        animation: ${firstAnimation} 2s linear infinite;
    }
    &:nth-child(2){
        position:absolute;
        top:0;
        right:0;
        width:3px;
        height:100%;
        background:linear-gradient(to right,#48b7ad,#4f48b7 130%);
        animation: ${secondAnimation} 2s linear infinite;
        animation-delay:1s;
    }
    &:nth-child(3){
        position:absolute;
        left:0;
        bottom:0;
        width:100%;
        height:3px;
        background:linear-gradient(to left,#48b7ad,#4f48b7 130%);
        animation: ${thirdAnimation} 2s linear infinite;
        animation-delay:1s;
    }
    &:nth-child(4){
        position:absolute;
        left:0;
        top:0;
        width:3px;
        height:100%;
        background:linear-gradient(to top,#48b7ad,#4f48b7 130%);
        animation: ${fourthAnimation} 2s linear infinite;
        animation-delay:1s;
    }

`;

const Dialog1 = styled(Dialog)({
    background: 'red',
    overflow: 'hidden'
});*/
const InsertActivity = () => {
  const [nomeActividade, setNomeActividade] = useState('');
  const [categoria, setcategoria] = useState('');
  const openForm = useSelector(selectFormActivity);
  const tpmCategoria = useSelector(selectCategoria);
  const dispatch = useDispatch();
  const submitData = () => {
    dispatch(newActividade({ name: nomeActividade, indexCategoria: getIndexCategoria() }));
    setNomeActividade('');
    closeForm();
  }

  const putActivityName = (event) => {
    setNomeActividade(event.target.value);
  };

  const putCategoria = (event, name) => {
    setcategoria(name);
  };

  const getIndexCategoria = () => {
    for (let i = 0; i < tpmCategoria["length"]; i++) {
      if (tpmCategoria[i].name === categoria)
        return tpmCategoria[i].index;
    }
    dispatch(newCategoria({ name: categoria, icon: 6 }));
    return tpmCategoria[tpmCategoria["length"] - 1].index + 1;
    //getIndexCategoria();
  }
  const closeForm = () => {
    setNomeActividade('');
    dispatch(toogleFormActivity());
  };
  return (
    <Dialog onClose={closeForm} aria-labelledby="customized-dialog-title" open={openForm} id="dialog">
      <DialogTitle style={{ background: 'linear-gradient(to bottom left,#48b7ad 30%,#4f48b7 130%)' }} id="form-dialog-title">
        <IconButton>
          <FiberNewOutlinedIcon style={{ fontSize: '40px', color: '#000', border: '3px solid #48b7ad', borderRadius: '50px' }} />
        </IconButton>
        Atividade
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Adicione uma actividade que faz com frequencia para que esteja elegivel na criação de um novo plano diario
        </DialogContentText>
        <TextField autoFocus margin="dense" value={nomeActividade} onChange={putActivityName} id="name" label="Nome da actividade" type="text" fullWidth />
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          inputValue={categoria}
          onInputChange={putCategoria}
          options={tpmCategoria.map((option) => option.name)}
          renderInput={(params) => (
            <TextField {...params} name="bela" label="Categoria" margin="normal" />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary" style={{ color: 'green' }} onClick={submitData}>
          Salvar
        </Button>
        <Button color="secondary" onClick={closeForm}>
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InsertActivity;         
import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField } from '@material-ui/core';
import FiberNewOutlinedIcon from '@material-ui/icons/FiberNewOutlined';
import Autocomplete from '@material-ui/lab/Autocomplete';
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
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} id="dialog">
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
        <TextField autoFocus margin="dense" id="name" label="Nome da actividade" type="text" fullWidth />
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={tpmCategoria.map((option) => option.nomeCat)}
          renderInput={(params) => (
            <TextField {...params} label="Categoria" margin="normal" />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary" style={{ color: 'green' }} >
          Salvar
                </Button>
        <Button color="secondary">
          Cancelar
                </Button>
      </DialogActions>
    </Dialog >
  );
};
const tpmCategoria = [
  { nomeCat: 'ana' }
]
export default InsertActivity;         
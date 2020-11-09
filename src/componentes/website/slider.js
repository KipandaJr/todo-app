import { IconButton } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import fundo from '../../_files/images/2020.svg'
import TextFieldsSharpIcon from '@material-ui/icons/TextFieldsSharp';

const Fundo = styled.div`
    display:flex;
    flex-direction:row-reverse;
    background:#fff;
    margin-top:80px;
    & img{
        height:600px;
    }
    @media(max-width:800px){
        flex-direction:column-reverse;
        img{
            height:100%;
        }
    }
`;

const Letreiro = styled.div`
    margin:auto;
    color:#41a098;
    text-align:center;
    text-transform:uppercase;
    font-size:35px;
    font-weight:100;
    position:relative;
    & h2{
        -webkit-text-emphasis-style: 'open';
        font-weight:100;
        margin-bottom:5px;
        margin-top:5px;
    }
    & h4{
        font-weight:300;
        margin-bottom:5px;
        margin-top:5px;
    }
    & h5{
        font-weight:500;
        margin-bottom:5px;
        margin-top:5px;
    }
    @media(max-width:800px){
        margin-top:60px;
        font-size:20px;
    }
`;
const Slide = () => {
    return (
        <Fundo>
            <img src={fundo} alt="fundo" />
            <Letreiro>
                <h2>Nesse ano</h2>
                <h4>Que tal seres mais organizado?</h4>
                <h5>Deixa-te de desculpas</h5>
                <span>use a ToDo-Tec</span><br />
                <IconButton style={{ border: '2px solid #48b7ad', boxShadow: '-1px -1px 8px rgba(0,0,0,.4)' }}>
                    <TextFieldsSharpIcon style={{ color: '#48b7ad', fontSize: '30px' }} />
                </IconButton>
            </Letreiro>
        </Fundo>
    );
}

export default Slide;
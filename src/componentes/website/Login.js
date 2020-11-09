import { Button, TextField } from '@material-ui/core';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import fundo from '../../_files/images/login.svg';
import { Redirect } from 'react-router-dom';

const Fundo = styled.div`
    display:flex;
    flex-direction:row-reverse;
    background:#fff;
    padding-top:50px;
    margin-top:60px;
    background:transparent;
    & img{
        height:550px;
    }
    @media(max-width:800px){
        flex-direction:column-reverse;
        align-items:center;
        img{
            width:100%;
            height:100%;
        }
    }
`;

const Letreiro = styled.div`
    padding:10px;
    margin:auto;
    color:#41a098;
    text-align:center;
    text-transform:uppercase;
    font-size:35px;
    font-weight:100;
    position:relative;
    border-left:3px dotted #41a098;
    & h2{
        -webkit-text-emphasis-style: 'open';
        font-weight:100;
        margin-bottom:5px;
        margin-top:5px;
    }
    @media(max-width:800px){
        font-size:20px;
    }
`;
const Login = () => {
    const [redirect, setRedirect] = React.useState(false);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const logar = () => {
        if ((username === "Kipas-ToDo-Tec") || (password === '123456789'))
            setRedirect(true);
        else
            alert("Login falhado");
    }

    const putUsername = (event) => {
        setUsername(event.target.value);
    }

    const putPassword = (event) => {
        setPassword(event.target.value);
    }

    useEffect(() => {
        alert("Dados de login\nNome de usuario: Kipas-ToDo-Tec\nPassword: 123456789");
    }, []);
    return (
        <Fundo>
            { redirect && <Redirect to="/account/" />}
            <img src={fundo} alt="fundo" />
            <Letreiro>
                <h2>Login</h2>
                <TextField margin="dense" id="name" value={username} onChange={putUsername} label="Nome de usuário" type="text" fullWidth />
                <TextField margin="dense" id="name" value={password} onChange={putPassword} label="Password" type="password" fullWidth />
                <Button color="primary" onClick={logar} style={{ backgroundColor: '#41a098', color: 'white', padding: '10px' }} fullWidth>
                    Logar
                </Button>
            </Letreiro>
        </Fundo>
    );
}

export default Login;
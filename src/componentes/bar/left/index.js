import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import foto from '../../../_files/images/index.jpg';
import dash from '../../../_files/icon/task.ico';
import calendar from '../../../_files/icon/calendar.ico';
import ideia from '../../../_files/icon/idea.ico';
import listTodo from '../../../_files/icon/list-todo.ico';

const Fundo = styled.div`
    width:300px;
    background: linear-gradient(to bottom left , #48b7ad, #4f48b7 130%);
    display:flex;
    height:1000px;
    flex-direction:column;
    align-items: center;
    padding-top:50px;
`;

const MyName = styled.span`
    color:#fff;
    font-size:18px;
    margin-top:10px;
    font-weight: 400;

`;

const MyJob = styled.span`
    color:#Fff;
    opacity:.8;
    font-size:15px;
    font-weight: lighter;
`;

const ListAction = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    margin-top:50px;
    color:#fff;
    font-size:15px;
    font-weight: lighter;
`;

const ListItem = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:10px 0;
    width:98%;
    &:hover{
        background:linear-gradient(to left ,#48b7ad 140%,#221e5a 100%);
        border-left:4px solid #221e5a;
        box-shadow:-5px 2px 5px #221e5a ;
    }
    &.selected{
        border-right:4px solid #221e5a;
    }
`;

const Icone = styled.img`
    width:40px;
    height:40px;
`;

export default function LeftBar() {
    return (
        <Fundo>
            <Avatar alt="Remy Sharp" src={foto} style={{ boxShadow: '0px -10px 50px rgba(0,0,0,.7)', height: '150px', width: '150px' }} />
            <MyName>Antonio Kipanda Cardoso</MyName>
            <MyJob>Estudante</MyJob>
            <Button style={{ backgroundColor: '#fff', fontWeight: '400', marginTop: '5px', padding: '0px 25px', textTransform: 'lowercase', color: '#48b7ad', borderRadius: '50px' }}>
                Ver perfil
            </Button>

            <ListAction>
                <ListItem className="selected">
                    <Icone alt="calendar" src={calendar} />
                    <span>Minhas actividades</span>
                </ListItem>
                <ListItem>
                    <Icone alt="dash" src={dash} />
                    <span>Planos</span>
                </ListItem>
                <ListItem>
                    <Icone alt="ideia" src={ideia} />
                    <span>Nova Tarefa</span>
                </ListItem>
                <ListItem>
                    <Icone alt="listTodo" src={listTodo} />
                    <span>Relatório de actividades</span>
                </ListItem>
            </ListAction>
        </Fundo>
    );
}
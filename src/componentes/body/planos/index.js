import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import Programacao from './programacao';
import More from './more';

const Fundo = styled.div`
    width: 100%;
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
`;

const Header = styled.div`
    width:100%;
    padding:5px;
    border-bottom:1px solid #48b7ad; 
    display:flex;
    flex-direction:column;
`;

const Text = styled.span`
    color:#48b7ad; 
    &.title{
        font-size:36px;
    }
`;
export default function Plano() {

    return (
        <Fundo>
            <Header>
                <Text className="title">
                    Planos
                </Text>
                <Text className="subtitle">
                    Gerencie e crie seus planos diários para que possas ter um dia produtivo.
                </Text>

            </Header>
            <Programacao />
            <More />
        </Fundo>
    );
}
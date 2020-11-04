import React from 'react';
import styled from 'styled-components';
import FiberNewOutlinedIcon from '@material-ui/icons/FiberNewOutlined';
import { Button, ButtonGroup, IconButton } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import UnarchiveIcon from '@material-ui/icons/Unarchive';
import './index.css';
const Fundo = styled.div`
    width: 100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
`;

const Item = styled.div`
    width:270px;
    height:300px;
    box-shadow:2px 1px 3px rgba(0,0,0,.2);
    margin-top:25px;
    border-radius:10px;
    position:relative;
    overflow:hidden;
    background:#48b7ad;
    &::before{
        content:'';
        position:absolute;
        top:-50%;
        width:100%;
        height:100%;
        background:linear-gradient(to bottom left ,#48b7ad 30%,#4f48b7 130%);
        transform:skewY(345deg);
        transition:.7s;
    }
    &:hover::before{
        top:-70%;
        transform:skewY(390deg);
    }
    &::after{
        content:'Kipas-Todo';
        position:absolute;
        bottom:0;
        left:0;
        font-weight:lighter;
        font-size:1.5em;
        color:rgba(0,0,0,.2);
    }
`;

const MyImg = styled.div`
    position:relative;
    width:100%;
    height:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:40px;
`;

const ContentBox = styled.div`
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    color:#fff;
    top:30px;
    transition:.5s;
`;

const Text = styled.p`
    margin-bottom:0px;
    margin-top:10px;
    text-transform:uppercase;
    text-align:center;
    &.title{
        font-size:20px;
        font-weight:light;
    }
    &.subtitle{
        font-size:17px;
        font-weight:lighter;
    }
    &.dataC{
        font-size:12px;
        font-weight:lighter;
    }
`;
export default function Actividades() {
    const tmp = [
        {
            task: 'Arrumar o Quintal',
            categoria: 'Domestico',
            data: '20/02/2020'
        },
        {
            task: 'Estudar para as parcelares',
            categoria: 'Acadêmico',
            data: '20/02/2020'
        },
        {
            task: 'Momento com Jah',
            categoria: 'Espiritualidade',
            data: '20/02/2020'
        },
        {
            task: 'Conversar com a familiar',
            categoria: 'Pessoal',
            data: '20/02/2020'
        },
        {
            task: 'Namorar',
            categoria: 'Relaxo',
            data: '20/02/2020'
        }
    ]
    return (
        <Fundo>
            {
                tmp.map((i) => {
                    return (
                        <Item className="item">
                            <MyImg >
                                <IconButton>
                                    <FiberNewOutlinedIcon style={{ fontSize: '100px', color: '#eee', border: '3px solid #48b7ad', borderRadius: '50px' }} />
                                </IconButton>
                            </MyImg>
                            <ContentBox className="content-box">
                                <Text className="title">{i.task}</Text>
                                <Text className="subtitle">{i.categoria}</Text>
                                <Text className="dataC">{i.data}</Text>
                                <ButtonGroup className="buttons" variant="text" aria-label="text primary button group">
                                    <Button><CheckCircleIcon style={{ color: 'green' }} /> </Button>
                                    <Button><UnarchiveIcon style={{ color: '#ddd' }} /></Button>
                                    <Button><CancelIcon style={{ color: '#810000' }} /></Button>
                                </ButtonGroup>
                            </ContentBox>
                        </Item>
                    );
                })
            }
        </Fundo>
    );
}
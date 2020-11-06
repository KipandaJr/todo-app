import React from 'react';
import styled from 'styled-components';
import FiberNewOutlinedIcon from '@material-ui/icons/FiberNewOutlined';
import { Button, ButtonGroup, IconButton } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import UnarchiveIcon from '@material-ui/icons/Unarchive';
const Fundo = styled.div`
    width: 100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
`;

const Item = styled.div`
    width:100%;
    height:100px;
    box-shadow:2px 1px 3px rgba(0,0,0,.2);
    margin-top:15px;
    background:#48b7ad;
    transition:.2s;
    display:flex;
    &:hover{
        border-left:2px solid #4f48b7;
    }
`;

const MyImg = styled.div`
    width:90px;
    height:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    transition:.5s;
    &::before{
        content:' ';
        color:rgba(0,0,0,.3);
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:10px;
        width:25%;
        height:100%;
        background:linear-gradient(to bottom , #48b7ad, #4f48b7 200%);
        box-shadow:-1px 1px 3px rgba(0,0,0,.2);
        position:absolute;
    }
`;

const ContentBox = styled.div`
    font-size:15px;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#fff;
    top:30px;
    transition:.5s;
`;
const ContentTitle = styled.div`
    margin-left:5px;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
`;
const MyButtonGroup = styled.div`
    border-left: 3px solid #f1f1f1;
    display:flex;
    height:100%;
    
`;

const Text = styled.p`
    margin-bottom:0px;
    margin-top:10px;
    text-transform:uppercase;
    &.title{
        font-size:20px;
        font-weight:light;
    }
    &.subtitle{
        font-size:17px;
        font-weight:lighter;
    }
    &.dataC{
        margin:15px;
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
                tmp.map((i, index) => {
                    return (
                        <Item key={index}>
                            <MyImg>
                                <IconButton>
                                    <FiberNewOutlinedIcon style={{ fontSize: '50px', color: '#eee', border: '3px solid #fff', borderRadius: '50px' }} />
                                </IconButton>
                            </MyImg>
                            <ContentBox>
                                <ContentTitle>
                                    <Text className="subtitle">{i.categoria}</Text>
                                    <div style={{ display: 'flex' }} >
                                        <Text className="title">{i.task}</Text>
                                        <Text className="dataC">{i.data}</Text>
                                    </div>
                                </ContentTitle>
                                <MyButtonGroup>
                                    <ButtonGroup variant="text" aria-label="text primary button group">
                                        <Button><CheckCircleIcon style={{ color: 'green' }} /> </Button>
                                        <Button><UnarchiveIcon style={{ color: '#ddd' }} /></Button>
                                        <Button><CancelIcon style={{ color: '#810000' }} /></Button>
                                    </ButtonGroup>
                                </MyButtonGroup>
                            </ContentBox>
                        </Item>
                    );
                })
            }
        </Fundo >
    );
}
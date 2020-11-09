import React from 'react';
import styled from 'styled-components';
import BarMenu from './barMenu';
import Clock from '../../_files/images/temporario.svg';

const Fundo = styled.div`
    margin-top:100px;
    display:flex;
    flex-direction:column;
    overflow:hidden;
`;
const ContentBox = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    @media(max-width:900px){
        flex-direction:column;
        align-items:center;
        &.meio-content{
            flex-direction:column-reverse;
            
        }
    }
`;
const Img = styled.img`
    width:50%;
    height:500px;
    @media(max-width:900px){
        width:85%;
    }
`;
const TodoTexto = styled.div`
    width:500px;
    margin:auto;
    color:#41a098;
    text-align:center;
    text-transform:uppercase;
    font-size:35px;
    font-weight:100;
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
    @media(max-width:900px){
        margin-top:50px;
        font-size:25px;
    }
`;
const Web = () => {
    return (
        <Fundo>
            <BarMenu />
            <ContentBox className="meio-content">
                <TodoTexto>
                    <h2>UPS, Desculpe</h2>
                    <h4>Estamos a preparar tudo para te sentires mais confortável</h4>
                    <h5>"ToDo-Tec"</h5>
                    <span>Brevemente disponivel</span><br />
                </TodoTexto>
                <Img className="meio" src={Clock} alt="organizacao" />
            </ContentBox>
        </Fundo>
    );
}

export default Web;
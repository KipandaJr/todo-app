import React from 'react';
import styled from 'styled-components';
import Organizacao from '../../_files/images/organização.svg';
import TodoMes from '../../_files/images/todoMes.svg';
import Encontro from '../../_files/images/encontro.svg';

const Fundo = styled.div`
    display:flex;
    flex-direction:column;
    background:#fff;
    width:100%;
    flex-wrap:wrap;
    margin-top:60px;
    align-items:center;
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
    background:#fbfbfbd1;
    @media(max-width:900px){
        background:transparent;
        width:85%;
        &.meio{
            height:60%;
            width:60%;
            margin-top:30px;
        }
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

const Marketing = () => {
    return (
        <Fundo>
            <ContentBox>
                <TodoTexto>
                    <h2>Focamos na tua produtividade</h2>
                    <h4>Uma vez agendando</h4>
                    <h5>Nunca mais esquecido!</h5>
                    <span>use a ToDo-Tec</span><br />
                </TodoTexto>
                <Img src={Organizacao} alt="organizacao" />
            </ContentBox>
            <ContentBox className="meio-content">
                <Img className="meio" src={TodoMes} alt="organizacao" />
                <TodoTexto>
                    <h2>Cansado de rever a sua agenda?</h2>
                    <h4>Faça seus planos...</h4>
                    <h4>diários, semanais e mensais</h4>
                    <h5>Nós cuidaremos do resto</h5>
                    <span>use a ToDo-Tec</span><br />
                </TodoTexto>
            </ContentBox>
            <ContentBox>
                <TodoTexto>
                    <h2>Saia Sem peso na consciência</h2>
                    <h4>seus compromissos é nossa responsabilidade</h4>
                    <h5>avisaremos sobre elas!<br /> mas...</h5>
                    <span>use a ToDo-Tec</span><br />
                </TodoTexto>
                <Img src={Encontro} alt="organizacao" />
            </ContentBox>
        </Fundo>
    );
}

export default Marketing;
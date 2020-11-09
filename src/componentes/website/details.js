import React from 'react';
import styled from 'styled-components';
import TextFieldsSharpIcon from '@material-ui/icons/TextFieldsSharp';
import logo1 from '../../_files/icon/fast.png';
import logo2 from '../../_files/icon/cumprimento.png';
import logo3 from '../../_files/icon/agendamento.png';

const Fundo = styled.div`
    display:flex;
    flex-direction:column;
    padding:10px;
`;

const Linha1 = styled.div`
    margin-top:15px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:#48b7ad;
    text-align:center;
    & h2{
        font-size:35px;
        text-transform:uppercase;
        font-weight:600;
        margin-bottom:10px;
    }
    & span{
        color:rgba(0,0,0,.5);
        font-size:18px;
        width:85%;
    }
`;

const Linha2 = styled.div`
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
        top:0%;
        width:100%;
        height:100%;
        left:50%;
        background:linear-gradient(to top right ,#48b7ad 30%,#4f48b7 130%);
        transition:.7s;
    }
    &:hover::before{
        left:-50%;
        background:linear-gradient(to bottom left ,#48b7ad 30%,#4f48b7 130%);
        
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

const MyImg = styled.div`
    position:relative;
    width:100%;
    height:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:40px;
`;


const Details = () => {
    return (
        <Fundo>
            <Linha1>
                <h2>O que à <TextFieldsSharpIcon style={{ fontSize: '40px', alignSelf: 'center' }} />odo-Tec propõe</h2>
                <span>
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                </span>
            </Linha1>
            <Linha2>
                <Item className="item">
                    <MyImg >
                        <img src={logo1} alt="1" style={{ width: '50%' }} />
                    </MyImg>
                    <ContentBox className="content-box">
                        <Text className="title">Agilidade</Text>
                        <Text className="dataC">
                            lorem Insp lorem Insp lorem Insp lorem Insp lorem Insp lorem Insp lorem Insp
                            lorem Insp lorem Insp lorem Insp lorem Insp lorem Insp
                    </Text>
                    </ContentBox>
                </Item>
                <Item className="item">
                    <MyImg >
                        <img src={logo2} alt="1" style={{ width: '50%' }} />
                    </MyImg>
                    <ContentBox className="content-box">
                        <Text className="title">Comprimisso</Text>
                        <Text className="dataC">
                            lorem Insp lorem Insp lorem Insp lorem Insp lorem Insp lorem Insp lorem Insp
                            lorem Insp lorem Insp lorem Insp lorem Insp lorem Insp
                    </Text>
                    </ContentBox>
                </Item>
                <Item className="item">
                    <MyImg >
                        <img src={logo3} alt="1" style={{ width: '50%' }} />
                    </MyImg>
                    <ContentBox className="content-box">
                        <Text className="title">Agendamento</Text>
                        <Text className="dataC">
                            lorem Insp lorem Insp lorem Insp lorem Insp lorem Insp lorem Insp lorem Insp
                            lorem Insp lorem Insp lorem Insp lorem Insp lorem Insp
                    </Text>
                    </ContentBox>
                </Item>
            </Linha2>
        </Fundo>
    );
}

export default Details;
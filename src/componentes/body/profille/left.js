import React from 'react';
import styled from 'styled-components';
import { Avatar, Button, Checkbox, FormControlLabel, FormGroup, IconButton } from '@material-ui/core';

import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            // This is green.A700 as hex.
            main: '#48b7ad',
        },
    },
});
const Fundo = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:70%;
    border-right:1px solid #abaaaa;
    padding: 30px 0px;
`;

const Text = styled.span`
    color:#48b7ad;
    font-size:18px;
    font-weight: 500;
    text-align:center;
    &.title{
        font-size:17px;
        font-weight: 600;
        margin-top:250px;

    }
    &.subTitleValue{
        font-size:17px;
        font-weight: 300;
        color:rgba(0,0,0,.7);
    }
`;

const DivOfficial = styled.div`
    width:85%;
    border-bottom:1px solid #abaaaa;
    padding:20px 50px;
    &.div-none{
        border:none;
    }
`;

const Title = styled.h1`
    font-size:18px;
    color:#48b7ad;
    font-weight:400;
`;

const Content = styled.div`
    display:flex;
    justify-content: space-between;
    margin-top:15px;
`;
export default function Left() {
    return (

        <Fundo>
            <DivOfficial>
                <Text className="title">
                    Informações da Organização
                </Text>
                <Content>
                    <div>
                        <Title>
                            Email
                        </Title>
                        <Text className="subTitleValue">
                            antoniokipanda@gmail.com
                        </Text>
                    </div>
                    <div>
                        <Title>
                            Nº telefone
                        </Title>
                        <Text className="subTitleValue">
                            945990920
                        </Text>
                    </div>
                    <div>
                        <Title>
                            Endereço
                        </Title>
                        <Text className="subTitleValue">
                            Angola, Luanda, Dangarreux
                        </Text>
                    </div>
                </Content>
            </DivOfficial>
            <DivOfficial>
                <Text className="title">
                    Informações da Pessoais
                </Text>
                <Content>
                    <div>
                        <Title>
                            Instagram
                        </Title>
                        <Text className="subTitleValue">
                            @KipandaCardoso
                        </Text>
                    </div>
                    <div>
                        <Title>
                            Twitter
                        </Title>
                        <Text className="subTitleValue">
                            @Kipasjr
                        </Text>
                    </div>
                    <div>
                        <Title>
                            Facebook
                        </Title>
                        <Text className="subTitleValue">
                            @KipandaCardoso
                        </Text>
                    </div>
                </Content>
            </DivOfficial>
            <DivOfficial className="div-none">
                <Text className="title">
                    Metas a alcançar...
                </Text>
                <Content>
                    <ThemeProvider theme={theme}>
                        <FormGroup row>
                            <FormControlLabel
                                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" color="primary" />}
                                label="Parar de procrastinar" style={{ fontSize: '17px', fontWeight: '300', color: 'rgba(0,0,0,.7)' }}
                            />
                            <FormControlLabel
                                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" color="primary" />}
                                label="Cumprir metas"
                                style={{ fontSize: '17px', fontWeight: '300', color: 'rgba(0,0,0,.7)' }}
                            />
                            <FormControlLabel
                                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" color="primary" />}
                                label="Cumprir metas"
                                style={{ fontSize: '17px', fontWeight: '300', color: 'rgba(0,0,0,.7)' }}
                            />
                            <FormControlLabel
                                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" color="primary" />}
                                label="Cumprir metas"
                                style={{ fontSize: '17px', fontWeight: '300', color: 'rgba(0,0,0,.7)' }}
                            />
                            <FormControlLabel
                                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" color="primary" />}
                                label="Cumprir metas"
                                style={{ fontSize: '17px', fontWeight: '300', color: 'rgba(0,0,0,.7)' }}
                            />
                        </FormGroup>
                    </ThemeProvider>
                </Content>
            </DivOfficial>
        </Fundo>
    );
}
import React from 'react';
import styled from 'styled-components';
import { Avatar, Button, IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import foto from '../../../_files/images/index.jpg';

const Fundo = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:30%;
    border-right:1px solid #abaaaa;
    padding: 30px 0px;
`;

const Text = styled.span`
    color:#48b7ad;
    font-size:18px;
    font-weight: 500;
    text-align:center;
    margin-top:10px;
    &.job{
        font-size:15px;
        font-weight: 300;
        margin-top:10px;
        color:#abaaaa;
    }
    &.company{
        font-size:15px;
        font-weight: 300;
        margin-top:30px;
        color:#abaaaa;
    }
`;

const MyIcones = styled.div`
    margin-top:50px;
`;

export default function Right() {
    return (
        <Fundo>
            <IconButton>
                <Avatar alt="Remy Sharp" src={foto} style={{ border: '2px solid #48b7ad', height: '80px', width: '80px' }} />
            </IconButton>
            <Text>António Kipanda Cardoso</Text>
            <Text className="job">Estudante</Text>
            <Text className="company">@Hedaki-Tech</Text>
            <Button style={{ marginTop: '55px', background: '#48b7ad', border: 'none', color: '#fff' }}>
                <NotificationsActiveIcon />Agendar um compromisso
            </Button>
            <MyIcones>
                <IconButton>
                    <FacebookIcon style={{ color: '#abaaaa' }} />
                </IconButton>
                <IconButton>
                    <TwitterIcon style={{ color: '#abaaaa' }} />
                </IconButton>
                <IconButton>
                    <GitHubIcon style={{ color: '#abaaaa' }} />
                </IconButton>
            </MyIcones>
        </Fundo>
    );
}
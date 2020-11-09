import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import TextFieldsSharpIcon from '@material-ui/icons/TextFieldsSharp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CancelIcon from '@material-ui/icons/Cancel';
import Menu from './menu';
const Fundo = styled.div`
    position:fixed;
    top:0;
    display: flex;
    align-items:center;
    justify-content:space-between;
    padding:5px;
    background:#fff;
    box-shadow:2px 3px 4px rgba(0,0,0,.4);
    z-index:999;
    width:100%;
    & .normal button, & .responsivo-menu button{
        margin:0px 10px;
        padding:13px 5px;
        border-top-left-radius:15px;
        border-bottom-right-radius:15px;  
        color: #48b7ad;      
    }
    & .responsivo{
        display:none;
    }
    & .responsivo-menu{
        display:none;
    }
    @media(max-width:800px){
        & .responsivo-menu{
            position:absolute;
            flex-direction:column;
            top:100%;
            left:0;
            background:linear-gradient(to bottom left , #48b7ad 100%, #4f48b7 130%);
            width:100%;
            display:block;
        }
        & .normal{
            display:none;
        }
        & .open{
            display:block;
        }
        & .responsivo-menu button {
            color:#fff;
            width:100%;
            margin:0px;
            border-radius:0px;
        }
        & .responsivo{
            display:block;
        }
    }
`;

const Top = () => {
    const [who, setWho] = React.useState(false);

    const changeIcon = () => {
        setWho(!who);
    }
    return (
        <Fundo>
            <IconButton style={{ border: '2px solid #48b7ad', boxShadow: '-1px -1px 8px rgba(0,0,0,.4)' }}>
                <TextFieldsSharpIcon style={{ color: '#48b7ad', fontSize: '30px' }} />
            </IconButton>
            <Menu type="normal" />
            <div className="responsivo">
                <IconButton style={{}}>
                    {who ?
                        <CancelIcon style={{ color: '#48b7ad', fontSize: '30px' }} onClick={changeIcon} /> :
                        <DashboardIcon style={{ color: '#48b7ad', fontSize: '30px' }} onClick={changeIcon} />}
                </IconButton>
                {who && <Menu type="responsivo-menu" />}
            </div>
        </Fundo>
    );
};

export default Top;
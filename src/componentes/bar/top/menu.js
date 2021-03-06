import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Avatar, Badge, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsPowerIcon from '@material-ui/icons/SettingsPower';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import foto from '../../../_files/images/index.jpg';

const Fundo = styled.div`
    display: flex;
    align-items:center;
`;
export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Fundo>
            <IconButton style={{ marginRight: '3px' }}>
                <Badge badgeContent={4} color="error">
                    <NotificationsIcon style={{ color: '#48b7ad' }} />
                </Badge>
            </IconButton>
            <IconButton>
                <Avatar alt="Remy Sharp" src={foto} style={{ border: '2px solid #48b7ad' }} />
            </IconButton>
            <Button aria-controls="simple-menu" aria-haspopup="true" style={{ color: '#48b7ad' }} onClick={handleClick}>
                @KipandaCardoso <ExpandMoreIcon />
            </Button>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose} style={{ color: '#48b7ad' }}><PersonPinIcon />Editar perfil</MenuItem>
                <MenuItem onClick={handleClose}><SettingsPowerIcon color="error" />Terminar sessão</MenuItem>
            </Menu>
        </Fundo>
    );
}

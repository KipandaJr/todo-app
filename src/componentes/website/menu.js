import React from 'react';
import { Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Redirect } from 'react-router-dom';
const Menu = (props) => {
    const [redirectLogin, setRedirectLogin] = React.useState(false);
    const [redirectHome, setRedirectHome] = React.useState(false);
    const [redirectTemp, setRedirectTemp] = React.useState(false);
    const goToLogin = (alink) => {
        setRedirectLogin(true);
    }
    const goToHome = (alink) => {
        setRedirectHome(true);
    }
    const goToBreve = (alink) => {
        setRedirectTemp(true);
    }
    return (
        <div className={props.type}>
            { redirectLogin && <Redirect to="/login/" />}
            { redirectTemp && <Redirect to="/em-breve/" />}
            { redirectHome && <Redirect to="/" />}
            <Button aria-controls="simple-menu" onClick={goToHome}>
                <HomeIcon /> Home
                </Button>
            <Button aria-controls="simple-menu" onClick={goToBreve}>
                <LiveHelpIcon /> O que é?
                </Button>
            <Button aria-controls="simple-menu" onClick={goToBreve}>
                <FitnessCenterIcon /> Como funciona?
                </Button>
            <Button aria-controls="simple-menu" onClick={goToLogin}>
                <ExitToAppIcon /> login
            </Button>
        </div>
    );
};
export default Menu;
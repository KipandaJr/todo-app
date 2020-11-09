import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Profille from './perfil';
import Actividades from './actividades';
import Planos from './planos';
import Website from './website';
import Login from './login';
import Temporario from './temporario';
const Root = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Website} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/em-breve" component={Temporario} />
                <Route exact path="/account/" component={Actividades} />
                <Route exact path="/account/ver-perfil" component={Profille} />
                <Route exact path="/account/planos" component={Planos} />
            </Switch>
        </Router>
    );
}

export default Root;
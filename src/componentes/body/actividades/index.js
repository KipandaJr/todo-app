import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import React from 'react';
import styled from 'styled-components';

import ActividadesList from './inList';
import ActividadesBloco from './inBloco';

const Fundo = styled.div`
    display:flex;
    flex-direction:column;
`;
const Actividades = () => {
    const [view, setView] = React.useState('blocos');
    const handleChange = (event, nextView) => {
        if (nextView !== null && view !== nextView)
            setView(nextView);
    };
    return (
        <Fundo>
            <ToggleButtonGroup orientation="horizontal" value={view} style={{ alignSelf: 'flex-end' }} exclusive onChange={handleChange}>
                <ToggleButton value="blocos" aria-label="blocos">
                    <ViewModuleIcon />
                </ToggleButton>
                <ToggleButton value="lista" aria-label="lista">
                    <ViewListIcon />
                </ToggleButton>
            </ToggleButtonGroup>
            {(view === 'lista') ? <ActividadesList /> : <ActividadesBloco />}
        </Fundo>
    );
};

export default Actividades;
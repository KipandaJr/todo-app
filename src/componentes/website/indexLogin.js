import React from 'react';
import styled from 'styled-components';
import BarMenu from './barMenu';
import Login from './Login';
const Fundo = styled.div`
    background:#efefef;
    display:flex;
    flex-direction:column;
    overflow:hidden;
`;
const Web = () => {
    return (
        <Fundo>
            <BarMenu />
            <Login />
        </Fundo>
    );
}

export default Web;
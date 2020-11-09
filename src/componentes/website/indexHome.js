import React from 'react';
import styled from 'styled-components';
import BarMenu from './barMenu';
import Slide from './slider';
import Details from './details';
import Marketing from './marketing';
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
            <Slide />
            <Details />
            <Marketing />
        </Fundo>
    );
}

export default Web;
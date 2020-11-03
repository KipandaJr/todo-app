import React from 'react';
import styled from 'styled-components';
import SimpleMenu from './menu';
import Search from './search';

const Fundo = styled.div`
    width:100%;
    background: #fff;
    display:flex;
    Justify-content:space-between;
    height:70px;
    align-Items:center;
    box-shadow:2px 3px 5px rgba(0,0,0,.6);
`;

export default function TopoBar() {
    return (
        <Fundo>
            <Search />
            <SimpleMenu />
        </Fundo>
    );
}
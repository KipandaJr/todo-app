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
    box-shadow:2px 1px 3px rgba(0,0,0,.2);
`;

export default function TopoBar() {
    return (
        <Fundo>
            <Search />
            <SimpleMenu />
        </Fundo>
    );
}
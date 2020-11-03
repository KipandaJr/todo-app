import React from 'react';
import styled from 'styled-components';
import Right from './right';
import Left from './left';

const ProfilleContent = styled.div`
    background:#fff;
    width:100%;
    box-shadow:2px 1px 3px rgba(0,0,0,.2);
    display:flex;
    flex-wrap:nowrap;
`;

export default function Profille() {
    return (
        <ProfilleContent>
            <Right />
            <Left />
        </ProfilleContent>
    );
}
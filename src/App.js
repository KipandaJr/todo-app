import React from 'react';
import LeftBar from './componentes/bar/left';
import TopoBar from './componentes/bar/top';
//import Profille from './componentes/body/profille';
import Actividades from './componentes/body/actividades';
//import Planos from './componentes/body/planos/';
import styled from 'styled-components';

const MyContainer = styled.div`
  display:flex;
`;
const Right = styled.div`
  background:#f1f1f18c;
  display:flex;
  flex-direction:column;
  width:80%;
  margin-left:300px;
  height:650px;
`;

const Body = styled.div`
  display:flex;
  padding:10px;
  width:90%;
  margin:4px auto;
`;
export default function App() {
  return (
    <MyContainer>
      <LeftBar />
      <Right>
        <TopoBar />
        <Body>
          <Actividades />
        </Body>
      </Right>
    </MyContainer>
  );
}
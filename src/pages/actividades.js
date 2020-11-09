import React from 'react';
import LeftBar from '../componentes/bar/left';
import TopoBar from '../componentes/bar/top';
import Actividades from '../componentes/body/actividades';
import InsertActivity from '../componentes/body/actividades/insertActivity';
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
`;


const Body = styled.div`
  display:flex;
  flex-direction:column;
  padding:10px;
  width:90%;
  margin:4px auto;
`;
export default function App() {
  React.useEffect(() => {
    alert("Infelizmente essa pagina ainda não é responsiva\nVisualize esse site como se estivesse a ver no computador\nPara melhor experiência\nEquipe da ToDo-Tec AGRADECE à compreensão");
  }, []);
  return (
    <MyContainer>
      <LeftBar />
      <Right>
        <TopoBar />
        <Body>
          <Actividades />
          <InsertActivity />
        </Body>
      </Right>
    </MyContainer>
  );
}
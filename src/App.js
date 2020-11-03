import React from 'react';
import LeftBar from './componentes/bar/left';
import TopoBar from './componentes/bar/top';
import styled from 'styled-components';

const MyContainer = styled.div`
  display:flex;
`;
const Right = styled.div`
  display:flex;
  flex-direction:column;
  width:80%;
`;
function App() {
  return (
    <MyContainer>
      <LeftBar />
      <Right>
        <TopoBar />
      </Right>
    </MyContainer>
  );
}

export default App;

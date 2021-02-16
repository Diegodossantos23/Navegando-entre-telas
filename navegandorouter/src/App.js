import React from 'react'
import Router from './routes/Router';
import styled from 'styled-components'

const AppContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
`
const App = () => {
  return (
    <AppContainer>
     <Router/>
    </AppContainer>
  );
}

export default App;

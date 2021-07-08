import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from "./components/Header.js"
import styled from "@emotion/styled"

const IndexDiv = styled.div`
background: #2b2765;
height: 100vh;
`

ReactDOM.render(
  <IndexDiv>
    <Header/>
    <App/>
  </IndexDiv>,
  document.getElementById('root')
);


reportWebVitals();

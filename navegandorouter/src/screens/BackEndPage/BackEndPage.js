import React from 'react';
import { NodeLogo } from '../../assets/img';
import BackButton from '../../components/BackButton/BackButton';
import {BackEndContainer} from './BackStyled'

const BackEndPage = () => (
  <BackEndContainer>
    <img src={NodeLogo} alt="logo"/>

    <p>
      Node.js é uma tecnologia usada para executar código JavaScript fora do navegador. Com ele podemos construir aplicações web em geral, desde web sites até APIs e microsserviços.
    </p>

    <a href="https://www.devmedia.com.br/node-js/"> Guia de Node.js</a>

    <BackButton />
  </BackEndContainer>
);

export default BackEndPage;
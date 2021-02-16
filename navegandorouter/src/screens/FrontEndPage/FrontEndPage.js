import React from 'react';
import BackButton from '../../components/BackButton/BackButton';
import styled from 'styled-components'
import { ReactLogo } from '../../assets/img';
import {FrontEndContainer} from './FrontStyled'

const FrontEndPage = () => (

  <FrontEndContainer>
    <img src={ReactLogo} alt="logo"/>
    <div>
        <p>
        React é uma biblioteca JavaScript para a criação de interfaces de usuário e, nesse contexto, uma das tecnologias mais utilizadas pelo mercado. No guia abaixo você aprenderá quais são os pré-requisitos para iniciar no React do jeito certo e como criar as suas primeiras SPAs com ela.
        </p>
    </div>

    <a href="https://reactjs.org/"> Guia de React</a>

    <BackButton />
  </FrontEndContainer>
);

export default FrontEndPage;
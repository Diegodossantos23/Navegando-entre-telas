import React from 'react';
import { GoButtonContainer } from './ButtonStyed';


const GoButton = (props) => (
  <div>
    <GoButtonContainer onClick={props.coordinator}>Go Back</GoButtonContainer>
  </div>
);

export default GoButton;
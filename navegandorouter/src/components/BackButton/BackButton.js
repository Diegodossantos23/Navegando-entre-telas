import React from 'react';
import { goBack } from '../../routes/Coordinator';
import { BackButtonContainer } from './ButtonStyed';
import {useHistory} from 'react-router-dom'

const BackButton = () =>{

  const history = useHistory()
  return(    
    <div>
        <BackButtonContainer
        onClick={() => goBack(history)}>
          Go Back
        </BackButtonContainer>
    </div>
);
} 

export default BackButton;
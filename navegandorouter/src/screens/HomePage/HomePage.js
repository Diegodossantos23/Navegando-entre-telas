import React from 'react'
import { goToFrontEndPage, goToBackEndPage, } from '../../routes/Coordinator'
import {useHistory} from 'react-router-dom'
import { StackContainer, FrontEndButton,BackEndButton } from './HomeStyled'

const HomePage = () => {
    const history = useHistory()

    return(

        <div>
            <h1>Escolha seu caminho em JavaSCript</h1>
            <StackContainer>
            
                <FrontEndButton onClick={() => goToFrontEndPage(history)}>Front-End</FrontEndButton>
                <BackEndButton onClick={() =>goToBackEndPage(history)}>Back-End</BackEndButton>
            </StackContainer>

        </div>
    )
}
export default HomePage
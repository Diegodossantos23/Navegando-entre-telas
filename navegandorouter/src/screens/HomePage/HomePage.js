import React from 'react'
import { goToFrontEndPage, goToBackEndPage, } from '../../routes/Coordinator'
import {useHistory} from 'react-router-dom'
import { HomePageContainer,StackContainer, FrontEndButton,BackEndButton } from './HomeStyled'

const HomePage = () => {
    const history = useHistory()

    return(

        <HomePageContainer>
            <h1>Escolha seu caminho em JavaScript</h1>
            <StackContainer>
            
                <FrontEndButton onClick={() => goToFrontEndPage(history)}>Front-End</FrontEndButton>
                <BackEndButton onClick={() =>goToBackEndPage(history)}>Back-End</BackEndButton>
            </StackContainer>

        </HomePageContainer>
    )
}
export default HomePage
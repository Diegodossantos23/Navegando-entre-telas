import React from 'react'
import { goToFrontEndPage, goToBackEndPage, goBack} from '../../routes/Coordinator'
import GoButton from '../../components/GoButton/GoButton'

const HomePage = () => {
    return(

        <div>
            <h1>Escolha seu caminho em JavaSCript</h1>

            <div>
                <GoButton>Front-End</GoButton>
                <GoButton>Back-End</GoButton>
            </div>

        </div>
    )
}
export default HomePage
import styled from 'styled-components'

export const HomePageContainer = styled.div`
    background-color:#F2CF1D;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    
    height: 300px;
    width: 400px;

    border-radius:10px;

    h1{
        color: #1a1a1a;
    }

    
`


export const StackContainer = styled.div`
    display: flex;
    justify-content: space-between;
    text-align:center;
    align-items:center;
    margin-top: 50px;
    height: 200px;

    button:hover{   
        background-color:#D3BF2C;
        color:#222222;
        cursor: pointer;

    }
`

export const FrontEndButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 120px;
    height: 50px;

    background-color: #05DBF2;
    color: #fff;

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    border:none;
    border-radius:10px;

    margin:30px;
`

export const BackEndButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 120px;
    height: 50px;

    background-color: #448C42;
    color: #fff;

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    border:none;
    border-radius:10px;

    margin:30px;
`
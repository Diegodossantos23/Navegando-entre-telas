import styled from 'styled-components'

export const BackEndContainer = styled.div`
    background-color: #333333;
    color:#fff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    min-width:377px;

    border:none;
    border-radius:10px;
    
    p{  
        margin:30px;
        width:500px; 
        min-width:377px;   
    }

    button{
        margin:20px;
        color:#FFF;
    }
    
    button:hover{
        cursor: pointer;
        background-color:#9782e3;
    }

    img{
        width:300px;
        min-width:200px;
        margin:20px
    }

    a{
        text-decoration:none;
        color:#448C42;
    }
`
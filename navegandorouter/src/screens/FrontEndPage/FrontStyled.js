import styled from 'styled-components'

export const FrontEndContainer = styled.div`
    background-color: #222222;
    color:#fff;

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    border:none;
    border-radius:10px;

    width: 55vw;
    height: 70vh;

    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    align-items:center;
    align-content:center;

    border: 1px solid white;

    
    p{  
        margin:30px;
        width:30vw;
        border-bottom: 1px solid white;    
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
        margin:20px;
        border-radius:100%;
    }

    a{
        text-decoration:none;
        color:#0BADBF;
    }

    a:hover{
        color:#05DBF2; 
    }
    
        
        
    @media screen and (min-width: 375px) and (max-width: 800px) {
        

            img{
                width:120px;
            }

            p{
                font-size: 12px;
            }
        }
        `

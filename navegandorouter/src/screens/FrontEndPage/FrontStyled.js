import styled from 'styled-components'

export const FrontEndContainer = styled.div`
    background-color: #222222;
    color:#fff;

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    border:none;
    border-radius:10px;

    min-width: 377px;
   
    
    p{  
        margin:30px;
        width:500px;    
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
        margin:20px
    }

    a{
        text-decoration:none;
        color:#05DBF2;
    }
    
        
        
    @media screen and (min-width: 377px) and (max-width: 800px) {
        
        
        
        div ,p{
               
                flex-direction:column;
                justify-content:center;
                text-align:center;
                align-items:center;

                width:300px;
                height:200px;
            }

            img{
                width:200px;
            }
        }
        `

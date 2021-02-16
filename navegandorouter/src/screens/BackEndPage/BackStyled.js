import styled from 'styled-components'

export const BackEndContainer = styled.div`
    background-color: #333333;
    color:#fff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    width:55vw;
    height: 70vh;

    border:none;
    border-radius:10px;

    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    align-items:center;
    align-content:center;

    p{  
        margin:30px;
        width:30vw;
        color:#FFF;
        border-bottom: 1px solid #fff;
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
        width:270px;
        margin:20px;
        border-radius: 100%;
        border-bottom: 4px solid #448C42;
      
    }

 
    a{
        text-decoration:none;
        color:#448C42;
        
    }

    a:hover{
        color:#76BF54;
    }

    @media screen and (min-width: 375px) and (max-width: 800px) {
        
        img{
            width:150px;
        }

        p{
            display:flex;
            width:50vw;
            font-size:12px;
            
 
        }
    }
`
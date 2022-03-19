import styled from 'styled-components';

export const NavMenu = styled.div`
 
@media only screen and (min-width:300px) and (max-width:860px) {
    display:none;
    ${props => props.active ? "display:block;" : "display:none;"}
}

    img {

        width:35px;
        height:35px;
        padding:5px;
     
        @media only screen and (min-width:860px) {
            display:none;
        }

        @media only screen and (max-width:859px) {
            position:absolute;
            top:10px;
            right:10px;
        }
    }

`;

export const Nav = styled.nav`

    ul {
        display:flex;
        list-style:none;
        color:white;
        padding:0px;
 
        @media only screen and (min-width:300px) and (max-width:860px) {
            position:fixed;
            justify-content:center;
            width:100%;
            min-height:100%;
            right:0px;
            top:0px;
            align-items:center;
            flex-direction:column;
            animation: slide 0.3s;
            z-index:50;
            padding:0px;
            background: rgba(50, 86, 175, 0.542);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(5px);
            font-size:18px;

        }
        
        li {
            padding:15px;
            transition:all 0.1s linear;
            color:white;
        }

        li:hover {
            transform: scale(1.1);
            cursor:pointer;
            font-weight:bold;
      
            @media only screen and (min-width:300px) and (max-width:860px) {
  
                border-bottom:1px solid white;

            }
            
        }
        
    }

@keyframes slide {
    from {transform: translateX(100%);}
    to {transform: translateX(0px);}	
}

    
`;
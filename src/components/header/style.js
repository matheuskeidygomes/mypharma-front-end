import styled from 'styled-components';

export const Header = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:linear-gradient(#064CB4, #1E98A8);
    padding:10px;
`;

export const Logo = styled.span`
    font-size:50px;
    display:flex;
    align-items:center;

    .logo {
        width:250px;
    }
`;

export const Toggle = styled.img`

    width:50px;
    height:50px;

    ${props => props.active ? "display:none;" : "display:block;"}

    @media only screen and (min-width:860px) {
        display:none;
    }
    
}
`;
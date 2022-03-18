import styled from 'styled-components';

export const TableItems = styled.tr`

.bodyItem {
    padding:8px;
    font-size:15px;
    background-color:#E4E4E4;  
    border-radius:3px;

    
    img {
        width:25px;
    }
}

.hidden-sm {
    @media only screen and (max-width:450px) {
        display:none;
    }
}

.hidden-md {
    @media only screen and (min-width:451px) and (max-width:600px) {
        display:none;
    }
}


.hidden-lg {
    @media only screen and (min-width:601px) and (max-width:950px) {
        display:none;
    }
}

.icon {
    cursor:pointer;
}


`;

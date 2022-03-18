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

.hidden {
    @media only screen and (max-width:600px) {
        display:none;
    }
}

.icon {
    cursor:pointer;
}


`;

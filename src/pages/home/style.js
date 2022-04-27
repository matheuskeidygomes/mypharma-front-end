import styled from 'styled-components';

export const Container = styled.div`

    padding:50px 10px 50px 10px;
    display:flex;
    justify-content:center;
    align-items:center;

    div {
        text-align:center;
        display:flex;
        flex-direction:column;

        span {
            padding:10px;
            font-size:30px;
            color:rgb(40, 163, 201);
        }
    }

    .welcome1 {
        opacity:0;
        animation: fade 2s forwards;
    }
    
    .welcome2 {
        opacity:0;
        animation: fade 2s 1.5s forwards;
    }

    @keyframes fade {
        100% {opacity: 1;}	
    }


`;
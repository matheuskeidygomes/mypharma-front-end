import styled from 'styled-components';

export const Container = styled.div `

padding:50px;
display:flex;
justify-content:center;
align-items:center;

form {
    display:flex;
    flex-direction:column;
    border-radius:7px;
    padding:15px;
    text-align:left;
    background-color:rgb(218, 218, 218);
    box-shadow: 5px 10px rgba(29, 29, 29, 0.131);
    min-width:500px;

    @media only screen and (max-width:630px) {

        min-width:350px;
        
    }

    @media only screen and (max-width:450px) {

        min-width:300px;
        
    }
        

    span {
        padding:8px;
    }

    input {
        padding:10px;
        margin:8px;
        border-radius:8px;
        outline:none;
        border:0px;
    }

    select {
        padding:10px;
        margin:8px;
        border-radius:8px;
        outline:none;
        border:0px;
        background-color:white;
    }

    button {
        margin:8px;
        padding:10px;
        border-radius:8px;
        border:0px;
        background:linear-gradient(#064CB4, #1E98A8);
        color:white;
        font-size:15px;
        font-weight:bold;
        cursor:pointer;
        transition: all 0.1s linear;
    }

    button:hover {
        transform: scale(103%);
    }
}

.title {
    color:rgb(40, 163, 201);
    font-weight:bold;
    font-size:18px;
}

.errorSpan {
    border: 1px red solid;
    border-radius:5px;
    background-color:rgb(235, 110, 110);
    display:flex;
    align-items:center;
    margin:10px;
    font-size:14px;
}

.errorImg {
    width:25px;
    height:25px;
    margin-right:10px;
}


`;
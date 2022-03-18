import styled from 'styled-components';

export const Container = styled.div`

display:flex;
flex-direction:column;
border-radius:7px;
padding:15px;
text-align:left;
background-color:rgb(218, 218, 218);
box-shadow: 5px 10px rgba(29, 29, 29, 0.131);


a {
    text-decoration:none;
}

span {
    padding:8px;
    display:flex;
    align-items:center;
    color:rgb(40, 163, 201);
    font-weight:bold;

    img{
        width:30px;
        margin-right:10px;
        
    }
}

input {
    margin:8px;
    padding:10px;
    border:0px;
    border-radius:8px;
    outline:none;

}


.icon {
    cursor:pointer;
    transition:all 0.1s linear;
}

.icon:hover {
    transform: scale(130%);
}

.searchBox {
    display:flex;
    align-items:center;
    width:100%;

    input{
        width:100%;
    }
    img {
        width:40px;
        height:40px;
        transition:all 0.1s linear;
        cursor:pointer; 
    }

    img:hover {
        transform: scale(120%);
    }
}

.noResult {

    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    img {
        width:60px;
        margin:10px;
    }

}


`;

export const Table = styled.table`


.headItem {
    color:rgb(40, 163, 201);
    padding:8px;
    font-size:18px;

    
}

`;

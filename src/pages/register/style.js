import styled from 'styled-components';

export const Container = styled.div`

    padding:50px 10px 50px 10px;
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;

    .form {
        background-color:rgb(218, 218, 218);
        border-radius:10px;
        padding:20px;
        flex-direction:column;
        display:flex;
        box-shadow: 5px 10px rgba(29, 29, 29, 0.131);

        span {
            padding:10px;

            a {
                color:rgb(40, 163, 201);
                text-decoration:none;
            }
        }

        input {
            margin:10px;
            padding: 10px;
            border-radius:5px;
            border:none;
            outline:0;
        }

        button {
            margin:10px;
            padding: 10px 0px 10px 0px;
            border-radius:8px;
            color:white;
            font-weight:bold;
            background:linear-gradient(#064CB4, #1E98A8);
            border:none;
            transition: all 0.1s linear;
            font-size:15px;
            cursor:pointer;
        }

        button:hover {
            transform: scale(103%);
        }
    }

    .title {
        font-size:25px;
        font-weight:bold;
        color:rgb(40, 163, 201);
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
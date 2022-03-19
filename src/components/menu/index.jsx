import React from 'react';
import * as style from './style.js';
import X from '../images/x.png';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Menu(props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(state => state.UserReducer.token);

    function LogOut() {
 
        dispatch({
            type: 'ADD_NAME',
            payload: ''
        })

        dispatch({
            type: 'ADD_EMAIL',
            payload: ''
        });

        dispatch({
            type: 'ADD_TOKEN',
            payload: ''
        })

        window.location.href = '/login';

    }

    return <>

        <style.NavMenu active={props.active}>

            <style.Nav>

                <ul>

                <img src={X} onClick={()=> props.click()} alt="back" />

                    {token ?
                        <>
                            <li onClick={() => {navigate('/'); props.click();}}> Home </li>
                            <li onClick={() => {navigate('/products'); props.click();}}> Products </li>
                            <li onClick={() => {navigate('/categories'); props.click();}}>Categories </li>
                            <li onClick={() => {navigate('/brands'); props.click();}}> Brands </li>
                            <li onClick={() => LogOut()}>Logout</li>
                        </>
                    :
                        <>
                            <li onClick={() => {navigate('/login'); props.click();}}> Login </li>
                            <li onClick={() => {navigate('/register'); props.click();}}> Sign up </li>
                        </>
                    }

                </ul>
                
            </style.Nav>

        </style.NavMenu>

    </>
}
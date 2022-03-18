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
                            <li> <a onClick={() => {navigate('/'); props.click();}}> Home </a> </li>
                            <li> <a onClick={() => {navigate('/products'); props.click();}}> Products </a> </li>
                            <li> <a onClick={() => {navigate('/categories'); props.click();}}>Categories </a> </li>
                            <li> <a onClick={() => {navigate('/brands'); props.click();}}> Brands </a> </li>
                            <li onClick={() => LogOut()}>Logout</li>
                        </>
                    :
                        <>
                            <li> <a href="/login"> Login </a> </li>
                            <li> <a href="/register"> Sign up </a> </li>
                        </>
                    }

                </ul>
                
            </style.Nav>

        </style.NavMenu>

    </>
}
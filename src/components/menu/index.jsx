import React from 'react';
import * as style from './style.js';
import X from '../images/x.png';
import { useDispatch, useSelector } from 'react-redux';

export default function Menu(props) {

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
                            <li> <a href="/"> Home </a> </li>
                            <li> <a href="/products"> Products </a> </li>
                            <li> <a href="/categories"> Categories </a> </li>
                            <li> <a href="/brands"> Brands </a> </li>
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
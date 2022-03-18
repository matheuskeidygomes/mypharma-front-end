import React, { useState } from 'react';
import * as style from "./style.js";
import { api } from '../../services/api.js';
import { useDispatch } from 'react-redux';
import Error from '../../components/images/error.png';
import { Link } from 'react-router-dom';

export default function Register() {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function SignUp(e) {

        e.preventDefault();

        let result = await fetch(`${api}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        let json = await result.json();

        if (!json.error) {

            let UserName = json.response.name;
            let UserEmail = json.response.email;
            let UserToken = json.response.token;

            DoLogin(UserName, UserEmail, UserToken);

        } else {

            setError(json.error);

        }

    }

    function DoLogin(name, email, token) {

        dispatch({
            type: 'ADD_NAME',
            payload: name
        });

        dispatch({
            type: 'ADD_EMAIL',
            payload: email
        });

        dispatch({
            type: 'ADD_TOKEN',
            payload: token
        })

        window.location.href = '/';

    }

    return <>

        <style.Container>

            <form className="form" onSubmit={(e) => SignUp(e)}>

                <span className='title'> Create your account</span>

                {error &&

                    <span className="errorSpan"> <img className='errorImg' src={Error} alt="error"/> {error} </span>

                }

                <span> Name </span>
                <input type="text" placeholder="Type your name" required onChange={(e) => setName(e.target.value)} />

                <span> E-mail </span>
                <input type="email" placeholder="Type your e-mail" required onChange={(e) => setEmail(e.target.value)} />

                <span> Password </span>
                <input type="password" placeholder="Type your password" required onChange={(e) => setPassword(e.target.value)} />

                <button type="submit"> Sign up </button>

                <span> Already have an account? <Link to="/login"> Sign in here! </Link> </span>

            </form>

        </style.Container>

    </>
}
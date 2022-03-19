import React, { useState } from "react";
import * as style from './style.js';
import { api } from "../../services/api.js";
import { useSelector } from "react-redux";
import Error from '../../components/images/error.png';

export default function AddBrands() {

    const token = useSelector(state => state.UserReducer.token);
    const [error, setError] = useState('');
    const [name, setName] = useState('');

    async function AddItem(e) {

        e.preventDefault();

        if (name !== "") {

            let result = await fetch(`${api}/brand`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    name
                })
            });

            let json = await result.json();

            if (!json.error) {

                alert("Brand created with success!");
                window.location.href = '/brands';

            } else {

                alert(json.error)
            }

        } else {

            setError("Please, fill in the required fields!");

        }

    }

    return <>


        <style.Container>

            <form onSubmit={(e) => AddItem(e)}>

                    <span className="title"> Add new brand </span>

                    {error && <span className="errorSpan"> <img className="errorImg" src={Error} alt="error" /> {error} </span>}

                    <span>Name</span>

                    <input type="text" maxlength="20" value={name} required onChange={(e) => setName(e.target.value)} placeholder="Max: 15 characters" />

                    <button type="submit"> Save </button>

            </form>

        </style.Container>

    </>
}
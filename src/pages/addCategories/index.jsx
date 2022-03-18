import React, { useState } from "react";
import * as style from './style.js';
import { api } from "../../services/api.js";
import { useSelector } from "react-redux";
import Error from '../../components/images/error.png';

export default function AddCategories() {

    const token = useSelector(state => state.UserReducer.token);
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    async function AddItem(e) {

        e.preventDefault();

        if (name !== "" && description !== "") {

            let result = await fetch(`${api}/category`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    name,
                    description
                })
            });

            let json = await result.json();

            if (!json.error) {

                alert("Category created with success!");
                window.location.href = '/categories';

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

                <span className="title"> Add new category </span>

                {error && <span className="errorSpan"> <img className="errorImg" src={Error} alt="error" /> {error} </span>}

                <span>Name</span>

                <input type="text" maxlength="15" value={name} required onChange={(e) => setName(e.target.value)} placeholder="Max: 15 characters" />

                <span>Description</span>

                <input type="text" maxlength="30" value={description} required onChange={(e) => setDescription(e.target.value)} placeholder="Max: 30 characters" />

                <button type="submit"> Save </button>

            </form>

        </style.Container>

    </>
}
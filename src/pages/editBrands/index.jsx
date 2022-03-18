import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import * as style from './style.js';
import { api } from "../../services/api.js";
import { useSelector } from "react-redux";
import Error from '../../components/images/error.png';
import LoadingIcon from '../../components/images/Eclipse-1s-200px.gif';

export default function EditBrands() {

    const { id } = useParams();
    const token = useSelector(state => state.UserReducer.token);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {

        async function getItem() {

            setLoading(true);

            let res = await fetch(`${api}/brand/${id}`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            let result = await res.json();

            let brand = await result[0];

            setLoading(false);
            setName(brand.name)
        }

        getItem();

    }, []);

    async function EditItem(e) {

        e.preventDefault();

        if (name !== "") {

            let result = await fetch(`${api}/brand/${id}`, {
                method: 'PUT',
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

                alert("Brand edited with success!");
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

                {loading ? <>

                    <img src={LoadingIcon} alt="loading" />

                </> : <>

                <form onSubmit={(e) => EditItem(e)}>

                    <span className="title"> Edit brand </span>

                    {error && <span className="errorSpan"> <img className="errorImg" src={Error} alt="error" /> {error} </span>}

                    <span>Name</span>

                    <input type="text" maxlength="15" value={name} required onChange={(e) => setName(e.target.value)} placeholder="Max: 15 characters"/>

                    <button type="submit"> Save </button>

                </form>

                </>}

        </style.Container>

    </>
}
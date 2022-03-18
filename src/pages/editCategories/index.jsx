import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import * as style from './style.js';
import { api } from "../../services/api.js";
import { useSelector } from "react-redux";
import Error from '../../components/images/error.png';
import LoadingIcon from '../../components/images/Eclipse-1s-200px.gif';

export default function EditCategories() {

    const { id } = useParams();
    const token = useSelector(state => state.UserReducer.token);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {

        async function getItem() {

            setLoading(true);

            let res = await fetch(`${api}/category/${id}`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            let result = await res.json();

            let category = await result[0];

            setLoading(false);
            setName(category.name);
            setDescription(category.description);
        }

        getItem();

    }, []);

    async function EditItem(e) {

        e.preventDefault();

        if (name !== "" && description !== "") {

            let result = await fetch(`${api}/category/${id}`, {
                method: 'PUT',
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

                alert("Category edited with success!");
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


            {loading ? <>

                <img src={LoadingIcon} alt="loading" />

            </> : <>

                <form onSubmit={(e) => EditItem(e)}>

                    <span className="title"> Edit Category </span>

                    {error && <span className="errorSpan"> <img className="errorImg" src={Error} alt="error" /> {error} </span>}

                    <span>Name</span>

                    <input type="text" maxlength="15" value={name} onChange={(e) => setName(e.target.value)} placeholder="Max: 15 characters" />

                    <span>Description</span>

                    <input type="text" maxlength="30" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Max: 30 characters" />

                    <button type="submit"> Save </button>

                </form>

            </>}



        </style.Container>


    </>
}
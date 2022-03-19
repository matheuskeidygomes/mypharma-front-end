import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import * as style from './style.js';
import { api } from "../../services/api.js";
import { useSelector } from "react-redux";
import Error from '../../components/images/error.png';
import LoadingIcon from '../../components/images/Eclipse-1s-200px.gif';

export default function EditProducts() {

    const { id } = useParams();
    const token = useSelector(state => state.UserReducer.token);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState();
    const [inventory, setInventory] = useState();
    const [category, setCategory] = useState();
    const [brand, setBrand] = useState();
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {

        async function getItem() {

            setLoading(true);

            let res = await fetch(`${api}/product/${id}`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            let result = await res.json();

            let product = await result[0];

            setLoading(false);
            setName(product.name);
            setDescription(product.description);
            setPrice(product.price);
            setInventory(product.inventory);
            setCategory(product.category);
            setBrand(product.brand);
        }

        async function getCategories() {

            setLoading(true);

            let res = await fetch(`${api}/category`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            let result = await res.json();

            setLoading(false);
            setCategories(result.list);

        }

        async function getBrands() {

            setLoading(true);

            let res = await fetch(`${api}/brand`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            let result = await res.json();

            setLoading(false);
            setBrands(result.list);
        }

        getItem();
        getCategories();
        getBrands();

    }, []);

    async function EditItem(e) {

        e.preventDefault();

        if (name !== "" && description !== "" && price !== "" && inventory !== "" && category !== "" && brand !== "") {

            let result = await fetch(`${api}/product/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    name,
                    description,
                    price,
                    inventory,
                    category,
                    brand
                })
            });

            let json = await result.json();

            if (!json.error) {

                alert("Product edited with success!");
                window.location.href = '/products';

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

                    <span className="title"> Edit product </span>

                    {error && <span className="errorSpan"> <img className="errorImg" src={Error} alt="error" /> {error} </span>}

                    <span>Name</span>

                    <input type="text" maxlength="20" value={name} onChange={(e) => setName(e.target.value)} placeholder="Max: 15 characters" />

                    <span>Description</span>

                    <input type="text" maxlength="30" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Max: 30 characters" />

                    <span>Price</span>

                    <input type="text" min="0" max="100000" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Type the product price..." />

                    <span>Inventory</span>

                    <input type="text" min="0" max="1000" value={inventory} onChange={(e) => setInventory(e.target.value)} placeholder="Type the product inventory..." />

                    <span>Category</span>

                    <select value={category} onChange={(e) => setCategory(e.target.value)} >

                        <option> </option>

                        {categories.map((categorie, index) => (

                            <option key={index} value={categories[index].name}> {categories[index].name} </option>

                        ))}

                    </select>

                    <span>Brand</span>

                    <select value={brand} onChange={(e) => setBrand(e.target.value)} >

                        <option> </option>

                        {brands.map((brand, index) => (

                            <option key={index} value={brands[index].name}> {brands[index].name} </option>

                        ))}

                    </select>

                    <button type="submit"> Save </button>

                </form>

            </>}

        </style.Container>


    </>
}
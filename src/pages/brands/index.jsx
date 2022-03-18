import React, { useState, useEffect } from 'react';
import * as style from "./style.js";
import { api } from '../../services/api.js';
import { useSelector } from 'react-redux';
import LoadingIcon from '../../components/images/Eclipse-1s-200px.gif';
import Table from '../../components/tables/tableAreaBrand/index.jsx';

export default function Brands() {

    const token = useSelector(state => state.UserReducer.token);
    const [list, setList] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [searchBrand, setSearchBrand] = useState('');
    const [loading, setLoading] = useState(false);
    const [update, setUpdate] = useState(true);

    useEffect(() => {

        if (update) {
            getList();
            setUpdate(false);
        }

    }, [update]);

    function Search(searchBrand) {

        if (searchBrand !== '') {
    
          setSearchList(list.filter((item) => item.name.toLowerCase().indexOf(searchBrand.toLowerCase()) > -1));
    
        } else {
    
          setSearchList(list);
  
        }
     }

    async function getList() {

        setLoading(true);

        let res = await fetch(`${api}/brand`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        let result = await res.json()

        setLoading(false);
        setList(result.list);
        setSearchList(result.list);

    }

    return <>

        <style.Container>

            <div>

                {loading ? <img src={LoadingIcon} alt="load" /> : <Table list={searchList} update={()=>setUpdate(true)} SearchedBrand={searchBrand} onChange={(e) => setSearchBrand(e.target.value)} onClick={()=> Search(searchBrand)}/>}

            </div>

        </style.Container>

    </>
}
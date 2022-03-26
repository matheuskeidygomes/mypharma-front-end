import React, { useState, useEffect } from 'react';
import * as style from "./style.js";
import { api } from '../../services/api.js';
import { useSelector } from 'react-redux';
import LoadingIcon from '../../components/images/Eclipse-1s-200px.gif';
import Table from '../../components/tables/tableAreaProducts/index.jsx';

export default function Products() {

    const token = useSelector(state => state.UserReducer.token);
    const [list, setList] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [searchProduct, setSearchProduct] = useState('');
    const [searchFilter, setSearchFilter] = useState('');
    const [loading, setLoading] = useState(false);
    const [update, setUpdate] = useState(true);

    useEffect(() => {

        if(update) {
            getList();
            setUpdate(false);
        }

    }, [update]);

    function Search(searchProduct, searchFilter) {

        if (searchProduct !== '' && searchFilter !== 'Choose the filter...') {
    
          setSearchList(list.filter((item) => item[searchFilter.toLowerCase()].toLowerCase().indexOf(searchProduct.toLowerCase()) > -1));
    
        } else {
    
          setSearchList(list);
  
        }
     }

    async function getList() {

        setLoading(true);

        let res = await fetch(`${api}/product`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        let result = await res.json();

        setLoading(false);
        setList(result.list);
        setSearchList(result.list);

    }

    return <>

        <style.Container>

            <div>

                {loading ? <img src={LoadingIcon} alt="load" /> : <Table list={searchList} update={()=>setUpdate(true)} SearchedProduct={searchProduct} Filter={searchFilter} onChange={(e) => setSearchProduct(e.target.value)} onFilter={(e) => e.target.value != "Choose the filter..." ? setSearchFilter(e.target.value) : setSearchFilter("")} onClick={()=> Search(searchProduct, searchFilter)}/> }
                
            </div>

        </style.Container>

    </>
}
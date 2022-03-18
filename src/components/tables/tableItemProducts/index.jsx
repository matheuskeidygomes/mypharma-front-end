import React from "react";
import EditIcon from '../../images/edit.png';
import DeleteIcon from '../../images/trash.png';
import * as style from './style.js';
import { Link } from 'react-router-dom';
import { api } from '../../../services/api.js';
import { useSelector } from 'react-redux';

export default function TableItem(props) {

    const token = useSelector(state => state.UserReducer.token);

    async function DeleteItem(id) {

        await fetch(`${api}/product/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });

        alert("Deleted with success!");

        props.update();
    }


    return <>

        <style.TableItems>
            <td className="bodyItem"> {props.item.name} </td>
            <td className="bodyItem hidden-sm hidden-md hidden-lg"> {props.item.description} </td>
            <td className="bodyItem hidden-sm hidden-md hidden-lg"> ${props.item.price.toFixed(2)} </td>
            <td className="bodyItem hidden-sm hidden-md hidden-lg"> {props.item.inventory} </td>
            <td className="bodyItem hidden-sm hidden-md"> {props.item.category} </td>
            <td className="bodyItem hidden-sm hidden-md"> {props.item.brand} </td>
            <td className="bodyItem" style={{textAlign:"center"}}> <Link to={`/products/edit/${props.item._id}`}>  <img className="icon" src={EditIcon} alt="edit" /> </Link> </td> 
            <td className="bodyItem" style={{textAlign:"center"}}> <img className="icon" src={DeleteIcon} alt="delete" onClick={() => DeleteItem(props.item._id)} /> </td>
        </style.TableItems>

    </>
}
import React from "react";
import TableItem from "../tableItemBrand";
import * as style from './style.js';
import Add from '../../images/mais.png';
import { Link } from 'react-router-dom';
import SearchIcon from '../../images/loupe.png';
import SadIcon from '../../images/sad.png';

export default function Table(props) {

    return <>

        <style.Container>

            <Link to="/brands/add"> <span> <img className="icon" src={Add} alt="add" /> Add new brand </span> </Link>

            <div className="searchBox">

                <input type="text" placeholder="Search by brand name..." value={props.SearchedBrand} onChange={(e) => props.onChange(e)} />

                <img src={SearchIcon} alt="search" onClick={() => props.onClick()} />

            </div>

            {props.list.length > 0 ?

                <style.Table className="table">

                    <thead>

                        <tr>

                            <th className="headItem"> Brand </th>
                            <th className="headItem"> Edit </th>
                            <th className="headItem"> Delete </th>

                        </tr>

                    </thead>

                    <tbody>

                        {props.list.map((item, index) => {

                            return <TableItem item={item} key={index} update={props.update} />

                        })}

                    </tbody>

                </style.Table>

                :

                <div className="noResult">

                    <img className="sadIcon" src={SadIcon} alt="sadicon" />

                    <span> There is no information available. </span>

                </div>

            }



        </style.Container>

    </>
}
import React from 'react';
import * as style from './style.js';
import SadIcon from '../../components/images/sad.png';

export default function NotFound() {

    return <>

        <style.Container>

            <img src={SadIcon} alt="notfound" />

            <span> Page not found! </span> 

        </style.Container>
    
    </>

}
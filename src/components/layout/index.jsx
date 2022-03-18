import React from 'react';
import * as style from './style.js';

export default function Layout(props) {
    
    return <>

        <style.Layout>

            {props.children}

        </style.Layout>
    
    </>

}
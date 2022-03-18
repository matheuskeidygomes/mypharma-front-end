import React from 'react';
import * as style from "./style.js";
import {useSelector} from 'react-redux';

export default function Home() {

    const UserName = useSelector(state => state.UserReducer.name);

    return <> 

        <style.Container>

            <div>
                <span className='welcome1'> Welcome, {UserName}! </span>
                <span className='welcome2'> Choose the option you want in menu.</span> 
            </div>
            
        </style.Container>
    
    </>
}
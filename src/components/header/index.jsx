import React, {useState} from 'react';
import * as style from './style.js';
import Menu from '../menu/index.jsx';
import Logo from '../images/logo.png';
import MenuToggle from '../images/menu.png';

export default function Header(props) {

    const [menuActive, setMenuActive] = useState(false);

    return <>

        <style.Header menu={menuActive}>

            <style.Logo>
                <img className="logo" src={Logo} alt="logo"/>
            </style.Logo>

            <Menu active={menuActive} click={()=>setMenuActive(!menuActive)}/>

            <style.Toggle  src={MenuToggle} alt="toggle" active={menuActive} onClick={() => setMenuActive(!menuActive)}/>
            
        </style.Header>

    </>
}
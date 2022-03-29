import { observer } from 'mobx-react';
import React from 'react'
import store from '../../store/store';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="heading">Contact</div>
            <button onClick={()=>store.logout()} className="logout">Выйти</button>
        </header>
    )
}

const HeaderObserver = observer(Header);

export default HeaderObserver;
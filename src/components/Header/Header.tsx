import React from 'react'
import store from '../../store/store';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="heading">Contacts</div>
            <button onClick={()=>store.logout()} className="logout">Выйти</button>
        </header>
    )
}

export default Header;
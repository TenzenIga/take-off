import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'

import store, { IContact } from '../../store/store';
import AddContactObserver from '../AddContact/AddContact';
import Contact from '../Contact/Contact';
import HeaderObserver from '../Header/Header';
import SearchBoxObserver from '../SearchBox/SearchBox';

import './MainPage.css';


function MainPage() {
  
    useEffect(()=>{
        store.getContacts()
    },[])

  return (
      <div className="main-page">
          <HeaderObserver />
          <div className='content'>
                  <div className='contact-list'>
                  <SearchBoxObserver />

                    {store.contacts.map( (contact: IContact) =>{
                        return <Contact key={ contact.id} contact = { contact} />
                    })}
                  </div>
              <AddContactObserver />
          </div>
      </div>
  )
}

const MainPageObserver = observer(MainPage)

export default MainPageObserver;
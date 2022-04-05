import React from 'react'
import store, { IContact } from '../../store/store';
import './AddContact.css';

function AddContact() {

    const addContact = () :void =>{
        const promptValue = prompt(('Enter contact name'));
        
        if(promptValue === null) return;

        let newContact:IContact = {
            id: store.contacts.length + 1,
            name: promptValue
        }
        
        store.addContact(newContact)
    }

    return (
        <div className='add-contact'>
            <div className="button_plus" onClick={()=>addContact()}></div>
        </div>
    )
}

export default AddContact;
import React from 'react'
import store, { IContact } from '../../store/store';
import './Contact.css';

type props = {
    contact: IContact
}

function Contact(props: props) {
    const {contact} = props;

    const editContact = (id: number) =>{
        const promptValue = prompt(('Enter new name'));
        if(promptValue === null) return;
        let newName = promptValue;
        store.editContact(newName, id)
    }

    return (
        <div className="contact-card">
            <div className="contact-info">
                <div className="contact-info__header">
                    <span>
                    {contact.name}
                    </span>
                    <div className='contact-info__buttons'>
                        <button className='contact-info__btn' onClick={()=>store.deleteContact(contact.id)}>delete</button>  
                        <button className='contact-info__btn'  onClick={()=>editContact(contact.id)} >edit</button>  
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Contact;
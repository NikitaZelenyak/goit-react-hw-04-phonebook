import { useState,useEffect } from "react";
import { nanoid } from 'nanoid'
import { AddContactForm } from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";

import PropTypes from 'prop-types'; 



export const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');


  useEffect(() => {

      try {
        localStorage.setItem('contacts', JSON.stringify(contacts))
      }
      catch (error) {
          console.log(error);
      }
  },[contacts])





  const handlerAddContact = ({ name, number }) => {

    const uniqueId = nanoid();
    const checkOnIncludes = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
    const newContact = {
      id: uniqueId,
      name,
      number,
    }

    if (checkOnIncludes) {
        
      return alert(`${name} is already in contacts`)
    }

    setContacts(prevState => [newContact, ...prevState])
  }
  

  const handlerDeleteContact = (idContact) => {

    setContacts(prevState => prevState.filter(contact => (contact.id !== idContact)))
  }
  

  const handlerFilterContact = (e) => {

    const { value } = e.currentTarget;
    setFilter(value)
}

  
  const getVisibleContacts = () => {
     
     const normalizeFilter = filter.toLowerCase().trim();
    return contacts.filter(contact=>(contact.name.toLowerCase().includes(normalizeFilter)))
  }


   return (
      <div >
       <AddContactForm onSubmitInfo={handlerAddContact}></AddContactForm>
       <Contacts contacts={getVisibleContacts()} onDelete={handlerDeleteContact} onFilter={handlerFilterContact} ></Contacts>
       
      </div>
    )
}




AddContactForm.prototype = {
  onSubmitInfo: PropTypes.func,

}
Contacts.prototype = {
  contacts: PropTypes.func,
  onDelete: PropTypes.func,
  onFilter: PropTypes.func,
}
import { Component } from "react";
import { nanoid } from 'nanoid'
import { AddContactForm } from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";

import PropTypes from 'prop-types'; 


export class App extends Component {
state={
  contacts: [],
  filter: ''

}
  
  componentDidMount() {
 
      const getContacts =  localStorage.getItem(('contacts'))
const contacts=JSON.parse(getContacts)
if (contacts) {
   this.setState({
      contacts,
    })
}
   
  }
  
  componentDidUpdate(_, prevState) {
   
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {


      try {
        localStorage.setItem('contacts', JSON.stringify(contacts))
      }
      catch (error) {
          console.log(error);
      }



  
    }
    
    
  }
  handlerAddContact = ({name, number}) => {
    const uniqueId = nanoid();
    const { contacts } = this.state;


    const checkOnIncludes = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase( ));
   
    const newContact = {
      id: uniqueId,
      name,
      number,
    }
    

    if (checkOnIncludes) {
      
     
      return alert(`${name} is already in contacts`)

        }

    this.setState(prevState => ({
      contacts: [newContact,...prevState.contacts]
    }))

  }

  handlerDeleteContact = (idContact) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact=>(contact.id !== idContact))
    }))
  }
  
  handlerFilterContact = (e) => {
    const { value } = e.currentTarget;

    this.setState({
      filter:value
    })
  
}

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;


      const normalizeFilter = filter.toLowerCase().trim();
    return contacts.filter(contact=>(contact.name.toLowerCase().includes(normalizeFilter)))
      

    
    
  }
  
  render() {

    return (
      <div >
        <AddContactForm onSubmitInfo={this.handlerAddContact}></AddContactForm>
       <Contacts contacts={this.getVisibleContacts()} onDelete={this.handlerDeleteContact} onFilter={this.handlerFilterContact}></Contacts>
       
      </div>
    )
  }

};

AddContactForm.prototype = {
  onSubmitInfo: PropTypes.func,

}
Contacts.prototype = {
  contacts: PropTypes.func,
  onDelete: PropTypes.func,
  onFilter: PropTypes.func,
}
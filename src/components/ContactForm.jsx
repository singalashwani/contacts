import React, { useContext } from 'react'
import {ContactsContext} from '../context/ContactsContext'
import InputHook from '../hooks/InputHook'

let ContactForm = () => {

    let {contacts, dispatch} = useContext(ContactsContext);

    let [name, setName, clearName] = InputHook("");
    let [email, setEmail, clearEmail] = InputHook("");
    let [phone, setPhone, clearPhone] = InputHook("");

    let addNewContact = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_CONTACT', contact: {
            id: contacts.length + 1,
            name: name,
            email: email,
            phone: phone
        }})
        clearName();
        clearEmail();
        clearPhone();
    }

    return (
        <>
        <form onSubmit={addNewContact}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={setName}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={setEmail}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="number"
            className="form-control"
            id="phone"
            name="phone"
            value={phone}
            onChange={setPhone}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
        </>
    )
}

export default ContactForm

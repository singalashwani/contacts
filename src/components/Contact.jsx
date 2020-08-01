import React, { useContext } from "react";
import {ContactsContext} from '../context/ContactsContext'

let Contact = (props) => {

    let {dispatch} = useContext(ContactsContext);
  return (
    <>
      <tr>
        <td>{props.contact.id}</td>
        <td>{props.contact.name}</td>
        <td>{props.contact.email}</td>
        <td>{props.contact.phone}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              dispatch({type: 'DELETE_CONTACT', id: props.contact.id});
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Contact;

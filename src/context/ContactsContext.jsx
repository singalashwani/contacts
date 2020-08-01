import React, { createContext, useReducer } from "react";
import ContactsReducer from "../reducer/ContactsReducer";

export let ContactsContext = createContext();

let ContactsContextProvider = (props) => {

  let [contacts, dispatch] = useReducer(ContactsReducer, [
    { id: 1, name: "user1", email: "user1@gmail.com", phone: 11111 },
    { id: 2, name: "user2", email: "user2@gmail.com", phone: 22222 },
    { id: 3, name: "user3", email: "user3@gmail.com", phone: 33333 },
    { id: 4, name: "user4", email: "user4@gmail.com", phone: 44444 },
    { id: 5, name: "user5", email: "user5@gmail.com", phone: 55555 },
  ]);

  return (
    <>
      <ContactsContext.Provider value={{contacts, dispatch}}>
        {props.children}
      </ContactsContext.Provider>
    </>
  );
};

export default ContactsContextProvider;

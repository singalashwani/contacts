import React, { useContext } from "react";
import { ContactsContext } from "../context/ContactsContext";
import Contact from "./Contact";
import NoContact from "./NoContact";

let Contacts = () => {
  let { contacts } = useContext(ContactsContext);
  console.log(contacts);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts.length
            ? contacts.map((contact) => {
                return <Contact key={contact.id} contact={contact} />;
              })
            : <NoContact />}
        </tbody>
      </table>
    </>
  );
};

export default Contacts;

import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Contacts from './components/Contacts'
import ContactForm from './components/ContactForm'
import ContactsContextProvider from './context/ContactsContext'

let App = () => {
  return (
    <>
      <div className="container">
        <Navbar />
          <ContactsContextProvider>
          <ContactForm />
          <Contacts />
          </ContactsContextProvider>
      </div>
    </>
  )
}

export default App;
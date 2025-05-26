import { useEffect, useState } from "react"
import ContactCard from "../components/ContactCard"
import { getContacts } from "../services/api"


const Contact = () => {

   

useEffect(() => {


    const contacts = async (agenda) => {
       const contactsData = await getContacts(agenda)
       setContactList(contactsData)

    }

    contacts("agenda_dc")

}, [])

return (
    <>
    <h1>Vista para renderizar la lista de contactos</h1>
    <ul>
    {
        contactList.map((contact)=>(
            <li key={contact.id}><ContactCard name={contact.name} address={contact.address} phone={contact.phone} email={contact.email} /></li>
        ))
    }
    </ul>
    </>
)

}

export default Contact
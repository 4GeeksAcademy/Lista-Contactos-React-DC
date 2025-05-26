import ContactCard from "../components/ContactCard"
import { createContact } from "../services/api"


const AddContact = () => {

   const handleCreateContact = async () => {
   
       
   
       await createContact("agenda_dc"), {
           "name": "Jonathan Smith",
           "phone": "+1 (555) 778-1234",
           "email": "jonasmith@gmail.com",
           "address": "3860 NW 125th St"
   
       }
   }

return (
    <>
    <h1>Add a new contact</h1>
    <button onClick={ ()=>handleCreateContact() }>Crear contactos</button>
    </>
)

}

export default AddContact
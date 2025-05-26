

const apiBaseUrl = "https://playground.4geeks.com/contact"


// servicio para crear un nuevo contacto
export const createContact = async (agenda, bodyData) => {

    const newUser = await fetch(apiBaseUrl + "/agendas/" + agenda + "/contacts",
        {
            method: "POST",
            body: JSON.stringify(bodyData),
            headers: {
                "content-Type": "application/json"
            }


        }


    )
    const response = await newUser.json()
    return response

}



// servicio para crear una nueva lista de contacto

export const getContacts = async (agenda) => {
    const response = await fetch (apiBaseUrl + "/agendas/" + agenda + "/contacts")
    const data = await response.json()
    const contactos = data.contacts
    return contactos

}
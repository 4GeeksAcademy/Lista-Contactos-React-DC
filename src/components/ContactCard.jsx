

const ContactCard = ({name, address, phone, email}) => {

    return (
        <div className="card w-75">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">📍{address}</p>
                <p className="card-text">📞{phone}</p>
                <p className="card-text">📧{email}</p>
                
            </div>
        </div>
    )
}

export default ContactCard
import React, { useContext, useEffect } from "react";
import { Context } from "./../store/appContext"
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Card = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getContacts();
    },[actions]);

    const contacts = store.contacts || [];

    return (
        <div className="d-flex flex-wrap">
            {store.contacts && store.contacs.length > 0 ? (
                store.contacts.map((contact) => (
                    <div key={contact.id} className="card m-3" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt={contact.name} />
                    <div className="card-body">
                        <h5 className="card-title">Name: {contact.name}</h5>
                        <p className="card-text">Phone: {contact.phone}</p>
                        <p className="card-text">Email: {contact.email}</p>
                        <p className="card-text">Address: {contact.address}</p>
                    </div>
                    <div className="d-flex justify-content-end align-items-center gap-2 p-2">
                        <Link to={`/editcontact/${contact.id}`}>
                            <i className="bi bi-pencil-fill"></i>
                        </Link>
                        <i className="bi bi-trash" onClick={() => actions.delContact(contact.id)}></i>
                    </div>
                </div>  
                ))
            ):(
                <></>
            )}
        </div>
    );
};

export default Card;
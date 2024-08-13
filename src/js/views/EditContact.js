import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const EditContact = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();
    const navigate = useNavigate();
    const [editContact, setEditContact] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    });

    useEffect(() => {
        if(params.id) {
            const contact = store.contacts.find(item => item.id == parseInt(params.id));
            if (contact) {
                setEditContact({
                    name: contact.name,
                    phone: contact.phone,
                    email: contact.email,
                    address: contact.address
                })
            }
        }
    }, [params.id, store.contacts])

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.editContact(params.id, editContact);
        navigate('/');
    };

    return(
        <div className="container">
            <h1 className="text-center mt-5">Edit Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label
                        className="form-label">Full Name
                    </label>
                    <input
                        onChange={(e) => setEditContact({...editContact, name: e.target.value})}
                        value={editContact.name}
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                    />
                </div>

                <div className="mb-3">
                    <label
                        className="form-label">Phone Number
                    </label>
                    <input
                        onChange={(e) => setEditContact({...editContact, phone: e.target.value})}
                        value={editContact.phone}
                        type="text"
                        className="form-control"
                        placeholder="Name"
                    />
                </div>

                <div className="mb-3">
                    <label
                        className="form-label">Email
                    </label>
                    <input
                        onChange={(e) => setEditContact({...editContact, email: e.target.value})}
                        value={editContact.email}
                        type="text"
                        className="form-control"
                        placeholder="Email"
                    />
                </div>

                <div className="mb-3">
                    <label
                        className="form-label">Address
                    </label>
                    <input
                        onChange={(e) => setEditContact({...editContact, address: e.target.value})}
                        value={editContact.address}
                        type="text"
                        className="form-control"
                        placeholder="Address"
                    />
                </div>
                <div className="d-flex justify-content-between align-items-center gap-2">
                    <Link to="/" className="text-decoration-none">
                        Get Back to Contacts
                    </Link>
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    );
};

export default EditContact
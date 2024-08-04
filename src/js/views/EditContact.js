import React, { useContext, useEffect, useState } from "react";
import { Link, useAsyncError, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import AddContact from "./AddContact";

const EditContact = () => {
    const {store, actios} = useContext(Context);
    const params = useParams();
    const [upContact, setUpContact] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    });

    useEffect(() => {
        if(params.id) {
            const contact = store.contacts.find(item => item.id == params.id)
            setUpContact({
                name: contact.name,
                phone: contact.phone,
                email: contact.email,
                address: contact.address
            })
        }
    }, [params])

    return(
        <div className="container">
            <h1 className="text-center mt-5">Edit Contact</h1>
            <form>
                <div className="mb-3">
                    <label
                        className="form-label">Full Name
                    </label>
                    <input
                        onChange={(e) => setUpContact({...upContact, name: e.target.value})}
                        value={upContact.name}
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
                        onChange={(e) => setUpContact({...upContact, phone: e.target.value})}
                        value={upContact.phone}
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
                        onChange={(e) => setUpContact({...upContact, email: e.target.value})}
                        value={upContact.email}
                        type="text"
                        className="form-control"
                        placeholder="Email"
                    />
                </div>

                <div className="mb-3">
                    <label
                        className="form-label">Full Name
                    </label>
                    <input
                        onChange={(e) => setUpContact({...upContact, address: e.target.value})}
                        value={upContact.address}
                        type="text"
                        className="form-control"
                        placeholder="Address"
                    />
                </div>

                <div className="d-grid gap-2">
                    <Link to="/">
                        <button
                            onClick={() => {
                                actions.updateContact(params.id, upContact);
                            }}
                            type="button" 
                            class="btn btn-primary">Save
                        </button>
                    </Link>
                    <Link to="/">
                        <a href="home.js">Get Back to Contacts</a>
                    </Link>
                </div>

            </form>
        </div>
    );
};

export default EditContact
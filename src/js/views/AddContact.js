import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const AddContact = () => {
    const { store, actions } = useContext(Context)
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.addContacts(name, phone, email, address);
        navigate('/');
    };

    return (
        <div className="container">
            <h1 className="text-center mt-5">Add  a New Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label
                        className="form-label">Full Name
                    </label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Full Name"></input>
                </div>

                <div className="mb-3">
                    <label
                        className="form-label">Phone Number
                    </label>
                    <input
                        onChange={(e) => setPhone(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"></input>
                </div>

                <div className="mb-3">
                    <label
                        className="form-label">Email
                    </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Email"></input>
                </div>

                <div className="mb-3">
                    <label
                        className="form-label">Address
                    </label>
                    <input
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Address"></input>
                </div>

                <div className="d-flex justify-content-between align-items-center gap-2">
                    <Link to="/" className="text-decoration-none">
                        Get Back to Contacts
                    </Link>
                    <button
                        onClick={() => {
                            actions.AddContact(name, phone, email, address);
                        }}
                        type="submit" class="btn btn-primary">Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddContact
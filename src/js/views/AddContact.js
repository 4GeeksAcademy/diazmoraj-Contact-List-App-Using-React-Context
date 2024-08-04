import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const AddContact = () => {
    const {store, actions} = useContext(Context)
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    return(
        <div className="container">
            <h1 className="text-center mt-5">Add  a New Contact</h1>
            <form>
                <div className="mb-3">
                    <label
                        className="form-label">Full Name
                    </label>
                    <input
                        onChange={(e) => {
                            console.log(e)
                            setName(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        placeholder="Full Name"></input>
                </div>

                <div className="mb-3">
                    <label
                        className="form-label">Phone Number
                    </label>
                    <input
                        onChange={(e) => {
                            console.log(e)
                            setPhone(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"></input>
                </div>

                <div className="mb-3">
                    <label
                        className="form-label">Email
                    </label>
                    <input
                        onChange={(e) => {
                            console.log(e)
                            setEmail(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        placeholder="Email"></input>
                </div>

                <div className="mb-3">
                    <label
                        className="form-label">Address
                    </label>
                    <input
                        onChange={(e) => {
                            console.log(e)
                            setAddress(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        placeholder="Address"></input>
                </div>

                <div className="d-grid gap-2">
                    <Link to="/">
                        <button 
                        onClick={() => {
                            actions.AddContact(name, phone, email, address);
                        }}
                        type="submit" class="btn btn-primary">Save
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

export default AddContact
import React from "react";
import { Link } from "react-router-dom";

const AddContact = () => {
    return(
        <div>
            <h1>Add  a New Contact</h1>
            <label>Full Name</label>
            <input type="text" placeholder="Full Name"></input>
            <label>Email</label>
            <input type="email" placeholder="Enter Email"></input>
            <label>Phone</label>
            <input type="phone" placeholder="Enter Phone"></input>
            <label>Adress</label>
            <input type="text" placeholder="Enter Adress"></input>
            <Link to="/card">
                <button type="button" class="btn btn-primary">Save</button>
            </Link>
            <Link to="/card">
                <a href="home.js">Get Back to Contacts</a>
            </Link>
        </div>

    )
}

export default AddContact
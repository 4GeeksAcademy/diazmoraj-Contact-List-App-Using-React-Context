import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Context } from "../store/appContext";

const Card = ({ contact }) => {
    const { actions } = useContext(Context)

    const handleDelete = (id) => {
        if (actions && actions.delContacts) {
            actions.delContacts(id)
        }
    }

    return (
        <div className="card col-12" style={{ marginBottom: "0", paddingBottom: "0" }}>
            <div className="d-flex align-items-center">
                <img
                    src="https://picsum.photos/100/100"
                    className="rounded-circle me-3"
                    alt="..."
                    style={{ width: "100px", height: "100px" }}
                />
                <div className="card-body info-card">
                    <h5 className="card-title">{contact.name}</h5>
                    <p className="card-text">
                        <i className="fa fa-phone"></i> {contact.phone}
                    </p>
                    <p className="card-text">
                        <i className="fa fa-envelope"></i> {contact.email}
                    </p>
                    <p className="card-text">
                        <i className="fa fa-map-pin"></i> {contact.address}
                    </p>
                    <div className="d-flex justify-content-end align-items-center p-2">
                        <Link to={`/EditContact/${contact.id}`} style={{ marginRight: "25px" }}>
                            <i className="fa fa-pen"></i>
                        </Link>
                        <i className="fa fa-trash" onClick={() => handleDelete(contact.id)}></i>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;
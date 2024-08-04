import React, { useContext } from "react";
import { Context } from "./../store/appContext"
import { Link, useParams } from "react-router-dom";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faPhone, faMapMarkerAlt, faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
    const { store, actions } = useContext(Context);
    const params = useParams()
    return (
        <div>
            <div className="m-5">
                <Link to="/addcontact">
                    <a href="#" className="btn btn-primary">Add Contact</a>
                </Link>
            </div>
            <div className="card m-5" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card desde el path /card</h5>
                    <p className="card-text">El ID que recibo por Params fue: {params.idContact}</p>
                </div>
                <Link to="/editcontact">
                    {/* <FontAwesomeIcon
                        icon={faEdit}
                        style={{ fontSize: "1.2em", color: "#108bf8" }}
                    /> */}
                </Link>
                <i class="fa-solid fa-pencil"></i>
            </div>
        </div>
    )
}

export default Card;
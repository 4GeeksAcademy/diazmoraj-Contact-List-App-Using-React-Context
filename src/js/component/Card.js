import React, {useContext} from "react";
import {Context} from "./../store/appContext"
import { Link, useParams } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css'

const Card = () => {
    const params = useParams()
    return(
        <div>
            <div className="m-5">
                <Link to="/addcontact">
                    <a href="#" className="btn btn-primary">Add Contact</a>
                </Link>
            </div>
            <div className="card m-5" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card desde el path /card</h5>
                        <p className="card-text">El ID que recibo por Params fue: {params.idContact}</p>
                    </div>
                <Link to="/editcontact">
                    <i class="fa-solid fa-pencil"></i>
                </Link>
                <i class="fa-solid fa-pencil"></i>
            </div>
            <div className="m-5">
                <Link to="/">
                    <a href="#" className="btn btn-primary">Go Home</a>
                </Link>
            </div>
        </div>
    )
}

export default Card;
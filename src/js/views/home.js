import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import Card from "./../component/Card";

export const Home = () => {
	const {store, actions} = useContext(Context)

	useEffect(() => {
		actions.getContacts();
	},[actions])
	return(
		<div className="text-center mt-5">
			<h1>Hello User!</h1>
			<h4>List of Contacts!</h4>
			<div className="m-5">
                <Link to="/addcontact">
                    Add Contact
                </Link>
            </div>
			<Card />
		</div>
	)
};

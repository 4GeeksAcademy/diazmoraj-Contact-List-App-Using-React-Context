import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import Card from "./../component/Card";

export const Home = () => {
	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.getContacts();
	}, [])

	return (
		<div className="container mt-5">
			<div className="row justify-content-between align-items-center mb-4">
				<h1 className="title col-auto">Contacts</h1>
				<Link to="/AddContact" className="col-auto">
					<button className="btn btn-success">Add Contact</button>
				</Link>
			</div>
			<div className="row d-flex flex-column">
				{store.contacts.length === 0 ? (
					<h1>No Contacts Available</h1>
				) : (
					store.contacts.map((contact) => (
						<Card key={contact.id} contact={contact} actions={actions} />
					))
				)}
			</div>
		</div>
	);
};

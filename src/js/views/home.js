import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Card from "./../component/Card";


export const Home = () => {
	const {store, actions} = useContext(Context)
	return(
		<div className="text-center mt-5">
			<h1>Hello User!</h1>
			<Card />
			<h4>List of Contacts!</h4>
			<ul>
				{store.contacts.map((value, index) => {
					return <li>{value.name}</li>
				})}
			</ul>
		</div>
	)
};

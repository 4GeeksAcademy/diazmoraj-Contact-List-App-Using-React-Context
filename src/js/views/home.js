import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello User!</h1>
		<p>
			<img src={rigoImage}/>
		</p>
		<Link to="/card">
			<button className="btn btn-success">Go to Card</button>
		</Link>
	</div>
);

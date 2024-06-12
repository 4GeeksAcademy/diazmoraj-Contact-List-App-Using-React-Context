import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Info from './../component/Info'
import Card from './../component/Card'

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<Info/>
		<Card/>
	</div>
);

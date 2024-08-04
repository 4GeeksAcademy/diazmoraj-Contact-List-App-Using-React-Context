import { json } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {	
			getContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/jdiazmora/contacts")
				.then((response) => {
					return response.json()})
				.then((data) => {setStore({contacts: data.contacts})
				})
				.catch((error) => {return error})
			},

			getContacts: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/jdiazmora/contacts/${id}`)
				.then((response) => {
					return response.json()})
				.then((data) => {
					setStore({contacts: data.contacts
					})
				})
				.catch((error) => {
					return error
				})
			},

			addContacts: function (name, phone, email, address) {
				fetch("https://playground.4geeks.com/contact/agendas/jdiazmora/contacts",{
					method:'POST',
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						name: name,
						phone: phone,
						email: email,
						address: address
					}),
				})
				.then((response) => {
					return response.json
				})
				.then((data) => {
					getActions().getContacts();
				})
				.catch((error) => {
					return error
				})
			},

			updateContact: function (id, updateContact) {
				fetch(`https://playground.4geeks.com/contact/agendas/jdiazmora/contacts/${id}`,{
					method: 'PUT',
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(updateContact),
				})
				.then((response) => {
					return response.json
				})
				.then((data) => {
					data
				})
				.catch((error) => {
					return error
				})
			},

			delContacts: function(id) {
				fetch(`https://playground.4geeks.com/contact/agendas/jdiazmora/contacts/${id}`,{
					method: 'DELETE'
				})
				.then((response) => {
					return response.json
				})
				.then((data) => {
					getActions().getContacts();
				})
				.catch((error) => {
					return error
				})
			},
		}
	};
};

export default getState;

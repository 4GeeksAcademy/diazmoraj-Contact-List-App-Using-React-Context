import { json } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
		},
		actions: {	
			getContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/jdiazmora/contacts")
				.then((response) => response.json())
				.then((data) => setStore({contacts: data.contacts}))
				.catch((error) => error)
			},

			getContact: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/jdiazmora/contacts/${id}`)
				.then((response) => response.json())
				.then((data) => setStore({contact: [data.contact]}))
				.catch((error) => error)
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
				.then((response) => response.json())
				.then(() => getActions().getContacts())
				.catch((error) => error)
			},

			editContact: function (id, editContact) {
				fetch(`https://playground.4geeks.com/contact/agendas/jdiazmora/contacts/${id}`,{
					method: 'PUT',
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(editContact),
				})
				.then((response) => response.json())
				.then(() => getActions().getContacts())
				.catch((error) => error)
			},

			delContacts: function(id) {
				fetch(`https://playground.4geeks.com/contact/agendas/jdiazmora/contacts/${id}`,{
					method: 'DELETE'
				})
				.then((response) => response.json())
				.then(() => getActions().getContacts())
				.catch((error) => error)
			},
		}
	};
};

export default getState;

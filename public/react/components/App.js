	import React, { useState, useEffect } from 'react';
	import ItemList from './ItemsList';
	import Form from './Form'

	// import and prepend the api url to any fetch calls
	import apiURL from '../api';

	export const App = () => {
		
		const [items, setItems] = useState([]);

		async function fetchItem(){
			try {
				const response = await fetch(`${apiURL}/items`);
				const itemData = await response.json();
				console.log(itemData)
				setItems(itemData);
			} catch (err) {
				console.log("Oh no an error! ", err)
			}
		}

		useEffect(() => {
			fetchItem();
		}, []);

		return (
			<main>	
		<h1>Item Store</h1>
				<h2>All things 🔥</h2>
				<ItemList items={items} />
		<div>
		<Form/>
		</div>
			</main>
		)
	}
import React, { useState } from 'react';
import './App.css';

export default function RandomCat() {
	const [url, setUrl] = useState('');
	const fetchURL = `https://api.thecatapi.com/v1/images/search?api_key=${process
		.env.REACT_APP_CAT_API_KEY}`;

	function FetchData() {
		fetch(fetchURL).then(response => response.json()).then(data => {
			console.log(data);
			console.log(data[0].url);
			setUrl(data[0].url);
		});
	}

	return (
		<div className="container_cat">
			<img className="randomCat_image" src={url} />
			<button className="randomCat_btn" onClick={FetchData}>
				A new picture, please
			</button>
		</div>
	);
}

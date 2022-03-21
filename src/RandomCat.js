import React, { useState } from 'react';
import './App.css';

export default function RandomCat() {
	const [url, setUrl] = useState('');
	const fetchURL =
		'https://api.thecatapi.com/v1/images/search?api_key=d1b9c023-b8cd-4b90-b1b9-71a7cf27cb2';

	function FetchData() {
		fetch(fetchURL).then(response => response.json()).then(data => {
			console.log(data);
			console.log(data[0].url);
			setUrl(data[0].url);
		});
	}

	return (
		<div className="randomCat___main">
			<img className="randomCat___image" src={url} />
			<button className="randomCat_btn" onClick={FetchData}>
				A new picture, please
			</button>
		</div>
	);
}

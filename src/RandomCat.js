import React, { useState } from 'react';
import './App.css';

export default function RandomCat() {
	const [url, setUrl] = useState('');
	const [url2, setUrl2] = useState('');
	const [url3, setUrl3] = useState('');
	const fetchURL = `https://api.thecatapi.com/v1/images/search?api_key=${process
		.env.REACT_APP_CAT_API_KEY}`;

	function FetchData() {
		fetch(fetchURL).then(response => response.json()).then(data => {
			console.log(data);
			console.log(data[0].url);
			setUrl(data[0].url);
		});
	}

	function FetchData2() {
		fetch(fetchURL).then(response => response.json()).then(data => {
			console.log(data);
			console.log(data[0].url);
			setUrl2(data[0].url);
		});
	}

	function FetchData3() {
		fetch(fetchURL).then(response => response.json()).then(data => {
			console.log(data);
			console.log(data[0].url);
			setUrl3(data[0].url);
		});
	}

	return (
	<div className="master-container">
		<div className="container_cat">
			<img alt="..." className="randomCat_image" src={url} />
			<button className="randomCat_btn" onClick={FetchData}>
				A new picture, please
			</button>
		</div>
		<div className="container_cat">
			<img alt="..." className="randomCat_image" src={url2} />
			<button className="randomCat_btn" onClick={FetchData2}>
				A new picture, please
			</button>
		</div>
		<div className="container_cat">
			<img alt="..." className="randomCat_image" src={url3} />
			<button className="randomCat_btn" onClick={FetchData3}>
				A new picture, please
			</button>
		</div>
	</div>
	)
}
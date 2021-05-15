const fetch = require("node-fetch");
const userfetch = async (url) => {
	var fetched;
	const data = await fetch(url);
	fetched = await data.json();
	console.log(fetched);
};

userfetch("https://dog.ceo/api/breeds/image/random");
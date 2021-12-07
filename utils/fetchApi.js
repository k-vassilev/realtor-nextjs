import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
	const { data } = await axios.get((url), {
		headers: {
			'x-rapidapi-host': 'bayut.p.rapidapi.com',
			'x-rapidapi-key': '89e3f57894mshee8cb6e4ae32696p1d96f7jsn92f88d8ea032'
		  }
	});
	return data;
}
import axios from "axios";

const GetRecords = async (id) => {
	try {
		const response = await axios.get(`/products/${id}`);
		return response;
	} catch (error) {
		console.error('Error fetching data:', error);
		return null;
	}
};

export {GetRecords}

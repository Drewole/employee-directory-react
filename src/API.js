import Axios from 'axios';
// https://randomuser.me/api/?results=50&inc=id,picture,name,phone,email,dob
const API = async () => {
	try {
		// fetch data from a url endpoint
		const response = await Axios.get('https://randomuser.me/api/?results=50&inc=id,picture,name,phone,email,dob');
		const data = await response.json();
		return data;
	} catch (error) {
		console.log('error', error);
		// appropriately handle the error
	}
};

export default API;

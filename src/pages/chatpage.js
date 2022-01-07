/* eslint-disable unused-imports/no-unused-vars */
import React, { useEffect } from 'react';

import axios from 'axios';

import useLocalStorage from '../components/useLocalStorage';

const Chatpage = ({ ...props }) => {
	const [token, setToken] = useLocalStorage('token');
	useEffect(() => {
		console.log(token);
		const getLogged = async () => {
			try {
				const logged = await axios.post('http://localhost:8000/users/loggedIn', { token });
				console.log(logged.data);
			} catch (err) {
				console.error(err.response.data);
			}
		};
		getLogged();
	}, []);
	return <div {...props}>hi</div>;
};

export default Chatpage;

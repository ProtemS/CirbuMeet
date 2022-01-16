/* eslint-disable unused-imports/no-unused-vars */
import React, { useEffect, useState } from 'react';

import axios from 'axios';

import CustomHeader from '../components/CustomHeader';
import useLocalStorage from '../components/useLocalStorage';

const Chatpage = ({ ...props }) => {
	const [token, setToken] = useLocalStorage('token');
	const [valid, setValid] = useState(false);
	useEffect(() => {
		console.log(token);
		const getLogged = async () => {
			try {
				const logged = await axios.post('http://localhost:8000/users/loggedIn', { token });
				console.log(logged.data);
				setValid(true);
			} catch (err) {
				console.error(err.response.data);
			}
		};
		getLogged();
	}, []);

	return (
		<>
			<CustomHeader title="CirbuMeet Chatpage" />

			{valid ? <div>ur good man</div> : <div>Ur smoked fam</div>}
		</>
	);
};

export default Chatpage;

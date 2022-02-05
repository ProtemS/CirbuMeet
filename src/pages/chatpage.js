/* eslint-disable unused-imports/no-unused-vars */
import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { ChatBox } from '../components/ChatBox';
import CustomHeader from '../components/CustomHeader';
import useLocalStorage from '../components/useLocalStorage';

const Chatpage = ({ ...props }) => {
	const [token, setToken] = useLocalStorage('token');
	const [valid, setValid] = useState(false);
	const [sendMessage, setSendMessage] = useState(null);
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

			{valid ? (
				<div className="min-h-screen bg-radial-at-t from-sky-400 to-indigo-900 flex justify-center items-center">
					<div className="m-4 w-full sm:flex-none sm:w-full sm:max-w-md min-w-max bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg py-16 px-10 sm:px-8 rounded-lg shadow-lg border-2 border-white">
						<ChatBox />
					</div>
				</div>
			) : (
				<div>Ur smoked fam</div>
			)}
		</>
	);
};

export default Chatpage;

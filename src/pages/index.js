import React, { useState } from 'react';

import CustomHeader from '../components/CustomHeader';

const Home = () => {
	// useEffect(() => {
	// 	fetch('http://localhost:8000/users').then((response) => {
	// 		response.text().then(console.log);
	// 	});
	// }, []);
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	return (
		<>
			<CustomHeader title="CirbuMeet" />

			<main className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
				<div className="flex flex-row items-center">
					<span className="text-3xl">CirbuMeet</span> <img src="/icons8-blankie-48.png" alt="" />{' '}
				</div>
				<div>CirbuMeet is a website dedicated to chatting with other people</div>
				<div className="mt-6">Login:</div>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						console.log(userName + password);
					}}
					className="flex flex-col space-y-2"
				>
					<input
						type="text"
						onChange={(e) => {
							setUserName(e.target.value);
						}}
						placeholder="Username"
					/>
					<input
						type="password"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						placeholder="Password"
					/>

					<button type="submit">Continue</button>
				</form>
			</main>
		</>
	);
};

export default Home;

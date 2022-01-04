import React, { useState } from 'react';

import Link from 'next/link';

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
			<CustomHeader />

			<main className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
				<div className="flex flex-row items-center select-none ">
					<span className="text-3xl font-semibold">CirbuMeet</span>
					<img src="/icons8-blankie-48.png" alt="" />
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
						className="border-2 border-gray-700 outline-none"
					/>
					<input
						type="password"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						placeholder="Password"
						className="border-2 border-gray-700 outline-none"
					/>

					<button type="submit">Continue</button>
				</form>
				<Link href="/register">
					<a>Dont have an account? Register!</a>
				</Link>
			</main>
		</>
	);
};

export default Home;

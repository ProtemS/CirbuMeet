import React, { useState } from 'react';

import { LockClosedIcon, UserIcon } from '@heroicons/react/outline';
import Link from 'next/link';

import CustomHeader from '../components/CustomHeader';
import InputLabel from '../components/InputLabel';

const Home = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	return (
		<>
			<CustomHeader />

			<main className="min-h-screen flex flex-col items-center justify-center bg-indigo-300">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						console.log(userName + password);
					}}
					className="flex flex-col items-center m-4 w-full sm:flex-none sm:w-full sm:max-w-md min-w-max bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg py-8 px-4 sm:px-8 rounded-lg shadow-lg border-2 border-white overflow-auto"
				>
					<div className="flex justify-center items-center text-6xl font-semibold">
						<span>CirbuMeet</span>
						<img src="/icons8-blankie-48.png" alt="" className="w-14" />
					</div>
					<div className="text-gray-900 pt-1 text-3xl">Start messaging with CirbuMeet</div>
					<InputLabel
						placeholder="Enter  username"
						icon={UserIcon}
						value={userName}
						setValue={setUserName}
						text="Username"
						className="w-full pt-5"
					/>
					<InputLabel
						placeholder="Enter password"
						icon={LockClosedIcon}
						value={password}
						setValue={setPassword}
						text="Password"
						password
						className="w-full pt-5"
					/>
					<button
						type="submit"
						className="w-full p-4 mt-6 rounded-lg bg-sky-900 text-gray-300 hover:text-white transition-all ease-out font-bold"
					>
						Log in
					</button>
					<Link href="/register">
						<a className="no-underline mt-14 p-4 w-full flex items-center justify-center rounded-lg  bg-sky-900">
							<div className="no-underline text-gray-300 hover:text-white transition-all ease-out font-bold">
								{/*  eslint-disable-next-line react/no-unescaped-entities */}
								Don't have a user? Register!
							</div>
						</a>
					</Link>
				</form>
			</main>
		</>
	);
};

export default Home;

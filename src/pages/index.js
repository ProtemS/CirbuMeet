import React, { useState } from 'react';

import { LockClosedIcon, UserIcon } from '@heroicons/react/outline';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

import CustomHeader from '../components/CustomHeader';
import InputLabel from '../components/InputLabel';
import useLocalStorage from '../components/useLocalStorage';

const Home = () => {
	const [username, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [displayError, setDisplayError] = useState(null);
	// eslint-disable-next-line unused-imports/no-unused-vars
	const [token, setToken] = useLocalStorage('token', '');
	const router = useRouter();

	return (
		<>
			<CustomHeader />

			<main className="min-h-screen flex flex-col items-center justify-center bg-radial-at-t from-sky-400 to-indigo-900">
				<form
					onSubmit={async (e) => {
						e.preventDefault();
						try {
							const res = await axios.post('http://localhost:8000/users/login', {
								username,
								password,
							});

							setDisplayError(null);
							setToken(res.data.token);
							router.push('/chatpage');
						} catch (err) {
							setDisplayError(err?.response?.data?.msg);
						}
					}}
					className="flex flex-col items-center m-4 w-full sm:flex-none sm:w-full sm:max-w-md min-w-max bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg py-8 px-4 sm:px-8 rounded-lg shadow-lg border-2 border-white overflow-auto"
				>
					<div className="flex justify-center items-center text-6xl p-4 font-semibold">
						<span>CirbuMeet</span>
						<img src="/icons8-blankie-48.png" alt="" className="w-14" />
					</div>
					<div className="text-gray-900 pt-1 text-3xl">Start messaging with CirbuMeet</div>
					<InputLabel
						placeholder="Enter  username"
						icon={UserIcon}
						value={username}
						setValue={setUserName}
						text="Username"
						className="w-full pt-5 mt-5"
					/>
					<InputLabel
						placeholder="Enter password"
						icon={LockClosedIcon}
						value={password}
						setValue={setPassword}
						text="Password"
						password
						className="w-full pt-4"
					/>
					<button
						type="submit"
						className="w-full p-4 mt-6 rounded-lg bg-sky-900  hover:text-white transition-all ease-out font-bold active:bg-sky-800 text-gray-300 ring-0 focus:ring-4 ring-sky-500 ring-opacity-30"
					>
						Log in
					</button>
					<div
						className={`flex font-semibold justify-center items-center w-full mt-4 p-4 bg-red-200 border-2 border-red-600 text-red-900 rounded-lg transition-all ease-out duration-500 ${
							!displayError ? 'h-0 p-0 border-0' : 'h-20'
						}`}
					>
						{displayError}
					</div>
					<Link href="/register">
						<a className="no-underline mt-14 p-4 w-full flex items-center justify-center rounded-lg  bg-sky-900">
							<div className="no-underline  hover:text-white transition-all ease-out font-bold active:bg-sky-800 text-gray-300 ring-0 focus:ring-4 ring-sky-500 ring-opacity-30">
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

import React, { useState } from 'react';

import { UserIcon, LockClosedIcon, EmojiHappyIcon } from '@heroicons/react/outline';
import axios from 'axios';
import { useRouter } from 'next/router';

import CustomHeader from '../components/CustomHeader';
import InputLabel from '../components/InputLabel';
import RadioChoose from '../components/RadioChoose';
import useLocalStorage from '../components/useLocalStorage';

const genders = ['Male', 'Female'];

const Chatpage = () => {
	const [selectedGender, setSelectedGender] = useState(null);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [nickname, setNickname] = useState('');
	// eslint-disable-next-line unused-imports/no-unused-vars
	const [token, setToken] = useLocalStorage('token', '');
	const [displayError, setDisplayError] = useState(null);

	const openNickname = username && password && selectedGender;
	const router = useRouter();
	return (
		<>
			<CustomHeader title="Register a Cirbumeet account" />

			<main className="min-h-screen flex items-center justify-center bg-indigo-300">
				<form
					className="flex flex-col items-center m-4 w-full sm:flex-none sm:w-full sm:max-w-md min-w-max bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg py-8 px-4 sm:px-8 rounded-lg shadow-lg border-2 border-white overflow-auto"
					onSubmit={async (e) => {
						e.preventDefault();

						try {
							console.log(username + password + nickname + selectedGender);
							const res = await axios.post('http://localhost:8000/users/register', {
								username,
								password,
								nickname,
								gender: selectedGender,
							});
							setToken(res.data.token);
							setDisplayError(null);

							router.push('/chatpage');
						} catch (err) {
							setDisplayError(err?.response?.data?.msg);
						}
					}}
				>
					<h1 className="font-bold text-4xl">Register</h1>
					<InputLabel
						text="Username"
						placeholder="Type your username"
						icon={UserIcon}
						value={username}
						setValue={setUsername}
						className="w-full mt-8"
					/>
					<InputLabel
						text="Password"
						placeholder="Type your password"
						icon={LockClosedIcon}
						value={password}
						setValue={setPassword}
						className="w-full mt-2"
						password
					/>
					<RadioChoose
						chooseList={genders}
						// vertical
						selected={selectedGender}
						setSelected={setSelectedGender}
						className="mt-2 w-full"
					/>
					<InputLabel
						text="Nickname"
						placeholder="Type your username"
						icon={EmojiHappyIcon}
						value={nickname}
						setValue={setNickname}
						className={`w-full mt-2 rounded-lg overflow-hidden transition-all ease-out duration-700 ${
							openNickname ? 'h-[98px]' : 'h-0 p-0'
						}`}
						rounded={false}
						optional
					/>

					<button
						type="submit"
						className={`space-x-2 w-full mt-8 p-4 bg-sky-900 shadow-lg shadow-sky-900/30 rounded-lg font-bold uppercase transition-all ease-out active:bg-sky-800 text-gray-300 ring-0 focus:ring-4 ring-sky-500 ring-opacity-30 ${
							openNickname ? 'mt-8 hover:text-white' : 'mt-6'
						}`}
					>
						Register
					</button>
					<div
						className={`flex justify-center items-center w-full mt-4 p-4 bg-red-200 border-2 border-red-600 text-red-900 rounded-lg transition-all ease-out duration-500 ${
							!displayError ? 'h-0 p-0 border-0' : 'h-20'
						}`}
					>
						{displayError}
					</div>
				</form>
			</main>
		</>
	);
};

export default Chatpage;

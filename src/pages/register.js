import React, { useState } from 'react';

import { Switch } from '@headlessui/react';
import axios from 'axios';
import Router from 'next/router';

import CustomHeader from '../components/CustomHeader';
import useLocalStorage from '../components/useLocalStorage';

const Register = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [nickName, setNickName] = useState('');
	const [male, setMale] = useState(true);
	// eslint-disable-next-line unused-imports/no-unused-vars
	const [token, setToken] = useLocalStorage('token', '');
	const [displayError, setDisplayError] = useState('');

	const MaleOrFemale = () => {
		if (male) return 'male';
		return 'female';
	};

	return (
		<>
			<CustomHeader title="Register a Cirbumeet account" />

			<main className="min-h-screen flex flex-col items-center justify-center space-y-3 bg-indigo-50">
				<div className="flex flex-row items-center">
					<img src="/icons8-blankie-48.png" alt="" />
					<span className="text-5xl">Register:</span>
				</div>
				<form
					onSubmit={async (e) => {
						e.preventDefault();
						try {
							console.log(userName + password + nickName + MaleOrFemale());
							const res = await axios.post('http://localhost:8000/users/register', {
								username: userName,
								password,
								nickname: nickName,
								gender: MaleOrFemale(),
							});
							setToken(res.data);
							setDisplayError('Wonderful! Your account has been created!');
							Router.push('/chatpage');
						} catch (err) {
							setDisplayError(err.response.data.msg);
						}
					}}
					className="flex flex-col space-y-2"
				>
					<input
						type="text"
						onChange={(e) => {
							setUserName(e.target.value);
						}}
						placeholder="Username"
						className="border-2 border-gray-700 outline-none w-72"
					/>
					<input
						type="password"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						placeholder="Password"
						className="border-2 border-gray-700 outline-none w-72"
					/>
					<input
						type="text"
						onChange={(e) => {
							setNickName(e.target.value);
						}}
						placeholder="Nickname (Chat name - optional)"
						className="border-2 border-gray-700 outline-none w-72"
					/>
					<div className="flex flex-row  justify-center">
						<Switch.Group>
							<div className="flex items-center">
								<Switch.Label className="mr-4">Female</Switch.Label>
								<Switch
									checked={male}
									onChange={setMale}
									className={`${
										male ? 'bg-blue-600' : 'bg-pink-300'
									} relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
								>
									<span
										className={`${
											male ? 'translate-x-6' : 'translate-x-1'
										} inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
									/>
								</Switch>
								<Switch.Label className="ml-4">Male</Switch.Label>
							</div>
						</Switch.Group>
					</div>
					<button type="submit">Continue</button>
					<div>{displayError}</div>
				</form>
			</main>
		</>
	);
};

export default Register;

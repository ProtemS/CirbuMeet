import React, { useState } from 'react';

const Register = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	// const [nickName, setNickName] = useState('');
	// const [gender, setGender] = useState('');
	return (
		<div>
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
		</div>
	);
};

export default Register;

import React, { useState } from 'react';

export const ChatMessage = ({ name, body }) => {
	const date = new Date();
	const hour = date.getHours();
	const mins = `0${date.getMinutes()}`.slice(-2);

	// eslint-disable-next-line unused-imports/no-unused-vars
	const [time, setTime] = useState(`${hour}:${mins}`);
	return (
		<div className=" bg-white rounded-lg p-3 m-1 ">
			<div className="flex flex-row">
				<div className="font-semibold">{name}</div>
				<div className="ml-2 ">{body} </div>
			</div>
			<div className="">{time}</div>
		</div>
	);
};

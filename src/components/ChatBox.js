import React from 'react';

import { ChatMessage } from './ChatMessage';

export const ChatBox = () => {
	return (
		<div>
			<div className="font-semibold  text-xl">Logged in as (shit)</div>
			<div className="overflow-y-auto max-h-[500px] md:w-[700px] sm:w-[300px]  scrollbar scrollbar-thumb-gray-400 scrollbar-track-slate-300">
				<ChatMessage name="Rotem" body="hello" />
				<ChatMessage
					name="As-salamu alaykum is a greeting in Arabic that means Peace be upon youeee"
					body="Lorem ipsum dolor sit amet, no mel nonumy saperet. Eu sed natum dolorum erroribus, usu ut velit tamquam eligendi. Iusto putent sed ex. Dicit tractatos aliquando cu est, tation detracto ut quo, qui eu novum eui"
				/>
			</div>
		</div>
	);
};

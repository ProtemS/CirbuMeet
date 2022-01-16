import React from 'react';

const InputLabel = ({
	text,
	placeholder,
	icon: Icon,
	value,
	setValue,
	optional = false,
	password = false,
	rounded = true,
	...props
}) => {
	return (
		<div {...props}>
			<div className={`group bg-white p-4 shadow-lg${rounded && ' rounded-2xl'}`}>
				<label htmlFor={text}>
					<div className="flex text-sm mb-1 font-medium text-gray-500 transition-colors group-focus-within:text-gray-900">
						<div className="flex-1">{text}</div>
						{optional && <div className="text-sky-900 font-normal opacity-50">Optional</div>}
					</div>
					<div className="flex justify-center items-center border-b-2 transition-colors border-b-gray-200 group-focus-within:border-b-gray-400 rounded-b-sm cursor-text">
						<Icon className="h-4 transition-colors text-gray-400 group-focus-within:text-gray-500" />
						<input
							className="flex-1 bg-transparent outline-none p-2 rounded-md"
							type={password ? 'password' : 'text'}
							id={text}
							placeholder={placeholder}
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
					</div>
				</label>
			</div>
		</div>
	);
};

export default InputLabel;

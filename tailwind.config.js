module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [
		// ...
		// eslint-disable-next-line global-require
		require('tailwind-scrollbar'),
	],
};

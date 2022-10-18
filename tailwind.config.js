/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#FAB529',
				secondary: '#FAC251',
				neutral: '#222222'
			},
			fontFamily: {
				Roboto: ['Roboto', 'sans-serif']
			}
		}
	},
	plugins: []
};

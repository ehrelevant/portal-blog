/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			white: '#FBFBFB',
			blue: '#D1E9F6',
			yellow: '#F6EACB',
			orange: '#F1D3CE',
			red: '#EECAD5',
			black: '#262626'
		},
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif', 'system-ui']
			},
			transitionProperty: {
				'colors-weight': 'color, font-weight'
			}
		}
	},
	plugins: []
};

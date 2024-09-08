/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			white: '#FBFBFB',
			blue: '#D1E9F6',
			'hover-blue': '#2c64a3',
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
			},
			boxShadow: {
				solid: '0.5rem 0.5rem #26262644'
			}
		}
	},
	plugins: []
};

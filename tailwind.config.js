/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				600: '#1B2559',
				500: '#718096',
				400: '#E9EDF7',
				300: '#F4F7FE',
				200: '#F2EFFF',
				100: '#E2E8F0',
				'blue-500': '#7B5AFF',
				'blue-400': '#4A25E1',
				'blue-300': '#603CFF',
				'blue-200': '#CACAFF',
				'blue-100': '#FBFBFF'
			},
			boxShadow: {
				'black-100': 'var(--shadow-100)',
				'black-200': 'var(--shadow-200)',
				'black-300': 'var(--shadow-300)',
				'blue': 'var(--shadow-blue)',
			},
			 screens: {
				'custom': '915px',
			 }
		}
	},
	plugins: ['prettier-plugin-tailwindcss']
};

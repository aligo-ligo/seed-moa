import { Config } from "tailwindcss";
import { colors } from './src/styles/theme/color';

const config: Config = {
	content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
		},
		extend: {
			scale: {
				25: "0.25",
			},
			colors,
			fontFamily: {
				'jalnan': ['Jalnan OTF']
			},
			boxShadow: {
				sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
				md: "0 8px 30px rgba(0, 0, 0, 0.12)",
			},
			screens: {
				phone: "340px",
				desktop: "568px",
			},
			width: {
				phone: "340px",
				desktop: "568px",
			},
		},
	},
	plugins: [],
};

export default config;
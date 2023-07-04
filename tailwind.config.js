/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
		},
		extend: {
			colors: {
				main: "#87995C",
				mainDeep: "#52681D",
				mainHover: "#BACB91",
				lightGray: "#D9D9D9",
				lighterGray: "#E5E5E5",
				gray: "#999",
				darkGray: "#525252",
				success: "#4785FF",
				fail: "#ff3131",
				info: "#17a2b8",
				warning: "#ffce21",
				white: "#fff",
			},
			spacing: {
				28: "7rem",
			},
			letterSpacing: {
				tighter: "-.04em",
			},
			lineHeight: {
				tight: 1.2,
			},
			fontSize: {
				"5xl": "2.5rem",
				"6xl": "2.75rem",
				"7xl": "4.5rem",
				"8xl": "6.25rem",
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

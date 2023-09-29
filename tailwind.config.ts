import { type Config } from "tailwindcss";
const colors = [
  'gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'
];
const shades = [
  '100', '200', '300', '400', '500', '600', '700', '800', '900'
];

const bgClasses:string[] = [];

colors.forEach(color => {
  shades.forEach(shade => {
    bgClasses.push(`bg-${color}-${shade}`);
  });
});




export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        'dark-purple' : '#2e026d',
      }
    },
  },
  plugins: [],
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: bgClasses, // Your generated array
    },
  },
} satisfies Config;



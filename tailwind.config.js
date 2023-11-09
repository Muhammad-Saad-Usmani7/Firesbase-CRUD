/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        
        'sm': '640px',  // Customize the "sm" breakpoint to start at 640 pixels
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1500px',
      },
    },
  },

  plugins: [],
}


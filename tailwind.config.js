module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'regal-blue': '#243c5a',
      },
    }
  },
  plugins: [require('daisyui')],
}

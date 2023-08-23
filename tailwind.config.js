/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'starter': "url('/src/assets/background_starter.jpg')",
      }
    }
  }
}

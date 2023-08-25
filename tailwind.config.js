/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'starter': "url('/src/assets/background_starter.jpg')",
      }
    }
  }
}

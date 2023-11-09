/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the paths to all of the template files in your project
  content: [
    "./src/**/*.{html,js}", // adjust the extensions according to your project files
  ],
  theme: {
    extend: {
      // Extend the default colors, fonts, spacing, etc. as needed
      colors: {
        'brand-blue': '#007ace',
        'brand-red': '#ff4136',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      // Add custom fonts, if any
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      // Add any other customizations that you need
    },
  },
  // Add any Tailwind plugins you'd like to use here
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
  ],
}

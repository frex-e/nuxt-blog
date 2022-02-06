module.exports = {
  purge: ['/**/*{.vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'highlight': '#3b82f6'
      },
      screens: {
        'xs': '480px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: {enabled: true,
    content: ['index.html'],},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'mili': "url('/images/966315.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
    /* enabled: true,
    content: ['index.html'], */
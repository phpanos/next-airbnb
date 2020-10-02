module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./pages/*.js', './components/*.js'],
  theme: {
    extend: {
      width: {
        '300': '300px',
      },
      minWidth: {
        '150': '150px',
      },
      maxWidth: {
        'content': 'max-content',
      },
      backgroundPosition: {
        'center-center': '50% 50%',
      },
      opacity: {
        '05': '.05',
        '15': '.15',
      },
      inset: {
        '100': '100%',
      },
    },
  },
  variants: {},
  plugins: [],
}

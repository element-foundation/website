

const theme = {
  fonts: {
    body: 'Acumin Pro, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  fontSizes: {
    'xs': 16,
    's': 18,
    'm': 24,
    'l': 33,
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  text: {
    heading: {
      fontFamily: 'body',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: 'm',
    },
    h1: {
      variant: 'text.heading',
      fontSize: 'l',
    },
  }
}


export default theme



const theme = {
  colors: {
    surface: {
      gray: '#DAD7D1',
      gold: '#FBE38E',
      conch: '#CADAD2'
    },
    background: "#FFF"
  },
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
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  text: {
    default: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    heading: {
      fontFamily: 'body',
      lineHeight: 'heading',
      fontWeight: 'body',
    },
    ethAddress: {
      variant: 'text.default',
      fontSize: '20px',
    },
    logo: {
      fontFamily: 'body',
      fontSize: '26px',
      fontWeight: 'bold',
    }
  },
  layout: {
    container: {
      maxWidth: '1160px'
    }
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

export default (({ colors, breakpoints: { desktop }, fontFamily }) => ({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#001C7B',
    alignItems: 'center',
    color: '#fff',
    fontSize: '12px',
    height: 40,
    '& ul': {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      margin: '0 20px',
      padding: 0,
    },
    '& li': {
      padding: '0px 15px',
      textAlign: 'center',
      borderLeft: '1px solid #ccc',
      listStyle: 'none',
    },
    '& li:first-child': {
      borderLeft: 0,
    },
    '& li:nth-child(3)': {
      borderLeft: 0,
    },
  },
  copyrightIcon: {
   marginRight: 5,
  },

  [`@media (min-width: ${desktop}px)`]: {
    '& li:nth-child(4)': {
      borderLeft: '1px solid #ccc',
    },
  }
}))

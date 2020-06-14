export default (({ colors, breakpoints: { desktop }, fontFamily }) => ({
  '@global': {
    body: {
      margin: 0,
      '& #root': {        
        fontFamily: fontFamily,
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
      }
    }
  },
  header: {
    position: 'relative',
    height: 60,
    backgroundColor: '#001C7B',
    display: 'flex',
    fontSize: 12
  },
  logo: {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '8px 0px 0px 20px',
    color: '#fff',
    mask: 'url("/images/Company.svg")',
    maskSize: 'cover',
    width: 70,
    height: 40,
    background: '#fff',
  },
  selected: {
    backgroundColor: '#001C7B',
    color: '#fff !important',
  },
  navList: {
    position: 'absolute',
    display: 'none',
    top: '100%',
    right: 0,
    flex: 1,
    color: '#001C7B',
    backgroundColor: '#fff',
    justifyContent: 'end', 
    zIndex: 999,
    flexFlow: 'column',
    '& div': {
      padding: '15px 15px',
      '&:not(:last-child):hover': {
        backgroundColor: '#fff',
        color: '#001C7B',
      }
    },
  },
  showNavList: {
    display: 'flex',
  },
  userInfo: {
    borderTop: 'solid 1px #c3c3c3',
    '& div': {
      padding: 0,
    }
  },
  profile: {
    display: 'none',
    fontSize: 30,
  },
  userDetails: {
    flexFlow: 'row',
    '& span': {
      display: 'flex',
    }
  },
  menuIcon: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    right: 20,
    color: '#fff',
    fontSize: 25,
  },
  [`@media (min-width: ${desktop}px)`]: {
    selected: {
      backgroundColor: '#fff',
      color: '#001C7B !important',
    },
    navList: {
      position: 'relative',
      display: 'flex',
      top: 0,
      justifyContent: 'flex-end', 
      backgroundColor: 'transparent',
      flexFlow: 'row',
      '& div': {
        display: 'flex',
        alignItems: 'center',
        padding: '15px 15px',
        color: '#fff'
      },
    },
    userInfo: {
      borderTop: 'none',
      borderLeft: 'solid 1px #fff',
    },
    profile: {
      display: 'block',
    },
    userDetails: {
      flexDirection: 'column',
    },
    menuIcon: {
      display: 'none',
    },
  }    
}))


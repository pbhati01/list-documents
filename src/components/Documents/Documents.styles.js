export default (({ colors, breakpoints: { desktop, tablet }, fontFamily }) => ({
  container: {
    position: 'relative',
    flex: 1,
    fontSize: 12,
    padding: '0px 20px 0px 20px',
    '& h2':{  
      padding: '30px 0px 30px 0px',
      margin: 0,
      fontSize: 14,
    }
  },
  documentsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flext-start',
    marginBottom: 40,
  },
  filterBy: {
    position: 'absolute',
    display: 'none',
    flexDirection: 'column',
    marginLeft: -20,
    marginRight: 0,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    boxShadow: '-0px 2px 4px',
    padding: '0 15px',
    '& input': {
      marginBottom: '20px',
      height: 40,
    },
    '& button': {
      marginBottom: '20px',
      borderRadius: 5,
      borderStyle: 'none',
      height: 40,
      color: '#fff',
    },    
    '& h2': {
      fontSize: 14,
      fontWeight: 'bold',
      padding: 0,
      margin: '15px 0',
    },
  },
  showFilterBox: {
    display: 'flex',
  },
  filterByMenu: {
    position: 'absolute',
    display: 'none',
    left: 0,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    boxShadow: '-0px 2px 4px',
    padding: '10px 15px',
    fontSize: 14,
    fontWeight: 'bold',
    margin: 0,
    transform: 'rotate(-90deg) translate(-30px, -30px)',
  },
  showFilterByMenu: {
    display: 'flex',
  },
  closeButton: {
    position: 'absolute',
    right: 15,
    top: 15,
    fontSize: 14,
    visibility: 'visible',
    height: 40,
    color: '#000',
  },
  applyButton: {
    backgroundColor: '#2D4596',
  },
  clearButton: {
    backgroundColor: '#EAAC4C',
  },
  documentList: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    borderRadius: 5,
    color: '#5E5E5E',
    marginLeft: 40,
    boxShadow: '-0px 2px 4px',
    padding: '15px 15px 0px 15px',
    backgroundColor: '#E0E0E0',
    '& table': {
      borderCollapse: 'collapse', 
      '& td': {
        textAlign: 'left',
        padding: 8,
      },
      '& td:first-child': {
        overflowWrap: 'break-word',
        wordWrap: 'break-word',
        maxWidth: 160,
      },   
      '& th': {
        textAlign: 'left',
        padding: '0px 8px 15px 8px',
        backgroundColor: '#E0E0E0',
        fontSize: 14,
        '& div':{
          display: 'inline-flex',
          marginLeft: 5,
        }
      },
      '& tr:nth-child(odd)': {
        backgroundColor: '#55555570',
      },
      '& tr:nth-child(even)': {
        backgroundColor: '#fff',
      },      
    },    
  },
  ascIcon: {
    verticalAlign: '-webkit-baseline-middle',
  },
  dscIcon: {
    verticalAlign: 'top',
  },
  dateColumn: {
    flex: 1,
  },
  actionButton: {
    display: 'flex',
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
    color: '#001C7B',
    '& button': {
      height: 30,
      borderWidth: 1,
      borderColor: '#001C7B',
      marginRight: 10,
    },
    '& button[disabled]': {
      borderColor: '#e3e3e3'
    },
    '& span': {
      marginRight: 10,
      fontSize: 14,
      fontFamily: 'Roboto-Medium',
    }
  },

  [`@media (min-width: ${desktop}px)`]: {
    filterBy: {
      position: 'relative',
      display: 'flex',
      marginLeft: 0,
      marginRight: 20,
    },
    showFilterByMenu: {
      display: 'none',
    },
    documentList: {
      marginLeft: 0,
    },
    closeButton: {
      visibility: 'hidden',
    },
    actionButton: {
      justifyContent: 'flex-end',
    }
  }
}))

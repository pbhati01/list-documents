import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { fetchDocumentList } from '../../redux/actions';
import { getDocumentList } from '../../redux/selectors';
import styles from './Documents.styles';

const useStyles = createUseStyles(styles);

const Documents = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const documentList = useSelector(getDocumentList);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [showFilterBox, setShowFilterBox] = useState(false);
  const [filteredDocuments, setFilteredDocuments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortNameDirection, setSortNameDirection] = useState('asc');
  const [sortDateDirection, setSortDateDirection] = useState('asc');
  const recordsPerPage = 6;
  const numOfPages = Math.ceil(filteredDocuments.length / recordsPerPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDocumentList());
  }, [dispatch]);

  useEffect(() => {
    const sordtedDocumentList =  documentList.filter(document => document.name.includes('.pdf') || document.name.includes('.docx'))
    .sort((a, b) => {
      if(a.date > b.date) {
        return -1;
      }
      else if(a.date < b.date) {
        return 1;
      }
      return 0;
    });
    setFilteredDocuments(sordtedDocumentList);
  }, [documentList]);

  const moveFirst = () => {
    setCurrentPage(1);
  };

  const movePrev = () => {
    let page = currentPage;
    if (page > 1) {
        page--;
        if (page < 1) page = 1;
        if (page > numOfPages) page = numOfPages;
    }
    setCurrentPage(page);
  };

  const moveNext = () => {
    let page = currentPage;
    if (page < numOfPages) {
      page++;
      if (page < 1) page = 1;
      if (page > numOfPages) page = numOfPages;
    }
    setCurrentPage(page);
  };

  const moveLast = () => {
    setCurrentPage(numOfPages);
  };
  
  const handleApplyFilters = () => {
    if(fromDate && toDate) {
      const fromDateObj = new Date(fromDate);
      const toDateObj = new Date(toDate);
      const filterDocuments = documentList.filter(document => {
        const docDate = new Date(document.date);
        return (docDate >= fromDateObj && docDate <= toDateObj);
      });
      moveFirst();
      setFilteredDocuments(filterDocuments);
    }
  };
  
  const handleClearFilters = () => {
    if(fromDate || toDate) {
      setFromDate('');
      setToDate('');
      moveFirst();
      setFilteredDocuments(documentList);
    }
  };

  const getDocumentListHtml = () => {
    let currentPageHtml = [];
    for (var index = (currentPage-1) * recordsPerPage; index < (currentPage * recordsPerPage) && index < filteredDocuments.length; index++) {
      const modifiedDate = new Date(filteredDocuments[index].date);
      let dt = modifiedDate.getDate();
      let month = modifiedDate.getMonth() + 1;
      let year = modifiedDate.getFullYear();
      if (dt < 10) {
        dt = '0' + dt;
      }
      if (month < 10) {
        month = '0' + month;
      } 
    
      currentPageHtml.push(<tr key={`tr-${index}`}>
        <td>{filteredDocuments[index].name}</td>
        <td className={classes.dateColumn}>{`${dt}-${month}-${year}`}</td>
      </tr>);
    }
    return currentPageHtml;
  }

  const sortName = () => {
    let sortedFilteredDocuments = [];
    let newSortNameDirection = '';
    if(sortNameDirection === 'asc') {
      newSortNameDirection = 'dsc';
      sortedFilteredDocuments = filteredDocuments.sort((a, b) => {
        if(a.name > b.name) {
          return -1;
        }
        else if(a.name < b.name) {
          return 1;
        }
        return 0;
      })
    }
    else {
      newSortNameDirection = 'asc';
      sortedFilteredDocuments = filteredDocuments.sort((a, b) => {
        if(a.name > b.name) {
          return 1;
        }
        else if(a.name < b.name) {
          return -1;
        }
        return 0;
      })
    }
    setSortNameDirection(newSortNameDirection);
    setFilteredDocuments(sortedFilteredDocuments);
  }

  const sortDate = () => {
    let sortedFilteredDocuments = [];
    let newSortDateDirection = '';
    if(sortDateDirection === 'asc') {
      newSortDateDirection = 'dsc';
      sortedFilteredDocuments = filteredDocuments.sort((a, b) => {
        if(a.date > b.date) {
          return -1;
        }
        else if(a.date < b.date) {
          return 1;
        }
        return 0;
      });
    }
    else {
      newSortDateDirection = 'asc';
      sortedFilteredDocuments = filteredDocuments.sort((a, b) => {
        if(a.date > b.date) {
          return 1;
        }
        else if(a.date < b.date) {
          return -1;
        }
        return 0;
      })
    }
    setSortDateDirection(newSortDateDirection);
    setFilteredDocuments(sortedFilteredDocuments);
  }

  const toggleFilterBox = () => {
    setShowFilterBox(!showFilterBox);
  }

  return (
    <div className={classes.container}>
      <h2>Documents</h2>
      <div className={classes.documentsContainer}>
        <div className={classnames(classes.filterByMenu, {[classes.showFilterByMenu] : !showFilterBox})}
            onClick={!showFilterBox ? toggleFilterBox : undefined}>Filter By</div>
        <div className={classnames(classes.filterBy, {[classes.showFilterBox] : showFilterBox})}>
          <h2>Filter By</h2>
          <i className={classnames('fa fa-close', classes.closeButton)} aria-hidden="true" onClick={toggleFilterBox}></i>
          <label>From:</label>
          <input type='date' value={fromDate} onChange={e => setFromDate(e.target.value)} />
          <label>To:</label>
          <input type='date' value={toDate} onChange={e => setToDate(e.target.value)}  />
          <button className={classes.applyButton} onClick={handleApplyFilters}>Apply Filters</button>
          <button className={classes.clearButton} onClick={handleClearFilters}>Clear Filters</button>
        </div>
        <div className={classes.documentList}>
            <table>
              <thead>
                <tr>
                  <th>
                    <span>{'Document Name'}</span>
                    <div className={classnames(sortNameDirection === 'asc' ? [classes.ascIcon] : [classes.dscIcon])}>
                      <i className={classnames('fa', sortNameDirection === 'asc' ? 'fa-sort-asc' : 'fa-sort-desc')}
                      aria-hidden="true" onClick={sortName}></i>
                    </div>
                  </th>
                  <th>
                    <span>{'Date'}</span>
                    <div className={classnames(sortDateDirection === 'asc' ? [classes.ascIcon] : [classes.dscIcon])}>
                      <i className={classnames('fa', sortDateDirection === 'asc' ? 'fa-sort-asc' : 'fa-sort-desc')}
                      aria-hidden="true" onClick={sortDate}></i>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredDocuments.length > 0 ?
                  getDocumentListHtml()
                  : <tr><td colSpan={2} >No records found</td></tr>}
              </tbody>
            </table>
            {filteredDocuments.length > recordsPerPage ?
            <div className={classes.actionButton}>
              <button disabled={(currentPage === 1)} onClick={moveFirst}>{'<<'}</button>
              <button disabled={(currentPage === 1)} onClick={movePrev}>{'<'}</button>
              <span>{`${currentPage} of ${numOfPages}`}</span>
              <button disabled={(currentPage === numOfPages)} onClick={moveNext}>{'>'}</button>
              <button disabled={(currentPage === numOfPages)} onClick={moveLast}>{'>>'}</button>
            </div>
            : null}
        </div>
      </div>
    </div>
  );
};

export default Documents;

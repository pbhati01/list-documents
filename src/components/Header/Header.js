import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../../redux/actions';
import { getUserData } from '../../redux/selectors';

import styles from './Header.styles';

const useStyles = createUseStyles(styles);

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { firstName, lastName } = useSelector(getUserData);
  const [showNavList, setShowNavList] = useState(false);
  
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const showMenu = () => {
    setShowNavList(!showNavList);
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <span className={classes.logo}></span>
      </div>
      <div className={classnames(classes.navList, {[classes.showNavList] : showNavList})} id='navList'>
        <div>Home</div>
        <div className={classes.selected}>Documents</div>
        <div>Contact</div>
        <div className={classes.userInfo}>
          <span className={`fa fa-user-circle ${classes.profile}`}></span>
          <div className={classes.userDetails}>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </div>
        </div>
      </div>
      <div className={`icon ${classes.menuIcon}`} onClick={showMenu}>
        <span className='fa fa-bars'></span>
      </div>
    </header>
  );
};

export default Header;
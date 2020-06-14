import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './Footer.styles';

const useStyles = createUseStyles(styles);

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <ul>
        <li>
          <span className={`fa fa-copyright ${classes.copyrightIcon}`}></span>
          <span>Copyrights</span>
        </li>
        <li>All rights reserved</li>
        <li>Imprint</li>
        <li>Terms of use</li>
        <li>Privacy policy</li>
      </ul>
    </footer>
  );
};

export default Footer;
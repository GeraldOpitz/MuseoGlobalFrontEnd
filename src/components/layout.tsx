import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'url(./images/background.png)', 
    backgroundSize: 'cover',
    minHeight: '100vh',
  },
});

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

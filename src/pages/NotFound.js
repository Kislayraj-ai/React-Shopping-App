import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Card from '../components/UI/Card';
import classes from './NotFound.module.css';

const NotFound = () => {
  return (
    <Card className={classes['not-found']}>
      <h1>404 !</h1>
      <h2>Page Not Found</h2>

      <Link to="/home" className={classes.link}>
        <h4 className={classes['back']}>
          <FaArrowLeft /> Back to Shop
        </h4>
      </Link>
    </Card>
  );
};

export default NotFound;

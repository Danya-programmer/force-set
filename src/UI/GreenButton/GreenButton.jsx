import React from 'react';
import { Link } from 'react-router-dom';
import classes from './GreenButton.module.css';
const GreenButton = (props) => {
    return (
        <Link to={props.to} style={{textDecoration: 'none'}}>
            <div className={classes.GreenButton}>
                <p className={classes.Text}>{props.name}</p>
            </div>
        </Link>
    );
}

export default GreenButton;

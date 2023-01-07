import React from 'react';
import { Link } from 'react-router-dom';
import classes from './GreenButton.module.css';
const GreenButton = ({name, to}) => {
    
    return (
        <Link to={to} style={{textDecoration: 'none'}} >
            
            <div className={classes.GreenButton} >
                <p className={classes.Text}>{name}</p>
            </div>
            
        </Link>
    );
}

export default GreenButton;

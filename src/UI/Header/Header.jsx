import React from 'react';
import classes from './Header.module.css'
const Header = () => {
    return (
        <div className={classes.Header}>
            <p style={{color: '#398D47'}} className={classes.LogoName}>FORCE </p> 
            <p style={{color: '#E5900F'}} className={classes.LogoName}>&nbsp;SET</p>
        </div>
    );
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavigationCircles.module.css'
const NavigationCircles = ({degree}) => {
    
    return (
        <div>
            {(degree===2) ? <div className={classes.NavigationCircles}>
            <Link to='/' style={{textDecoration: 'none', margin: '0 0 -2px 0'}}>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12.5" cy="12.5" r="12.5" fill="#E5900F"/>
            </svg></Link>
            <svg width="40" height="2" viewBox="0 0 40 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1" y1="1" x2="39" y2="1" stroke="#E5900F" strokeWidth="2" strokeLinecap="square"/>
            </svg> 
            <Link to='/survey/1' style={{textDecoration: 'none', margin: '0 0 -2px 0'}}>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12.5" cy="12.5" r="12.5" fill="#E5900F"/>
            </svg></Link>

            <svg width="40" height="2" viewBox="0 0 40 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1" y1="1" x2="39" y2="1" stroke="url(#paint0_linear_72_8)" strokeWidth="2" strokeLinecap="square"/>
            <defs>
            <linearGradient id="paint0_linear_72_8" x1="20" y1="2" x2="22" y2="2" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E5900F"/>
            <stop offset="0.523003" stopColor="#8E8E8E"/>
            </linearGradient>
            </defs>
            </svg>

            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12.5" cy="12.5" r="11.5" stroke="#8D8D8D" strokeWidth="2"/>
            </svg>
            <svg width="40" height="2" viewBox="0 0 40 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1" y1="1" x2="39" y2="1" stroke="#8D8D8D" strokeWidth="2" strokeLinecap="square"/>
            </svg>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12.5" cy="12.5" r="11.5" stroke="#8D8D8D" strokeWidth="2"/>
            </svg>
        </div>
        : (degree===3) ? <div className={classes.NavigationCircles}>
        <Link to='/' style={{textDecoration: 'none', margin: '0 0 -2px 0'}}>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12.5" cy="12.5" r="12.5" fill="#E5900F"/>
        </svg></Link>
        <svg width="40" height="2" viewBox="0 0 40 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="1" x2="39" y2="1" stroke="#E5900F" strokeWidth="2" strokeLinecap="square"/>
        </svg> 
        <Link to='/survey/1' style={{textDecoration: 'none', margin: '0 0 -2px 0'}}>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12.5" cy="12.5" r="12.5" fill="#E5900F"/>
        </svg></Link>

        <svg width="40" height="2" viewBox="0 0 40 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="1" x2="39" y2="1" stroke="#E5900F" strokeWidth="2" strokeLinecap="square"/>
        </svg> 

        <Link to='/survey/2' style={{textDecoration: 'none', margin: '0 0 -2px 0'}}>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12.5" cy="12.5" r="12.5" fill="#E5900F"/>
        </svg></Link>

        <svg width="40" height="2" viewBox="0 0 40 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="1" x2="39" y2="1" stroke="url(#paint0_linear_72_8)" strokeWidth="2" strokeLinecap="square"/>
        <defs>
        <linearGradient id="paint0_linear_72_8" x1="20" y1="2" x2="22" y2="2" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E5900F"/>
        <stop offset="0.523003" stopColor="#8E8E8E"/>
        </linearGradient>
        </defs>
        </svg>

        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12.5" cy="12.5" r="11.5" stroke="#8D8D8D" strokeWidth="2"/>
        </svg>
    </div> 
    : (degree===4) ? <div className={classes.NavigationCircles}>
    <Link to='/' style={{textDecoration: 'none', margin: '0 0 -2px 0'}}>
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12.5" cy="12.5" r="12.5" fill="#E5900F"/>
    </svg></Link>
    <svg width="40" height="2" viewBox="0 0 40 2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="1" y1="1" x2="39" y2="1" stroke="#E5900F" strokeWidth="2" strokeLinecap="square"/>
    </svg> 
    <Link to='/survey/1' style={{textDecoration: 'none', margin: '0 0 -2px 0'}}>
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12.5" cy="12.5" r="12.5" fill="#E5900F"/>
    </svg></Link>

    <svg width="40" height="2" viewBox="0 0 40 2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="1" y1="1" x2="39" y2="1" stroke="#E5900F" strokeWidth="2" strokeLinecap="square"/>
    </svg> 
    <Link to='/survey/2' style={{textDecoration: 'none', margin: '0 0 -2px 0'}}>
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12.5" cy="12.5" r="12.5" fill="#E5900F"/>
    </svg></Link>
    <svg width="40" height="2" viewBox="0 0 40 2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="1" y1="1" x2="39" y2="1" stroke="#E5900F" strokeWidth="2" strokeLinecap="square"/>
    </svg> 
    <Link to='/survey/3' style={{textDecoration: 'none', margin: '0 0 -2px 0'}}>
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12.5" cy="12.5" r="12.5" fill="#E5900F"/>
    </svg></Link>
</div>
: <p>404</p>
            
        }
        
        </div>
    );
}

export default NavigationCircles;

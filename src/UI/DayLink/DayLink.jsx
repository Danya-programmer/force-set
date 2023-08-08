import React from 'react';
import classes from './DayLink.module.css';
import {useState} from 'react';


const DayLink = (day) => {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen)
    }
    return (
        <div className={classes.OneDayBlock}>
        <div className={classes.OneDay}>
            <div className={classes.InsideOneDay} onClick={handleClick}>
                <p className={classes.WeekText}>{day.day}</p>
                
                <div className={isOpen ? classes.OneDaySvgActive  : classes.OneDaySvg}>
                <svg  width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.2122 11.9525C13.7785 11.3479 13.7475 10.3987 13.1429 9.83233L3.29059 0.602959C2.686 0.0365984 1.73676 0.0675888 1.1704 0.672177C0.604037 1.27677 0.635027 2.22601 1.23962 2.79237L9.99726 10.9963L1.79337 19.7539C1.22701 20.3585 1.258 21.3077 1.86259 21.8741C2.46718 22.4404 3.41642 22.4095 3.98278 21.8049L13.2122 11.9525ZM9.93151 12.4992L12.1664 12.4262L12.0685 9.42784L9.83362 9.5008L9.93151 12.4992Z" fill="#398D47"/>
                </svg>
                </div>
            </div>
            
            
        </div>
        <div className={isOpen ? classes.DaysDiet : classes.DaysDietNone}> <p>Work!</p> </div>
        </div>
    );
}

export default DayLink;

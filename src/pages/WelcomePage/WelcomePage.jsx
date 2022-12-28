import React from 'react';
import GreenButton from '../../UI/GreenButton/GreenButton';
import Header from '../../UI/Header/Header';
import classes from './WelcomePage.module.css'

const WelcomePage = () => {
    return (
        <>
            <Header/>
            <div className={classes.ContainerButtonsContainer}>
            <div className={classes.ContainerButtons}>
            <GreenButton to='diet/thin/1' name='Диета для похудения'/>
            <GreenButton to='diet/thin/1' name='Для набора массы'/>
            <GreenButton to='diet/thin/1' name='Повседневная диета'/>
            </div></div>
        </>
    );
}

export default WelcomePage;

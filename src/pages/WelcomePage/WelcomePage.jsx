import {React, useState, useEffect} from 'react';
import GreenButton from '../../UI/GreenButton/GreenButton';
import Header from '../../UI/Header/Header';
import classes from './WelcomePage.module.css'

const WelcomePage = () => {
    const menu = [
        {to: 'survey/1', name :'Диета для похудения', value: 1},
        {to: 'survey/1', name :'Повседневная диета', value: 2},
        {to: 'survey/1', name :'Для набора массы', value: 3},
    ]
    
    return (
        <>
            <Header/>
            <div className={classes.ContainerButtonsContainer}>
            <div className={classes.ContainerButtons}>
               { menu.map((m) => {
                    function Save(){
                       localStorage.setItem('menu', JSON.stringify(m.value));
                    }
                    return(
                        <div key={m.value} onClick={Save}>
                        <GreenButton to={m.to} name={m.name} />
                        </div>
                    )
                })}
            
            </div>
            </div>
        </>
    );
}

export default WelcomePage;

import React, { useEffect,useState } from 'react';
import Header from '../../UI/Header/Header';
import classes from './MenuPage.module.css';
import DayLink from '../../UI/DayLink/DayLink';




const MenuPage = () => {
    const WeekDays = [{"day": "Понедельник", "to": "/menupage/monday"},
    {"day": "Вторник", "to": "/menupage/tuesday"},
    {"day": "Среда", "to": "/menupage/wednesday"},
    {"day": "Четверг", "to": "/menupage/thursday"},
    {"day": "Пятница", "to": "/menupage/friday"},
    {"day": "Суббота", "to": "/menupage/saturday"},
    {"day": "Воскресенье", "to": "/menupage/sunday"}
 ];
    
    const [Diet, setDiet] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/diets')
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                setDiet(data)});
    }, []);

    return (
        <div>
            <Header/>
            <p className={classes.Title}>Недельное меню*</p>
            <main className={classes.Main}>
            {WeekDays.map((weekDay) => (
                
                <DayLink day={weekDay.day} to={weekDay.to}/> 
                ))}
            </main>
            
        </div>
    );
}

export default MenuPage;

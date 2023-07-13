import {React, useState} from 'react';
import Header from '../../../UI/Header/Header';

import classes from './DietThin3.module.css';
import { Link } from 'react-router-dom';
import ChooseInput from '../../../UI/ChooseInput/ChooseInput';
import NavigationCircles from '../../../UI/NavigationСircles/NavigationCircles';
import backendPost from '../../../server';


const DietThin3 = () => {
    
    const vegetables = [
        'Картошка',
        'Капуста',
        'Горох',
        'Свекла',
        'Помидор',
        'Огурцы',
        'Болгарский перец',
        'Лук репчатый',
    ]
    const fruits = [
        'Банан',
        'Яблоко',
        'Апельсин',
        'Груша',
        'Слива',
        'Вишня',
        'Клубника',
        'Малина',
    ]
    const cereals = [
        'Гречка',
        'Рис',
        'Манная крупа',
        'Овсяная крупа',
        'Перловая крупа',
        'Пшенная крупа',
    ]
    const meat = [
        'Курица',
        'Индейка',
        'Свинина',
        'Говядина',
        "Яйца",
    ]
    const [selectedVegetables, setSelectedVegetables] = useState([]);  
    const [selectedFruits, setSelectedFruits] = useState([]); 
    const [selectedCereals, setSelectedCereals] = useState([]); 
    const [selectedMeat, setSelectedMeat] = useState([]); 
    function SaveResults() {
        localStorage.setItem('vegetables', JSON.stringify(selectedVegetables));
        localStorage.setItem('fruits', JSON.stringify(selectedFruits));
        localStorage.setItem('cereals', JSON.stringify(selectedCereals));
        localStorage.setItem('meat', JSON.stringify(selectedMeat));
        backendPost();
    }     
    
    const flag = (selectedVegetables.length < 2 || selectedFruits.length < 2 || selectedCereals.length < 2 )
    return (
        <div>
            <Header/>
            <div className={classes.DietForm}>
            <ChooseInput data={vegetables} value={selectedVegetables} setValue={setSelectedVegetables} title='Овощи' titleError='Выберите минимум 2 овоща' minLength={2}/>
            <ChooseInput data={fruits} value={selectedFruits} setValue={setSelectedFruits} title='Фрукты' titleError='Выберите минимум 2 фрукта' minLength={2}/>
            <ChooseInput data={cereals} value={selectedCereals} setValue={setSelectedCereals} title='Крупы' titleError='Выберите минимум 2 крупы' minLength={2}/>
            <ChooseInput data={meat} value={selectedMeat} setValue={setSelectedMeat} title='Мясо' titleError='Выберите мясо' minLength={0}/>
            {(flag) ? <button disabled={flag}  className={classes.DietButton}>
                <p className={classes.DietButtonText}>Дальше</p>
            </button> 
            : <Link to='/survey/3' > <button onClick={SaveResults} className={classes.DietButton}>
                <p className={classes.DietButtonText}>Дальше</p>
            </button></Link>}
            </div>
            <NavigationCircles degree={4}/>
        </div>
    );
}

export default DietThin3;

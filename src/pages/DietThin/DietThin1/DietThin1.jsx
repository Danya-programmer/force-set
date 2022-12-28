import {React, useState} from 'react';
import Header from '../../../UI/Header/Header';
import classes from './DietThin1.module.css';
import { Link } from 'react-router-dom';
import useInput from '../../../hooks/useInput';


const DietThin = () => {
    const SaveResults = () => {
        localStorage.setItem('height', JSON.stringify(height.value));
        localStorage.setItem('weight', JSON.stringify(weight.value));
        localStorage.setItem('age', JSON.stringify(age.value));
        localStorage.setItem('gender', JSON.stringify(genderChoose));
    }

    const [genderChoose, setGenderChoose] = useState('');

    const weight = useInput('', {isEmpty: true, maxLength: 5, typeInput: true, })
    const height = useInput('', {isEmpty: true, maxLength: 3, typeInput: true, })
    const age = useInput('', {isEmpty: true, maxLength: 3, typeInput: true, })

    
    return (
        <div>
            <Header/>
            <div className={classes.DietSurvey}>
            <section className={classes.DietForm}>
            <div className={classes.OneField}>
            <p className={classes.TitleInput}>Рост</p>
            {(!height.inputValid && height.isDirty) ?
            <input className={classes.InputDietInvalid} onChange={e => height.onChange(e)} onBlur={e => height.onBlur(e)} value={height.value} maxLength='5' name='height' type='text' placeholder='Введите рост в см'/>
            
        : <input className={classes.InputDiet} onChange={e => height.onChange(e)} onBlur={e => height.onBlur(e)} value={height.value} maxLength='3' name='height' type='text' placeholder='Введите рост в см'/>}

        {(!height.inputValid && height.isDirty) && <div className={classes.FieldErrorText}>{height.textError}</div>} 
            </div>
            <div className={classes.OneField}>
            <p className={classes.TitleInput}>Вес</p>
            {(!weight.inputValid && weight.isDirty) ?
            <input className={classes.InputDietInvalid} onChange={e => weight.onChange(e)} onBlur={e => weight.onBlur(e)} value={weight.value} maxLength='5' name='height' type='text' placeholder='Введите вес в кг'/>
            
        : <input className={classes.InputDiet} onChange={e => weight.onChange(e)} onBlur={e => weight.onBlur(e)} value={weight.value} maxLength='3' name='height' type='text' placeholder='Введите вес в кг'/>}

        {(!weight.inputValid && weight.isDirty) && <div className={classes.FieldErrorText}>{weight.textError}</div>} 
            </div>
            <div className={classes.OneField}>
            <p className={classes.TitleInput}>Возраст</p>
            {(!age.inputValid && age.isDirty) ?
            <input className={classes.InputDietInvalid} onChange={e => age.onChange(e)} onBlur={e => age.onBlur(e)} value={age.value} maxLength='5' name='height' type='text' placeholder='Введите возраст'/>
            
        : <input className={classes.InputDiet} onChange={e => age.onChange(e)} onBlur={e => age.onBlur(e)} value={age.value} maxLength='3' name='height' type='text' placeholder='Введите возраст'/>}

        {(!age.inputValid && age.isDirty) && <div className={classes.FieldErrorText}>{age.textError}</div>} 
            </div>
            <fieldset className={classes.InputRadio}><div className={classes.OneRadio}>
            <input type='radio' value='men' onChange={e => setGenderChoose(e.target.value)} name='gender'></input><label className={classes.RadioText}>Мужской</label></div><div className={classes.OneRadio}>
            <input type='radio' value='women' onChange={e => setGenderChoose(e.target.value)} name='gender'></input><label className={classes.RadioText}>Женский</label></div>
            </fieldset>
            
            {(!height.inputValid || !weight.inputValid || !age.inputValid || !genderChoose) ? <button disabled={!height.inputValid || !weight.inputValid || !age.inputValid || !genderChoose}  className={classes.DietButton}>
                <p className={classes.DietButtonText}>Дальше</p>
            </button> 
            : <Link to='/diet/thin/2' ><button onClick={SaveResults} className={classes.DietButton}>
                <p className={classes.DietButtonText}>Дальше</p>
            </button></Link>}
            </section>
            </div>
        </div>
    );
    
}

export default DietThin;

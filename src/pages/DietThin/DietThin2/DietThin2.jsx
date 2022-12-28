import React from 'react';
import useInput from '../../../hooks/useInput';
import Header from '../../../UI/Header/Header';
import classes from './DietThin2.module.css'
const DietThin2 = () => {
    const steps = useInput('', {isEmpty: true, maxLength: 6, typeInput: true, })
    const alertSelect = () => {
        alert('alksdlfjas;fd')
    }
    return (
        <>
            <Header/>
            <section className={classes.DietForm}>
            <div className={classes.OneField}>
            <p className={classes.TitleInput}>Шаги</p>
            {(!steps.inputValid && steps.isDirty) ?
            <input className={classes.InputDietInvalid} onChange={e => steps.onChange(e)} onBlur={e => steps.onBlur(e)} value={steps.value} maxLength='6' name='steps' type='text' placeholder='Введите количество шагов в день '/>
            
            : <input className={classes.InputDiet} onChange={e => steps.onChange(e)} onBlur={e => steps.onBlur(e)} value={steps.value} maxLength='6' name='steps' type='text' placeholder='Введите количество шагов в день'/>}

        {(!steps.inputValid && steps.isDirty) && <div className={classes.FieldErrorText}>{steps.textError}</div>} 
            </div>
            <div className={classes.OneSelect}>
            <div className={classes.OneField}>
            <p className={classes.TitleInput}>Тренировки</p>
            
            
             <input className={classes.InputDiet} onClick={alertSelect} maxLength='6' name='steps' type='text' placeholder='Введите количество шагов в день'/>

        
            </div>

            <select >
            <option value="1">Apple</option>
            <option value="2">Banana</option>
            <option value="3">Cranbeergwergwerwgrrry</option>
            </select>
            </div>
            </section>
        </>
    );
}

export default DietThin2;

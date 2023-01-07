import {React, useState} from 'react';
import useInput from '../../../hooks/useInput';
import Header from '../../../UI/Header/Header';
import ModelSelect from '../../../UI/ModalSelect/ModelSelect';
import classes from './DietThin2.module.css'
import { Link } from 'react-router-dom';
import NavigationCircles from '../../../UI/NavigationСircles/NavigationCircles';

const DietThin2 = () => {
    const steps = useInput('', {isEmpty: true, maxLength: 6, typeInput: true, })
    const [modalSelect, setModalSelect] = useState(false);
    const [placeholderText, setPlaceholderText] = useState('Выберите количество тренировок в неделю');
    const [ratio, setRatio] = useState('');

    const SaveResults = () => {
        localStorage.setItem('ratio', JSON.stringify(ratio));
        localStorage.setItem('steps', JSON.stringify(steps.value));
        
    }

    const physicsActive = [
    {ratio : 1.2, text : 'Не тренируюсь'},
    {ratio : 1.375, text : 'Тренируюсь 1-2 раза в неделю'},
    {ratio : 1.46, text : 'Тренируюсь 3-4 раза в неделю'},
    {ratio : 1.64, text : 'Тренируюсь 5-6 раз в неделю'},
    {ratio : 1.725, text : 'Тренируюсь каждый день'},
    {ratio : 1.9, text : 'Тренируюсь 2 раза в день'},
    ]
    return (
        <>
            <Header/>
            <section className={classes.DietForm}>
            <div className={classes.OneField}>
            <p className={classes.TitleInput}>Шаги</p>
            {(!steps.inputValid && steps.isDirty) ?
            <input className={classes.InputDietInvalid} onChange={e => steps.onChange(e)} onBlur={e => steps.onBlur(e)} value={steps.value} maxLength='5' name='steps' type='text' placeholder='Введите количество шагов в день '/>
            
            : <input className={classes.InputDiet} onChange={e => steps.onChange(e)} onBlur={e => steps.onBlur(e)} value={steps.value} maxLength='5' name='steps' type='text' placeholder='Введите количество шагов в день'/>}

        {(!steps.inputValid && steps.isDirty) && <div className={classes.FieldErrorText}>{steps.textError}</div>} 
            </div>
            <div className={classes.OneSelect}>
                <div className={classes.OneField}>
                    <p className={classes.TitleInput}>Тренировки</p>
                    {(placeholderText === 'Выберите количество тренировок в неделю') ? 
                    <input className={classes.InputDiet} onClick={() => setModalSelect(true)} maxLength='0' name='steps' type='text' placeholder={placeholderText}/>
                    : <input className={classes.InputDietActive} onClick={() => setModalSelect(true)} maxLength='0' name='steps' type='text' placeholder={placeholderText}/>
                }
            
                </div>
                <ModelSelect visible={modalSelect} setVisible={setModalSelect} data={physicsActive} setText={setPlaceholderText} setValue={setRatio} typeInput='radio'/>
            
            </div>
            {(!steps.inputValid || ratio==='') ? <button disabled={!steps.inputValid || ratio===''}  className={classes.DietButton}>
                <p className={classes.DietButtonText}>Дальше</p>
            </button> 
            : <Link to='/survey/3' > <button onClick={SaveResults} className={classes.DietButton}>
                <p className={classes.DietButtonText}>Дальше</p>
            </button></Link>}
            </section>
            <NavigationCircles degree={3}/>
        </>
    );
}

export default DietThin2;

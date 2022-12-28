import {React, useState, useEffect} from 'react';
import classes from './CustomField.module.css';
const CustomField = (props) => {
    const [field, setField] = useState();
    const [fieldDirty, setFieldDirty] = useState(false);
    const [fieldError, setFieldError] = useState('Поле не может быть пустым');
    const [formValid, setFormValid] = useState(false);
    
    const litleTitle = props.title.toLowerCase()
    useEffect(() => {
        if (fieldError) {
            setFormValid(false)
            
        } else {
            setFormValid(true)
        }
        
    }, [fieldError]);
    

    function fieldHandle (e) {
        setField(e.target.value);
        const reg = new RegExp('^[0-9]+$');
        if (e.target.value.length === 0){
            setFieldError('Поле не может быть пустым')
        } else{
            if (!reg.test(e.target.value)) {
                setFieldError(`Некорректный ${litleTitle}`)
            } else {
                setFieldError('')
            }
        }
        
    }
    function blurHandle (e) {
        switch(e.target.name) {
            case 'field':
                setFieldDirty(true)
                break
        }
    }
    const ControllerField = {field, formValid}
    
    return (
        <div className={classes.OneField}>
            <p className={classes.TitleInput}>{props.title}</p>
            
            {(fieldDirty && fieldError)  ? 
            <input onChange={e => fieldHandle(e)} onBlur={e => blurHandle(e)} 
            name='field' type="text" maxLength='5' className={classes.InputDietInvalid}  placeholder={`Введите ваш ${litleTitle} ${props.measurements}`} /> 
            
            : <input onChange={e => fieldHandle(e)} onBlur={e => blurHandle(e)} 
            name='field' type="text" maxLength='5' className={classes.InputDiet}  placeholder={`Введите ваш ${litleTitle} ${props.measurements}`} /> }

            { (fieldDirty && fieldError) && <div className={classes.FieldErrorText}>{fieldError}</div>}

            </div>
    );
    

}


export default CustomField;

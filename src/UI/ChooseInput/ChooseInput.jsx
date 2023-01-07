import {React, useState} from 'react';
import ModelChoose from '../ModalChoose/ModelChoose';
import classes from './ChooseInput.module.css'
const ChooseInput = ({data, value, setValue, title, titleError, minLength}) => {
    const [clickInput, setClickInput] = useState(false);
    const [modalSelect, setModalSelect] = useState(false);
    const text = title.toLowerCase()
    function SelectInput() {
        setModalSelect(true)
        setClickInput(true)
    }
    return (
        <div className={classes.OneSelect}>
                <div className={classes.OneField} >
                    <p className={classes.TitleInput}>{title}</p>
                    {(value.length < minLength && clickInput) ? 
                    <div>
                        <input className={classes.InputDietInvalid} onClick={SelectInput} maxLength='0'  type='text' placeholder={`Выберите ${text}`}/>
                        {(value.length ===0) ? <div className={classes.FieldErrorText}>{`Выберите ${text}`}</div> 
                        :   <div className={classes.FieldErrorText}>{titleError}</div> }
                        </div>
                    : (value.length > minLength-1 && clickInput) ? 
                        <input className={classes.InputDietActive} onClick={SelectInput} maxLength='0'  type='text' placeholder='Выбрано'/>
                    : <input className={classes.InputDiet} onClick={SelectInput} maxLength='0'  type='text' placeholder={`Выберите ${text}`}/>
                }
            
                </div>
                <ModelChoose visible={modalSelect} setVisible={setModalSelect} data={data}  setValue={setValue}  value={value}/>
            </div>
    )
}

export default ChooseInput;

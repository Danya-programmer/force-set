import {React} from 'react';
import classes from './ModelChoose.module.css'

const ModelChoose = ({data, visible, setVisible, setValue, nameInput, value}) => {
    
    const rootClasses = [classes.ModelSelect]
    if (visible) {
        rootClasses.push(classes.Active);
    }
    const inputCheckbox = (e) => {
        
        
        if (e.target.checked) {
            setValue([...value, e.target.value ])
            
        } else {
            setValue(value.filter(item => item !== e.target.value))
        }
    }
    
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.ModelSelectContent} onClick={(e) =>  e.stopPropagation()}>
            <fieldset className={classes.InputRadio} >
                {data.map((unit) => {
                    
                    return (
                        <div className={classes.OneRadio} key={unit}>
                        <input type='checkbox' value={unit} name={nameInput} className={classes.InputRadioInput} onChange={e => inputCheckbox(e)}/>
                        <label className={classes.RadioText} >{unit}</label>
                        </div>
                    );  })}
            </fieldset>
            </div>
        </div>
    );
}

export default ModelChoose;

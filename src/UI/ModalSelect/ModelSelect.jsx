import React from 'react';
import classes from './ModelSelect.module.css'
const ModelSelect = ({data, visible, setVisible, setText, setValue, typeInput}) => {
    const rootClasses = [classes.ModelSelect]
    if (visible) {
        rootClasses.push(classes.Active);
    }
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.ModelSelectContent} >
            <fieldset className={classes.InputRadio} >
                {data.map((level) => {
                    
                    function ratioChoose(level) {
                        setValue(level[0])
                        setText(level[1])
                    }
                    return (
                        <div className={classes.OneRadio} key={level.ratio}>
                        <input type={typeInput} value={level.ratio} name='physicalActive' className={classes.InputRadioInput} onClick={e => ratioChoose([e.target.value, level.text])}/>
                        <label className={classes.RadioText} >{level.text}</label>
                        </div>
                    );  })}
                
            </fieldset>
            </div>
        </div>
    );
}

export default ModelSelect;

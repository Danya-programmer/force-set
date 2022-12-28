import {React, useState, useEffect} from 'react';

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [inputValid, setInputValid] = useState(false);
    const [notCorrectValue, setNotCorrectValue] = useState(true)
    const [textError, setTextError] = useState('Поле не может быть пустым')
    const reg = new RegExp('^[0-9]+$');
    
    useEffect(() => {
        
        for (const validation in validations) {
            switch (validation) {
                case 'isEmpty' :
                    value ? setEmpty(false) : setEmpty(true)
                    isEmpty ? setTextError('Поле не может быть пустым') : setTextError('Поле не может быть пустым')
                    break;
                case 'typeInput' :
                    
                    if (!reg.test(value) && value ){
                        setTextError('Некорректные данные')
                        setNotCorrectValue(true)
                    } else{
                        setNotCorrectValue(false)
                    }
                        break;

                case 'minLength' :
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    minLengthError ? setTextError(`Поле должно содержать больше ${validation.minLength} символов`) : setTextError('')       
                    break;

                case 'maxLength' :
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
                    break;

        }}
        
    }, [value]);
    useEffect(() => {
        if ( isEmpty || minLengthError || maxLengthError || notCorrectValue){
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, maxLengthError, minLengthError, notCorrectValue])
    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        inputValid,
        textError,
    }
}

export default useValidation;

import React from 'react'

const Field = ({ val, setVal, type, name, placeholder, errors, setErrors, half = false }) => {
    return (
        <div className={`form__group field${half ? ' half' : ''}`}>
            <input 
                value={val} 
                onChange={e => setVal(e.target.value)} 
                type={type} 
                className={`form__field${errors[name] ? ' error' : ''}`} 
                onFocus={() => setErrors(el => {
                    const newErrors = errors
                    newErrors[name] = false
                    return newErrors
                })} 
                placeholder={placeholder} 
                name={name} 
                required
            />
            <label htmlFor={name} className="form__label">{placeholder}</label>
        </div>
    )
}

export default Field
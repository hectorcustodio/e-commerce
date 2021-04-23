import React from 'react'
import './form-input.style.scss' 

interface FormInputInterface extends Record<string, any> {
    handleChange: (event: any) => void
    label: string
}

const FormInput = ({ handleChange, label, ...otherProps }: FormInputInterface) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {
            label ?
                (<label className={`form-input-label ${otherProps.value.length ? 'shrink' : ''}`}>
                    {label}
                </label>)
                : null
        }
    </div>
)

export default FormInput
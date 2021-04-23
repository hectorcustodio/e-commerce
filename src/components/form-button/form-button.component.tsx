import React from 'react'
import './form-button.style.scss'

interface FormButtonInterface extends Record<any, any> {
    children: React.ReactNode,
    isGoogleSignin?: boolean
}

const FormButton = ({ children, isGoogleSignin, inverted, ...otherProps }: FormButtonInterface) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignin ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default FormButton
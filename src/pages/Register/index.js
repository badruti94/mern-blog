import React from 'react'
import { RegisterBg } from '../../assets'
import './register.scss'

const Register = () => {
    return (
        <div className="main-page">
            <div className="left" >
                <img src={RegisterBg} className="bg-image" alt="alt" />
            </div>
            <div className="right" >Form Register</div>
        </div>
    )
}

export default Register

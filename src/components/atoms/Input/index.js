import React from 'react'
import "./input.scss"

const Input = ({label, ...rest}) => {
    return (
        <div className="input-wrappper" >
            <p className="label" >{label}</p>
            <input className="input" type="text" {...rest} />
        </div>
    )
}

export default Input
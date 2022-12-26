import React from 'react'
// import {ButtonStyles} from './ButtonStyles'
import {DesignStyles} from './ButtonStyles'

function Button({color, text, textcolor}) {
  const D = DesignStyles({color:color, textcolor: textcolor})
    return (
        <button type="button" 
            className={`${D.design}`}
        >
        {text}
        </button>
    )
}

export default Button
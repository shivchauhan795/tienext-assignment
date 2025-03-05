import React from 'react'

const Button = ({ text, startIcon }) => {
    return (
        <button className='flex gap-2 justify-center items-center pr-2 pl-1 cursor-pointer'>
            {startIcon}
            {text}
        </button>
    )
}

export default Button

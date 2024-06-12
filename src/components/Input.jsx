import React from 'react';

const Input = ({type, placeholder}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="w-full border-none focus:ring-0 bg-transparent"
          />
    )
}

export default Input;
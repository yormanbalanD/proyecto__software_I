import React, { useId, useState } from 'react'
import { LuEye, LuEyeOff } from "react-icons/lu"

const Input = ({ label, icon, type, disabled, className, register, name}) =>{
    const [visible, setVisible] = useState(false)
    const [id, setId] = useState(useId())

    if (type == 'password') {
        return (
            <div className={disabled ? `flex items-center border-b-2 border-black py-1 gap-2 opacity-65 cursor-not-allowed *:cursor-not-allowed ${className}` : `flex items-center border-b-2 border-black py-1 gap-2 ${className}`}>
                <label htmlFor={id}>{icon}</label>
                {visible && <input type='text' id={id} {...register} placeholder={label} className='w-full py-1 px-2 appearance-none border-0 outline-none focus:ring-0 duration-75' disabled={disabled} />}
                {!visible && <input type='password' id={id} {...register} placeholder={label} className='w-full py-1 px-2 appearance-none border-0 outline-none focus:ring-0 duration-75' disabled={disabled} />}
                {visible ? <LuEye onClick={() => setVisible(false)} className='text-3xl text-black cursor-pointer' /> : <LuEyeOff onClick={() => setVisible(true)} className='text-3xl text-black cursor-pointer' />}
            </div>
        )
    } else {
        return (
            <div className={disabled ? `flex items-center border-b-2 border-black py-1 gap-2 opacity-65 cursor-not-allowed *:cursor-not-allowed ${className}` : `flex items-center border-b-2 border-black py-1 gap-2 ${className}`}>
                <label htmlFor={id}>{icon}</label>
                <input id={id} type={type} placeholder={label} {...register} className='w-full py-1 px-2 appearance-none border-0 outline-none focus:ring-0 duration-75' disabled={disabled} />    
            </div>
        )
    }
}

export default Input;
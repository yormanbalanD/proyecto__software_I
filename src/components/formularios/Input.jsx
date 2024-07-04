import React, { useId, useState } from 'react'
import { LuEye, LuEyeOff } from "react-icons/lu"

export default function Input({ label, icon, type, disabled }) {
    const [visible, setVisible] = useState(false)
    const [value, setValue] = useState('')
    const [id, setId] = useState(useId())

    if (type == 'password') {
        return (
            <div className={disabled ? 'flex items-center border-b-2 border-black py-1 gap-2 opacity-65 cursor-not-allowed *:cursor-not-allowed': 'flex items-center border-b-2 border-black py-1 gap-2'}>
                <label htmlFor={id}>{icon}</label>
                {visible && <input type='text' id={id} onChange={(e) => setValue(e.target.value)} value={value} placeholder={label} className='w-full py-1 px-2 appearance-none border-0 outline-none focus:ring-0 duration-75' disabled={disabled} />}
                {!visible && <input type='password' id={id} onChange={(e) => setValue(e.target.value)} value={value} placeholder={label} className='w-full py-1 px-2 appearance-none border-0 outline-none focus:ring-0 duration-75' disabled={disabled} />}
                {visible ? <LuEye onClick={() => setVisible(false)} className='text-3xl text-black cursor-pointer' /> : <LuEyeOff onClick={() => setVisible(true)} className='text-3xl text-black cursor-pointer' />}
            </div>
        )
    } else {
        return (
            <div className={disabled ? 'flex items-center border-b-2 border-black py-1 gap-2 opacity-65 cursor-not-allowed *:cursor-not-allowed': 'flex items-center border-b-2 border-black py-1 gap-2'}>
                <label htmlFor={id}>{icon}</label>
                <input id={id} type={type} placeholder={label} onChange={() => setValue(value)} value={value} className='w-full py-1 px-2 appearance-none border-0 outline-none focus:ring-0 duration-75' disabled={disabled} />
            </div>
        )
    }
}
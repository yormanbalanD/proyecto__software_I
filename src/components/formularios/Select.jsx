import React from 'react'
import { useId } from 'react'
import { useState } from 'react'

import { IoIosArrowDown } from "react-icons/io"

export default function Select({ children, className }) {
    const [focus, setFocus] = useState(false)
    const [value, setValue] = useState(children[0].props.value ?? "")

    const onBlur = (e) => {
        if(e.nativeEvent.explicitOriginalTarget.tagName == "LI") {
            return
        }

        setFocus(false)
    }

    const onFocus = () => {
        setFocus(true)
    }

    return (
        <div className='relative'>
            <button className={`${className} flex items-center justify-between`} onClick={onFocus} onFocus={onFocus} onBlur={onBlur}>{children.find((a) => a.props.value == value).props.children} <IoIosArrowDown className='text-xl' /></button>
            <ul className={`${focus ? 'block' : 'hidden'} absolute bg-white top-[105%] border rounded-md z-50 overflow-hidden shadow-md w-full`}>
                {children.map((child, index) => (
                    <li data-select="true" key={index} onClick={() => { setValue(child.props.value); setFocus(false) }} className='px-4 py-3 hover:bg-[#e9e9e96d]'>{child.props.children}</li>
                ))}
            </ul>
        </div>
    )
}

import React from 'react'
import { useId } from 'react'
import { useState } from 'react'

import { IoIosArrowDown } from "react-icons/io"

export default function Select({ children, className, register }) {
    // const [focus, setFocus] = useState(false)
    // const [valor, setValor] = useState(children[0].props.value ?? "")
    const idSelect = useId()

    // const onBlur = (e) => {
    //     if (e.nativeEvent.explicitOriginalTarget.tagName == "LI") {
    //         return
    //     }

    //     setFocus(false)
    // }

    // const onFocus = () => {
    //     setFocus(true)
    // }

    // const cambiarValor = (value) => {
    //     const index = children.findIndex((a) => a.props.value == value)
    //     const select = document.getElementById(idSelect)
    //     select.click()
    //     select.value = value

    //     register.onChange(new Event('change', { bubbles: true }))
    //     // console.log(select.children[index].click())
    //     setValor(value)
    // }


    return (
        <div className='relative'>
            {/* <button className={`${className} flex items-center justify-between`} onClick={onFocus} onFocus={onFocus} onBlur={onBlur}>{children.find((a) => a.props.value == valor).props.children} <IoIosArrowDown className='text-xl' /></button>
            <ul className={`${focus ? 'block' : 'hidden'} absolute bg-white top-[105%] border rounded-md z-50 overflow-hidden shadow-md w-full`}>
                {children.map((child, index) => (
                    <li data-select="true" key={index} onClick={() => { cambiarValor(child.props.value); setFocus(false) }} className='px-4 py-3 hover:bg-[#e9e9e96d]'>{child.props.children}</li>
                ))}
            </ul> */}
            <select className={`${className}`} {...register} id={idSelect}>
                {children}
            </select>
        </div>
    )
}

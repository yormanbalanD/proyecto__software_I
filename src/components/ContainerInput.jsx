import React from "react";
import Input from "./Input";

const ContainerInput = ({svg, Input, extraElement, className}) => {
    return (
        <label className={`flex items-center gap-2 m-2 rounded border-b border-gray-400 ${className}`}>
          {svg}
          {Input}
          {extraElement}
        </label>
    )
}

export default ContainerInput;
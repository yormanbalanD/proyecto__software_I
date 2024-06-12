import React from "react";
import Input from "./Input";
import ContainerInput from "./ContainerInput";

const UbicacionForm = () => {

    const options = [
        { value: 'opcion1', label: 'opcion 1' },
        { value: 'opcion2', label: 'opcion 2' },
        { value: 'opcion3', label: 'opcion 3' },
    ];

    return (
        <form className="grid grid-cols-2">
            <ContainerInput 
                svg={<svg className="w-6 h-6 text-gray-900 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd"/></svg>}
                Input={<Input type="text" placeholder="Nombre"></Input>} className="">
            </ContainerInput> 
            <ContainerInput
                svg={<svg className="w-6 h-6 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z" clipRule="evenodd"/></svg>}
                Input={<Input type="number" placeholder="Apellido"></Input>}>
            </ContainerInput>
            <ContainerInput 
                svg={<svg className="w-6 h-6 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M5.024 3.783A1 1 0 0 1 6 3h12a1 1 0 0 1 .976.783L20.802 12h-4.244a1.99 1.99 0 0 0-1.824 1.205 2.978 2.978 0 0 1-5.468 0A1.991 1.991 0 0 0 7.442 12H3.198l1.826-8.217ZM3 14v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-4.43a4.978 4.978 0 0 1-9.14 0H3Z" clipRule="evenodd"/></svg>}
                Input={<Input type="email" placeholder="Correo electrónico"></Input>}
                className="col-span-2">
            </ContainerInput>
            <ContainerInput
                svg={<svg className="w-6 h-6 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/></svg>}
                Input={<Input type="tel" placeholder="Teléfono"></Input>}
                className="col-span-2">
            </ContainerInput>   
            <div className="mb-3 relative border-b border-gray-400 col-span-2">            
                <select id="seleccion" name="seleccion" placeholder="Tipo de documento" className="block w-full p-3 pl-10 rounded-md bg-transparent border-none focus:ring-0 outline-none" required>
                    {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                    ))}
                </select>
            </div>
            <div className="mb-3 col-span-2 flex items-center">
                <input type="checkbox" id="acepto" name="acepto" className="block w-h-5 rounded-md focus:outline-none focus:ring-morado pr-2 checked:bg-morado" required/>
                <label htmlFor="acepto" className="inline-block ml-2 text-gray-700 text-left">Consineto que M&R Inversiones y Desarrollos, trate mis datos personales con la finalidad de remitirme comunicaciones comerciales por medios ordinarios y/o electrónicos sobre sus productos y/o servicios</label>
            </div>

            <button className="place-self-center bg-rosado active:shadow-none text-white px-4 py-2 rounded-lg shadow-xl hover:bg-morado mt-8">Enviar</button>
        </form>
    )
}

export default UbicacionForm;
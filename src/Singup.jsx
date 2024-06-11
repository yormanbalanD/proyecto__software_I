import fondo from "/public/Fondo_SignUp.jpg"

export default function Singup() {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm({ resolver: zodResolver(SchemaValidation) })


  // const onSubmit = (data) => { console.log(data) }

  const options = [
    { value: 'v', label: 'V' },
    { value: 'rifJ', label: 'RIF-J' },
    { value: 'rifV', label: 'RIF-V' },
  ];

  return (
    <div className="grid grid-cols-3 h-screen">
      {/* SIDE IMAGE */}
      <div className="col-span-1">
        <img src={fondo} alt="fondo de inicio" className="w-full h-full"/>
      </div>
      {/*  SIGN UP FORM */}
      <form className="col-span-2 px-8 py-4">
        {/* Title part */}
        <div className="flex justify-end pb-5">
          <div className="flex flex-col justify-around">
            <h1 className="text-right text-4xl">Registrarse</h1> {/* AQUI PODRIA AGREGAR LA VARIBLE DEL COLOR SELECIONADO */}
            <p className="text-right">Registrate para realizar la reserva de tu inmueble y disfrutar de tu área privada</p>
          </div>
          <img src="/public/LogoM&R.png" className="w-24 m-2"/>
        </div>
        {/* form */}
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-3 relative">
            <label htmlFor="nombre" className="flex text-gray-500 absolute p-3">
              <svg className="w-6 h-6 text-gray-900 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd"/></svg>                            
            </label>
            <input type="text" id="nombre" placeholder="Nombre:" name="nombre" className="block w-full p-3 pl-10 rounded-md focus:outline-none" required/>
          </div>
          <div className="mb-3 relative">
            <label htmlFor="apellido" className="flex text-gray-500 absolute p-3">
              <svg className="w-6 h-6 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M5 8a4 4 0 1 1 7.796 1.263l-2.533 2.534A4 4 0 0 1 5 8Zm4.06 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h2.172a2.999 2.999 0 0 1-.114-1.588l.674-3.372a3 3 0 0 1 .82-1.533L9.06 13Zm9.032-5a2.907 2.907 0 0 0-2.056.852L9.967 14.92a1 1 0 0 0-.273.51l-.675 3.373a1 1 0 0 0 1.177 1.177l3.372-.675a1 1 0 0 0 .511-.273l6.07-6.07a2.91 2.91 0 0 0-.944-4.742A2.907 2.907 0 0 0 18.092 8Z" clipRule="evenodd"/></svg>
            </label>
            <input type="text" id="apellido" placeholder="Apellido:" name="apellido" className="block w-full p-3 pl-10 rounded-md focus:outline-none" required/>
          </div>
          <div className="mb-3 relative">            
            <label htmlFor="tipoDocumento" className="flex text-gray-500 absolute p-3">
              <svg className="w-6 h-6 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M6 16v-3h.375a.626.626 0 0 1 .625.626v1.749a.626.626 0 0 1-.626.625H6Zm6-2.5a.5.5 0 1 1 1 0v2a.5.5 0 0 1-1 0v-2Z"/><path fillRule="evenodd" d="M11 7V2h7a2 2 0 0 1 2 2v5h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2H3a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h6a2 2 0 0 0 2-2Zm7.683 6.006 1.335-.024-.037-2-1.327.024a2.647 2.647 0 0 0-2.636 2.647v1.706a2.647 2.647 0 0 0 2.647 2.647H20v-2h-1.335a.647.647 0 0 1-.647-.647v-1.706a.647.647 0 0 1 .647-.647h.018ZM5 11a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1.376A2.626 2.626 0 0 0 9 15.375v-1.75A2.626 2.626 0 0 0 6.375 11H5Zm7.5 0a2.5 2.5 0 0 0-2.5 2.5v2a2.5 2.5 0 0 0 5 0v-2a2.5 2.5 0 0 0-2.5-2.5Z" clipRule="evenodd"/><path d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Z"/></svg>
            </label>
            <select id="seleccion" name="seleccion" placeholder="Tipo de documento:" className="block w-full p-3 pl-10 rounded-md focus:outline-none" required>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3 relative">            
            <label htmlFor="ci" className="flex text-gray-500 absolute p-3">
              <svg className="w-6 h-6 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z" clipRule="evenodd"/></svg>      
            </label>
            <input type="number" id="ci" placeholder="Número de documento:" name="ci" className="block w-full p-3 pl-10 rounded-md focus:outline-none" required/>
          </div>
          <div className="mb-3 relative">
            <label htmlFor="telefono" className="flex text-gray-500 absolute p-3">
              <svg className="w-6 h-6 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/></svg>
            </label>
            <input type="tel" id="telefono" name="telefono" placeholder="Teléfono:" className="block w-full p-3 pl-10 rounded-md focus:outline-none" required/>
          </div>
          <div className="mb-3 relative">            
            <label htmlFor="correo" className="flex text-gray-500 absolute p-3">
              <svg className="w-6 h-6 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M5.024 3.783A1 1 0 0 1 6 3h12a1 1 0 0 1 .976.783L20.802 12h-4.244a1.99 1.99 0 0 0-1.824 1.205 2.978 2.978 0 0 1-5.468 0A1.991 1.991 0 0 0 7.442 12H3.198l1.826-8.217ZM3 14v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-4.43a4.978 4.978 0 0 1-9.14 0H3Z" clipRule="evenodd"/></svg>
            </label>
            <input type="email" id="correo" placeholder="Correo electrónico:" name="correo" className="block w-full p-3 pl-10 rounded-md focus:outline-none" required/>
          </div>
          <div className="mb-3 relative">
            <label htmlFor="contrasena" className="flex text-gray-500 absolute p-3">
              <svg className="w-6 h-6 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" clipRule="evenodd"/></svg>
            </label>
            <input type="password" id="contrasena" placeholder="Contraseña:" name="contrasena" className="block w-full p-3 pl-10 rounded-md focus:outline-none" required/>
          </div>
          <div className="mb-3 relative">
            <label htmlFor="contrasena" className="flex text-gray-500 absolute p-3">
              <svg className="w-6 h-6 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M10 5a2 2 0 0 0-2 2v3h2.4A7.48 7.48 0 0 0 8 15.5a7.48 7.48 0 0 0 2.4 5.5H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1V7a4 4 0 1 1 8 0v1.15a7.446 7.446 0 0 0-1.943.685A.999.999 0 0 1 12 8.5V7a2 2 0 0 0-2-2Z" clipRule="evenodd"/><path fillRule="evenodd" d="M10 15.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Zm6.5-1.5a1 1 0 1 0-2 0v1.5a1 1 0 0 0 .293.707l1 1a1 1 0 0 0 1.414-1.414l-.707-.707V14Z" clipRule="evenodd"/></svg>
            </label>
            <input type="password" id="contrasena" placeholder="Confirmar contraseña:" name="contrasena" className="block w-full p-3 pl-10 rounded-md focus:outline-none" required/>
          </div>

          <div className="mb-3 col-span-2 flex items-center">
            <input type="checkbox" id="acepto" name="acepto" className="block w-h-5 rounded-md focus:outline-none focus:ring-blue-500 pr-2" required/>
            <label htmlFor="acepto" className="inline-block ml-2 text-gray-700 text-left">Consineto que M&R Inversiones y Desarrollos, trate mis datos personales con la finalidad de remitirme comunicaciones comerciales por medios ordinarios y/o electrónicos sobre sus productos y/o servicios</label>
          </div>
        </div>
        {/* Send form button */}
        <div className="flex justify-center p-2">
          <button type="submit" className="w-fit bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">Registrarse</button>
        </div>
      </form>
    </div>
  )

}

 
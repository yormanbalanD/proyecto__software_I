




export default function Tarjeta({ titulo, contenido, customclass, icon }) {
    return (
        <div className={`flex flex-col w-[250px] bg-white rounded-[20px] mt-36 h-[400px] bg-opacity-100 ${customclass}`}>
            <div className="bg-[#ce4a9e] p-4 rounded-t-[20px]">
                <h2 className='text-2xl font-bold mb-1 text-white text-center'>{titulo}</h2>
            </div>
            <div className="flex flex-col p-6 h-full">
                <p className='text-gray-500 mb-4 font-bold text-center text-[17px]'>
                    {contenido}
                </p>
                <div className="flex justify-center items-end flex-grow text-[#7c1c74]">
                    <div className="text-[50px]">{icon}</div>
                </div>
            </div>
        </div>

    );
}
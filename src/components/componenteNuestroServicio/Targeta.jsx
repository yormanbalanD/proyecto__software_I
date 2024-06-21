export default function Tarjeta({ titulo, contenido, icon }) {
    return (
        <div className={`flex flex-col w-[250px] bg-white rounded-xl relative overflow-hidden mx-auto bg-opacity-100 hover:shadow-[0px_0px_20px_3px_rgba(0,0,0,0.5)] hover:-translate-y-4 duration-100`}>
            <div className="bg-rosado py-4 px-8">
                <h2 className='text-xl font-bold mb-1 text-white text-center'>{titulo}</h2>
            </div>
            <div className="flex flex-col p-6 h-full">
                <p className='text-gray-500 mb-14 font-bold text-center text-[17px]'>
                    {contenido}
                </p>
                <div className="flex justify-center items-end flex-grow text-rosado">
                    <div className="text-6xl">{icon}</div>
                </div>
            </div>
        </div>
    );
}
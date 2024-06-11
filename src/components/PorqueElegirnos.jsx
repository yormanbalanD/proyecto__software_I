import React, { useState } from 'react';

export default function PorqueElegirnos() {

	const [hoveredIndex, setHoveredIndex] = useState(null);

	const handleMouseEnter = (index) => {
		setHoveredIndex(index);
	};

	const handleMouseLeave = () => {
		setHoveredIndex(null);
  };

	const elem = [
		{
			title: "Experiencia",
			description: <p>Tenemos m&aacute;s de 14 a&ntilde;os trabajando para ti.</p>,
			iconPath:
				"M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z",
		},
		{
			title: <h3>Atenci&oacute;n Personalizada</h3>,
			description: <p>Contamos con agentes inmobiliarios preparados</p>,
			iconPath:
				"M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V9a5 5 0 1 1 10 0v7.083A2.919 2.919 0 0 1 14.083 19H14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.732-1h.351a4.917 4.917 0 0 0 4.83-4H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.45 3.275a4 4 0 0 0-4.352.976 1 1 0 0 0 1.452 1.376 2.001 2.001 0 0 1 2.836-.067 1 1 0 1 0 1.386-1.442 4 4 0 0 0-1.321-.843Z",
		},
		{
			title: "Infraestructura",
			description: <p>Tu seguridad es nuestra prioridad</p>,
			iconPath:
				"M11.644 3.066a1 1 0 0 1 .712 0l7 2.666A1 1 0 0 1 20 6.68a17.694 17.694 0 0 1-2.023 7.98 17.406 17.406 0 0 1-5.402 6.158 1 1 0 0 1-1.15 0 17.405 17.405 0 0 1-5.403-6.157A17.695 17.695 0 0 1 4 6.68a1 1 0 0 1 .644-.949l7-2.666Zm4.014 7.187a1 1 0 0 0-1.316-1.506l-3.296 2.884-.839-.838a1 1 0 0 0-1.414 1.414l1.5 1.5a1 1 0 0 0 1.366.046l4-3.5Z",
		},
	];

	return (
		<div className="flex bg-gray-50 shadow-lg">
			<div className="w-full p-20 ">
				<h2
					style={{ color: "#641459" }}
					className="text-pink-700 font-bold text-5xl text-center pb-2">
					&iquest;Porqu&eacute; Elegirnos?
				</h2>
				<p className="mb-6 p-5 text-sm">
					Nos esforzamos por ser l&iacute;deres en el sector inmobiliario a
					nivel regional y expandir nuestros servicios a nivel nacional e
					internacional
				</p>
				<div className="flex flex-col space-y-7 pb-3 pl-10 pr-10">
					{elem.map((elem, index) => (
						<div
							key={index}
							className="group items-center rounded-lg shadow-lg">
							<div
								className="group flex text-black rounded-lg"
								style={{
									backgroundColor:
										hoveredIndex === index ? "#b2559b" : "#ffffff",
									color: hoveredIndex === index ? "#ffffff" : "#000000",
									transition: "background-color 0.3s, color 0.3s",
								}}
								onMouseEnter={() => handleMouseEnter(index)}
								onMouseLeave={handleMouseLeave}>
								<div className="p-5 ml-6">
									<svg
										style={{
											color: "#641459",
											transition: "background-color 0.3s, color 0.3s",
										}}
										className="w-[48px] h-[48px] text-pink-900 bg-pink-300 group-hover:bg-white rounded-full dark:text-white"
										aria-hidden="true"
										width="24"
										height="24"
										fill="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										viewBox="0 0 24 24">
										<path
											fillRule="evenodd"
											d={elem.iconPath}
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<div className="pt-5 pb-2">
									<h3 className="text-lg font-semibold text-pink-700 group-hover:text-white">
										{elem.title}
									</h3>
									<p className="text-sm">
										{elem.description}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="w-full">
				<img src="/Edificio.png" alt="Imagen de Edificios" />
			</div>
		</div>
	);
}

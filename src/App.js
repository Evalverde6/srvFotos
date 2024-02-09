import React, {useState} from 'react';
import Modal from './Componentes/Modal';
import styled from 'styled-components';

// Importar imágenes
import image1 from './images/20230207.jpg';
import image2 from './images/20230331.jpg';
import image3 from './images/20230524.jpg';
import image4 from './images/20230525.jpg';
import image5 from './images/20230705.jpg';
import image6 from './images/20230815.jpg';
import image7 from './images/20230828.jpg';
import image8 from './images/20231009.jpg';
import image9 from './images/20231107.jpg';
import image10 from './images/20240104.jpg';
import image11 from './images/20240111.jpg';
import image12 from './images/20240115.jpg';
import image13 from './images/20240116.jpg';
import image14 from './images/20240120.jpg';
import image15 from './images/20240123.jpg';


// Array de datos con información de cada modal
const data = [
    { fecha: '07 de Febrero de 2023', titulo: 'Nuestra primera visita a la Punta', mensaje: 'Mensaje del modal 1', imagen: image1 },
    { fecha: '31 de Marzo de 2023', titulo: '¡Abrazo!', mensaje: 'Mensaje del modal 2', imagen: image2 },
    { fecha: '24 de Mayo de 2023', titulo: 'Disfrutando un chifita', mensaje: 'Mensaje del modal 3', imagen: image3 },
    { fecha: '25 de Mayo de 2023', titulo: 'Partido de Basket', mensaje: 'Mensaje del modal 4', imagen: image4 },
    { fecha: '05 de Julio de 2023', titulo: 'Visita nocturna a la Punta', mensaje: 'Mensaje del modal 5', imagen: image5 },
	{ fecha: '15 de Agosto de 2023', titulo: 'Visita a la Biblioteca Nacional - Centro de Lima', mensaje: 'Mensaje del modal 5', imagen: image6 },
	{ fecha: '28 de Agosto de 2023', titulo: 'Paseo a la playa', mensaje: 'Mensaje del modal 5', imagen: image7 },
	{ fecha: '09 de Octubre de 2023', titulo: 'Celebrando 07 de Julio', mensaje: 'Mensaje del modal 5', imagen: image8 },
	{ fecha: '07 de Noviembre de 2023', titulo: 'Último paseo de noviembre', mensaje: 'Mensaje del modal 5', imagen: image9 },
	{ fecha: '04 de Enero de 2024', titulo: 'Paseo nocturno en el parque voces por el clima', mensaje: 'Mensaje del modal 5', imagen: image10 },
	{ fecha: '11 de Enero de 2024', titulo: 'Visita a la Biblioteca Nacioanl - San Borja', mensaje: 'Mensaje del modal 5', imagen: image11 },
	{ fecha: '15 de Enero de 2024', titulo: '¡Conociendo un lugar con vista al mar gratis! - Costa Verde', mensaje: 'Mensaje del modal 5', imagen: image12 },
	{ fecha: '16 de Enero de 2024', titulo: 'Visita a la Biblioteca Ricardo Palma - Miraflores', mensaje: 'Mensaje del modal 5', imagen: image13 },
	{ fecha: '20 de Enero de 2024', titulo: 'Disfrutando del Sábado en Chilca ', mensaje: 'Mensaje del modal 5', imagen: image14 },
	{ fecha: '23 de Enero de 2024', titulo: 'Recorriendo en Miraflores con nuestro nuevo amigo Manuel', mensaje: 'Mensaje del modal 5', imagen: image15 }
];

const App = () => {
	const [modals, setModals] = useState(new Array(data.length).fill(false));

	// Función para alternar la visibilidad de los modales
    const toggleModal = (index) => {
        const newModals = [...modals];
        newModals[index] = !newModals[index];
        setModals(newModals);
    };

	return (

		<div>
			<FondoDegradado>
				<ContenerdorHeader>
					<h1>Línea de tiempo con fotos - Cumpleaños #27</h1>
				</ContenerdorHeader>
				<ContenedorBotones>
					{data.map((item, index) => (
						<Boton key={index} onClick={() => toggleModal(index)}>
							{`${item.fecha}`}
						</Boton>
					))}
				</ContenedorBotones>
				
				{data.map((item, index) => (
					<Modal
						key= {index}
						estado = {modals[index]}
						cambiarEstado={() => toggleModal(index)}
						titulo={item.titulo}
						mensaje={item.mensaje}
						imagen={item.imagen}
					>
						<ImagenModal src={item.imagen} />
					</Modal>
				))}
				<p>"Trece años después, tú y yo"</p>
				<p>¿Te animas a ir por trece años más?</p>
			</FondoDegradado>
		</div>
	);
}
 
export default App;

//Estilos
const FondoDegradado = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, #7B68EE, #BA55D3);
    border-radius: 5px;
    z-index: -1; /* Para que esté detrás del contenido del modal */
	p {
		text-align: center;
		color: white;
	}
`;

const ContenerdorHeader = styled.div`
	display: block;
	widht: 100%;
	padding-top: 20px;
	h1,h2 {
		text-align: center;
		color: white;
	}

`;

const ContenedorBotones = styled.div`
	top: 70%;
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Boton = styled.button`
	display: block;
	padding: 10px 10px;
	border-radius: 50%;
	width: 80px;
	height: 80px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

	&:hover {
		background: #0066FF;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		margin-bottom: 20px;
	}

	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;
const ImagenModal = styled.img`
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    border-radius: 3px;
`;
import React, {useState} from 'react';
import Modal from './Componentes/Modal';
import styled from 'styled-components';

// Importar imágenes
import image1 from './images/20230207.jpg';
import image2 from './images/20230331.jpg';
import image3 from './images/20230524.jpg';
import image4 from './images/20231107.jpg';
import image5 from './images/20230705.jpg';
import image6 from './images/20230815.jpg';
import image7 from './images/20230828.jpg';
import image8 from './images/20231009.jpg';
import image9 from './images/20231107.jpg';

// Array de datos con información de cada modal
const data = [
    { fecha: '07 de Febrero', titulo: 'Nuestra primera visita a la Punta', mensaje: 'Mensaje del modal 1', imagen: image1 },
    { fecha: '31 de Marzo', titulo: 'Abrazo!', mensaje: 'Mensaje del modal 2', imagen: image2 },
    { fecha: '24 de Mayo', titulo: 'Disfrutando un chifita', mensaje: 'Mensaje del modal 3', imagen: image3 },
    { fecha: '25 de Mayo', titulo: 'Partido de Basket', mensaje: 'Mensaje del modal 4', imagen: image4 },
    { fecha: '05 de Julio', titulo: 'Visita nocturna a la Punta', mensaje: 'Mensaje del modal 5', imagen: image5 },
	{ fecha: '15 de Agosto', titulo: 'Visita a Biblioteca Nacional', mensaje: 'Mensaje del modal 5', imagen: image6 },
	{ fecha: '28 de Agosto', titulo: 'Paseo a la playa', mensaje: 'Mensaje del modal 5', imagen: image7 },
	{ fecha: '09 de Octubre', titulo: 'Celebrando 07 de Julio', mensaje: 'Mensaje del modal 5', imagen: image8 },
	{ fecha: '07 de Noviembre', titulo: 'Último paseo de noviembre', mensaje: 'Mensaje del modal 5', imagen: image9 }
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
					<h1>Linea de tiempo con fotos - Cumpleaños #26</h1>
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
`;

const ContenerdorHeader = styled.div`
	display: block;
	widht: 100%;
	padding-top: 20px;
	h1 {
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
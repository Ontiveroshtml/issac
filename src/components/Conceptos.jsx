import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import InfoModal from './InfoModal.jsx';
import Imagen from './../img/Modelo.png'

const ConceptsSection = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState('');

    const handleShowModal = (title, content) => {
        setModalTitle(title);
        setModalContent(content);
        setModalShow(true);
    };

    const handleCloseModal = () => {
        setModalShow(false);
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Conceptos</h2>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Administración</Card.Title>
                            <Button variant="primary" onClick={() => handleShowModal('Administración', (
                                <ul>
                                    <li><strong>Definición 1:</strong> La administración es el proceso de planificar, organizar, dirigir y controlar los recursos para alcanzar objetivos organizacionales.</li>
                                    <li><strong>Definición 2:</strong> La administración implica coordinar esfuerzos humanos y utilizar recursos materiales para alcanzar metas específicas.</li>
                                    <li><strong>Definición 3:</strong> Es el acto de manejar y supervisar una organización o una de sus partes.</li>
                                </ul>
                            ))}>
                                Ver información
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Administración de Proyectos</Card.Title>
                            <Button variant="primary" onClick={() => handleShowModal('Administración de Proyectos', (
                                <ul>
                                    <li><strong>Definición 2:</strong> Es el proceso de dirigir el trabajo de un equipo para lograr objetivos y cumplir con los criterios de éxito específicos del proyecto.</li>
                                    <li><strong>Definición 1:</strong> Es la aplicación de conocimientos, habilidades, herramientas y técnicas a las actividades de un proyecto para satisfacer sus requisitos.</li>
                                </ul>
                            ))}>
                                Ver información
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Negociación</Card.Title>
                            <Button variant="primary" onClick={() => handleShowModal('Negociación', (
                                <ul>
                                    <li><strong>Concepto 1:</strong> La negociación es el proceso mediante el cual dos o más partes con intereses comunes o conflictivos intentan alcanzar un acuerdo.</li>
                                    <li><strong>Concepto 2:</strong> Es una forma de resolver diferencias mediante el diálogo y el compromiso.</li>
                                </ul>
                            ))}>
                                Ver información
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Proceso Administrativo</Card.Title>
                            <Button variant="primary" onClick={() => handleShowModal('Proceso Administrativo', (
                                <ul>
                                    <p>El proceso administrativo es un conjunto de pasos o actividades que se llevan a cabo de manera sistemática para planificar, organizar, dirigir y controlar los recursos de una organización con el fin de alcanzar sus objetivos de manera eficiente y efectiva. Estos cuatro elementos son los pilares fundamentales del proceso administrativo:</p>
                                    <li><strong>Planificación:</strong> Consiste en establecer los objetivos y metas de la organización, así como en determinar las acciones necesarias para alcanzarlos. En esta etapa se definen estrategias, se elaboran planes y se asignan recursos.</li>
                                    <li><strong>Organización:</strong> Implica asignar tareas y responsabilidades, crear una estructura organizativa adecuada y establecer sistemas de autoridad y comunicación dentro de la organización. Esta etapa busca optimizar los recursos disponibles y garantizar una coordinación efectiva entre los miembros del equipo.</li>
                                    <li><strong>Dirección:</strong> Se refiere al proceso de influir y motivar a los empleados para que trabajen hacia el logro de los objetivos organizacionales. Incluye actividades como la toma de decisiones, la resolución de conflictos y el liderazgo efectivo.</li>
                                    <li><strong>Control:</strong> Consiste en monitorear y evaluar el desempeño de la organización para asegurar que se estén alcanzando los objetivos establecidos. En esta etapa se comparan los resultados obtenidos con los planes establecidos y se toman medidas correctivas si es necesario.</li>
                                </ul>
                            ))}>
                                Ver información
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Manipulación</Card.Title>
                            <Button variant="primary" onClick={() => handleShowModal('Manipulación', (
                                <ul>
                                    <li><strong>Concepto 1:</strong> La manipulación es la acción de controlar o influir en alguien de manera astuta o deshonesta.</li>
                                    <li><strong>Concepto 2:</strong> Es el manejo hábil y, a menudo, engañoso de una situación o persona.</li>
                                </ul>
                            ))}>
                                Ver información
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Eficacia</Card.Title>
                            <Button variant="primary" onClick={() => handleShowModal('Eficacia', (
                                <p>Se refiere a la capacidad de lograr los objetivos y metas establecidos dentro del proyecto en términos de calidad, tiempo y costo. En otras palabras, un proyecto se considera eficaz cuando se completa con éxito, cumpliendo con los requerimientos del cliente o las partes interesadas, dentro del presupuesto y el cronograma establecidos, y alcanzando los resultados deseados.</p>
                            ))}>
                                Ver información
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Eficiencia</Card.Title>
                            <Button variant="primary" onClick={() => handleShowModal('Eficiencia', (
                                <p>la eficiencia se refiere a la capacidad de llevar a cabo las actividades del proyecto de manera oportuna, utilizando los recursos asignados de manera óptima para lograr los objetivos del proyecto. Esto implica maximizar la productividad y minimizar el desperdicio de recursos como tiempo, dinero y esfuerzo.</p>
                            ))}>
                                Ver información
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Riesgos en Proyectos</Card.Title>
                            <Button variant="primary" onClick={() => handleShowModal('Riesgos en Proyectos', (
                                <>
                                    <h4>Riesgos</h4>
                                    <ul>
                                        <li><strong>Definición 1:</strong> Riesgo es la posibilidad de que ocurra un evento que tendrá un impacto en los objetivos.</li>
                                        <li><strong>Definición 2:</strong> Es la probabilidad de que una amenaza se materialice y afecte negativamente un proyecto.</li>
                                        <li><strong>Definición 3:</strong> Riesgo es cualquier incertidumbre que, si ocurre, afectará al menos uno de los objetivos del proyecto.</li>
                                    </ul>
                                    <h4 className="mt-4">Definiciones de Riesgos en Proyecto</h4>
                                    <ul>
                                        <li><strong>Definición 1:</strong> Los riesgos en proyectos son eventos o condiciones inciertas que, si ocurren, pueden tener efectos positivos o negativos en los objetivos del proyecto.</li>
                                        <li><strong>Definición 2:</strong> Son potenciales problemas futuros que pueden impactar el éxito del proyecto.</li>
                                    </ul>
                                    <h4 className="mt-4">Modelo de Creación Propia</h4>
                                    <img src={Imagen} alt="Imagen del modelo" className="img-fluid" />
                                </>
                            ))}>
                                Ver información
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <InfoModal
                show={modalShow}
                handleClose={handleCloseModal}
                title={modalTitle}
                content={modalContent}
            />
        </div>
    );
};

export default ConceptsSection;




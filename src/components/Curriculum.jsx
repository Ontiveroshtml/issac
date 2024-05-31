import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import PDF1 from './../pdfs/Ontiveros.pdf'
import PDF2 from './../pdfs/Campagne.pdf'
import PDF3 from './../pdfs/Campagne.pdf'

const Curriculum = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedCurriculum, setSelectedCurriculum] = useState(null);

    const handleModal = (curriculum) => {
        setSelectedCurriculum(curriculum);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="container mt-4">
        <h2 className="mb-4">Curriculums</h2>

        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">Luis Eduardo Ontiveros Dávila</h5>
                <Button variant="primary" onClick={() => handleModal(PDF1)}>Ver Curriculum</Button>
            </div>
        </div>

        <Modal show={showModal && selectedCurriculum === PDF1} onHide={handleCloseModal} size="xl">
            <Modal.Header closeButton>
                <Modal.Title>Curriculum de Luis Eduardo Ontiveros Dávila</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <iframe title="Curriculum" src={PDF1} width="100%" height="500" frameborder="0"></iframe>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
            </Modal.Footer>
        </Modal>

        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">Gustavo Campagne Carrasco</h5>
                <Button variant="primary" onClick={() => handleModal(PDF2)}>Ver Curriculum</Button>
            </div>
        </div>

        <Modal show={showModal && selectedCurriculum === PDF2} onHide={handleCloseModal} size="xl">
            <Modal.Header closeButton>
                <Modal.Title>Curriculum de Gustavo Campagne Carrasco</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <iframe title="Curriculum" src={PDF2} width="100%" height="500" frameborder="0"></iframe>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
            </Modal.Footer>
        </Modal>

        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">Graciela Irene León Quintana</h5>
                <Button variant="primary" onClick={() => handleModal(PDF3)}>Ver Curriculum</Button>
            </div>
        </div>

        <Modal show={showModal && selectedCurriculum === PDF3} onHide={handleCloseModal} size="xl">
            <Modal.Header closeButton>
                <Modal.Title>Curriculum de Graciela Irene León Quintana</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <iframe title="Curriculum" src={PDF3} width="100%" height="500" frameborder="0"></iframe>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    </div>
    );
}
export default Curriculum;



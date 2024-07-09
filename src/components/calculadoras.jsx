import React, { useState } from 'react';

const estilos = {
    body: {
        fontFamily: 'sans-serif',
    },
    container: {
        width: '500px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
    },
    h1: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
    },
    button: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
    },
    resultado: {
        marginTop: '20px',
        border: '1px solid #ccc',
        padding: '10px',
    },
};

const EfectividadCotidiana = () => {
    const [realizados, setRealizados] = useState('');
    const [total, setTotal] = useState('');
    const [efectividad, setEfectividad] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (parseFloat(realizados) > parseFloat(total)) {
            alert('El número de logros alcanzados no puede ser mayor que el número total de objetivos.');
            return;
        }

        const efectividadCalc = (parseFloat(realizados) / parseFloat(total)) * 100;
        setEfectividad(efectividadCalc.toFixed(2));
    };

    return (
        <div style={estilos.container}>
            <h1 style={estilos.h1}>Calculadora de Efectividad en la Vida Cotidiana</h1>
            <form onSubmit={handleSubmit}>
                <label style={estilos.label} htmlFor="realizados">Logros alcanzados:</label>
                <input
                    style={estilos.input}
                    type="number"
                    id="realizados"
                    name="realizados"
                    min="0"
                    value={realizados}
                    onChange={(e) => setRealizados(e.target.value)}
                    required
                />
                <label style={estilos.label} htmlFor="total">Total de objetivos:</label>
                <input
                    style={estilos.input}
                    type="number"
                    id="total"
                    name="total"
                    min="1"
                    value={total}
                    onChange={(e) => setTotal(e.target.value)}
                    required
                />
                <button style={estilos.button} type="submit">Calcular</button>
            </form>
            <div style={estilos.resultado}>
                {efectividad !== null && <p>Efectividad: {efectividad}%</p>}
            </div>
        </div>
    );
};

const EfectividadEficienciaEficacia = () => {
    const [eficacia, setEficacia] = useState('');
    const [eficiencia, setEficiencia] = useState('');
    const [efectividad, setEfectividad] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const efectividadCalc = (parseFloat(eficacia) * parseFloat(eficiencia)) / 100;
        setEfectividad(efectividadCalc.toFixed(2));
    };

    return (
        <div style={estilos.container}>
            <h1 style={estilos.h1}>Calculadora de Efectividad a partir de Eficacia y Eficiencia</h1>
            <form onSubmit={handleSubmit}>
                <label style={estilos.label} htmlFor="eficacia">Eficacia:</label>
                <input
                    style={estilos.input}
                    type="number"
                    id="eficacia"
                    name="eficacia"
                    min="0"
                    max="100"
                    step="0.01"
                    value={eficacia}
                    onChange={(e) => setEficacia(e.target.value)}
                    required
                />
                <label style={estilos.label} htmlFor="eficiencia">Eficiencia:</label>
                <input
                    style={estilos.input}
                    type="number"
                    id="eficiencia"
                    name="eficiencia"
                    min="0"
                    max="100"
                    step="0.01"
                    value={eficiencia}
                    onChange={(e) => setEficiencia(e.target.value)}
                    required
                />
                <button style={estilos.button} type="submit">Calcular</button>
            </form>
            <div style={estilos.resultado}>
                {efectividad !== null && <p>Efectividad: {efectividad}%</p>}
            </div>
        </div>
    );
};

const Produccion = () => {
    const [unidadesProducidas, setUnidadesProducidas] = useState('');
    const [tiempoPlaneado, setTiempoPlaneado] = useState('');
    const [tiempoReal, setTiempoReal] = useState('');
    const [eficiencia, setEficiencia] = useState(null);
    const [efectividad, setEfectividad] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (parseFloat(tiempoReal) <= 0) {
            alert('El tiempo real no puede ser menor o igual a cero.');
            return;
        }

        const eficienciaCalc = (parseFloat(tiempoPlaneado) / parseFloat(tiempoReal)) * 100;
        const efectividadCalc = (parseFloat(unidadesProducidas) / parseFloat(tiempoPlaneado)) * 100;

        setEficiencia(eficienciaCalc.toFixed(2));
        setEfectividad(efectividadCalc.toFixed(2));
    };

    return (
        <div style={estilos.container}>
            <h1 style={estilos.h1}>Calculadora de Efectividad en la Producción</h1>
            <form onSubmit={handleSubmit}>
                <label style={estilos.label} htmlFor="unidades_producidas">Unidades producidas:</label>
                <input
                    style={estilos.input}
                    type="number"
                    id="unidades_producidas"
                    name="unidades_producidas"
                    min="0"
                    value={unidadesProducidas}
                    onChange={(e) => setUnidadesProducidas(e.target.value)}
                    required
                />
                <label style={estilos.label} htmlFor="tiempo_planeado">Tiempo planeado:</label>
                <input
                    style={estilos.input}
                    type="number"
                    id="tiempo_planeado"
                    name="tiempo_planeado"
                    min="0"
                    step="0.01"
                    value={tiempoPlaneado}
                    onChange={(e) => setTiempoPlaneado(e.target.value)}
                    required
                />
                <label style={estilos.label} htmlFor="tiempo_real">Tiempo real:</label>
                <input
                    style={estilos.input}
                    type="number"
                    id="tiempo_real"
                    name="tiempo_real"
                    min="0"
                    step="0.01"
                    value={tiempoReal}
                    onChange={(e) => setTiempoReal(e.target.value)}
                    required
                />
                <button style={estilos.button} type="submit">Calcular</button>
            </form>
            <div style={estilos.resultado}>
                {eficiencia !== null && <p>Eficiencia: {eficiencia}%</p>}
                {efectividad !== null && <p>Efectividad: {efectividad}%</p>}
            </div>
        </div>
    );
};

const ROI = () => {
    const [inversion, setInversion] = useState('');
    const [beneficio, setBeneficio] = useState('');
    const [roi, setRoi] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const roiCalc = ((parseFloat(beneficio) - parseFloat(inversion)) / parseFloat(inversion)) * 100;
        setRoi(roiCalc.toFixed(2));
    };

    return (
        <div style={estilos.container}>
            <h1 style={estilos.h1}>Calculadora de Retorno de Inversión</h1>
            <form onSubmit={handleSubmit}>
                <label style={estilos.label} htmlFor="inversion">Inversión:</label>
                <input
                    style={estilos.input}
                    type="number"
                    id="inversion"
                    name="inversion"
                    min="0"
                    value={inversion}
                    onChange={(e) => setInversion(e.target.value)}
                    required
                />
                <label style={estilos.label} htmlFor="beneficio">Beneficio:</label>
                <input
                    style={estilos.input}
                    type="number"
                    id="beneficio"
                    name="beneficio"
                    min="0"
                    value={beneficio}
                    onChange={(e) => setBeneficio(e.target.value)}
                    required
                />
                <button style={estilos.button} type="submit">Calcular ROI</button>
            </form>
            <div style={estilos.resultado}>
                {roi !== null && <p>ROI: {roi >= 0 ? `${roi}%` : `-${Math.abs(roi)}% (Pérdida)`}</p>}
            </div>
        </div>
    );
};

const Calculadoras = () => {
    const [selectedCalculator, setSelectedCalculator] = useState(null);

    const renderCalculator = () => {
        switch (selectedCalculator) {
            case 'efectividadCotidiana':
                return <EfectividadCotidiana />;
            case 'efectividadEficienciaEficacia':
                return <EfectividadEficienciaEficacia />;
            case 'produccion':
                return <Produccion />;
            case 'roi':
                return <ROI />;
            default:
                return null;
        }
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Calculadoras</h1>
            <div className="row">
                <div className="col-md-3">
                    <button onClick={() => setSelectedCalculator('efectividadCotidiana')} className="btn btn-primary btn-block mb-3">
                        Efectividad en la Vida Cotidiana
                    </button>
                </div>
                <div className="col-md-3">
                    <button onClick={() => setSelectedCalculator('efectividadEficienciaEficacia')} className="btn btn-primary btn-block mb-3">
                        Efectividad a partir de Eficacia y Eficiencia
                    </button>
                </div>
                <div className="col-md-3">
                    <button onClick={() => setSelectedCalculator('produccion')} className="btn btn-primary btn-block mb-3">
                        Producción
                    </button>
                </div>
                <div className="col-md-3">
                    <button onClick={() => setSelectedCalculator('roi')} className="btn btn-primary btn-block mb-3">
                        Retorno de Inversión (ROI)
                    </button>
                </div>
            </div>
            <div className="mt-4">{renderCalculator()}</div>
        </div>
    );
};

export default Calculadoras;

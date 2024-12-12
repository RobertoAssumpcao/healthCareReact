import React, { useEffect, useState } from 'react';
import './imc.css';

const Imc = ({ title, color }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/imc.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao carregar o JSON');
                }
                return response.json();
            })
            .then(json => setData(json))
            .catch(error => console.error('Erro:', error));
    }, []);
    
    let valor = null;

    if (data) {
        if (title === "Altura") {
            valor = data.altura;
        } else if (title === "Massa") {
            valor = data.massa;
        } else if (title === "IMC" && data.massa && data.altura) {
            valor = data.massa / (data.altura * data.altura);
        }
    }

    return (
        <div className="imc-box" style={{ backgroundColor: color }}>
            <p className="imc-title">
                {title} - {valor !== null ? valor.toFixed(2) : 'Carregando...'}
            </p>
        </div>
    );
};

export default Imc;

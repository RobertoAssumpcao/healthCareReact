import { useEffect, useState } from 'react';
import './cardGlicose.css';

const CardGlicose = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/glicose.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao carregar o JSON');
                }
                return response.json();
            })
            .then(json => {
                // Ordenar os dados pela data em ordem decrescente
                const sortedData = json.sort((a, b) => new Date(b.data) - new Date(a.data));
                // Pegar os 5 mais recentes
                setData(sortedData.slice(0, 5));
            })
            .catch(error => console.error('Erro:', error));
    }, []);

    if (!data) {
        return <p>Carregando...</p>;
    }

    return (
        <div className="card-container">
            {data.map((glicoseData, index) => (
                <div key={index} className="card">
                    <div className="card__header">
                        <img src="src/assets/Group 31.svg" alt="glicose" className="card__icon" />
                        <h2 className="card__title">Glicose</h2>
                    </div>
                    <p className="card__value">{glicoseData.glicose} mg/dl</p>
                    <p className="card__date">{new Date(glicoseData.data).toLocaleDateString('pt-BR')}</p>
                    <p className="card__status">{glicoseData.glicose < 100 ? "normal" : "alerta"}</p>
                </div>
            ))}
        </div>
    );
};

export default CardGlicose;
